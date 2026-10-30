import type { Metadata } from "next";
import StickyNavbar from "../components/StickyNavbar";
import FooterSection from "../components/FooterSection";
import { CGV_SECTIONS } from "./cgvContent";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente et d'Utilisation | Palooza Land",
  description:
    "Conditions générales de vente et d'utilisation des billets, pass et prestations du parc Palooza Land à Marrakech.",
};

// Valeurs à compléter par Sunset Hospitality (éléments surlignés en jaune dans le document Word).
// Une valeur vide s'affiche « [à compléter] » sur la page.
const CGV_PLACEHOLDERS: Record<string, string> = {
  REGLEMENT_URL: "",
  FINALITE: "",
  CNDP_NUMERO: "",
  DESTINATAIRES: "",
  CONTACT_DONNEES: "contact@paloozaland.com",
  EMAIL_RECLAMATIONS: "contact@paloozaland.com",
};

const LAST_UPDATE = "23 octobre 2026";

function renderText(text: string) {
  return text.split(/(\{\{[A-Z_]+\}\})/).map((part, i) => {
    const match = part.match(/^\{\{([A-Z_]+)\}\}$/);
    if (!match) return part;
    const value = CGV_PLACEHOLDERS[match[1]];
    if (!value) {
      return (
        <mark key={i} className="bg-yellow-200 px-1 rounded">
          [à compléter]
        </mark>
      );
    }
    if (value.includes("@")) {
      return (
        <a key={i} href={`mailto:${value}`} className="text-orange-600 underline">
          {value}
        </a>
      );
    }
    if (value.startsWith("http")) {
      return (
        <a key={i} href={value} target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
          {value}
        </a>
      );
    }
    return value;
  });
}

const slug = (index: number) => `article-${index}`;

export default function CgvPage() {
  return (
    <main className="bg-gray-50">
      <StickyNavbar />

      <header className="bg-gray-900 pt-32 pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-dinosaur text-3xl sm:text-4xl md:text-5xl tracking-tight bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-400 bg-clip-text text-transparent leading-tight">
          CONDITIONS GÉNÉRALES DE VENTE
        </h1>
        <p className="mt-3 font-montserrat text-gray-300 text-sm sm:text-base">
          et d&apos;utilisation — Dernière mise à jour : {LAST_UPDATE}
        </p>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 font-montserrat text-gray-800">
        <nav aria-label="Sommaire" className="mb-10 rounded-2xl bg-white shadow-sm border border-gray-200 p-5 sm:p-6">
          <h2 className="font-bold text-gray-900 mb-3">Sommaire</h2>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
            {CGV_SECTIONS.map((section, index) => (
              <li key={index}>
                <a href={`#${slug(index)}`} className="text-gray-600 hover:text-orange-600">
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {CGV_SECTIONS.map((section, index) => (
          <section key={index} id={slug(index)} className="mb-10 scroll-mt-28">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-l-4 border-orange-500 pl-3 mb-4">
              {section.title}
            </h2>
            <SectionBlocks blocks={section.blocks} />
          </section>
        ))}

        <p className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500 text-right font-semibold">
          Sunset Hospitality Company
        </p>
      </div>

      <FooterSection />
    </main>
  );
}

function SectionBlocks({ blocks }: { blocks: (typeof CGV_SECTIONS)[number]["blocks"] }) {
  // Regroupe les éléments de liste consécutifs dans un même <ul>
  const groups: { type: string; items: string[] }[] = [];
  for (const block of blocks) {
    const last = groups[groups.length - 1];
    if (block.type === "li" && last?.type === "li") last.items.push(block.text);
    else groups.push({ type: block.type, items: [block.text] });
  }

  return (
    <div className="space-y-3 text-sm sm:text-base leading-relaxed text-justify">
      {groups.map((group, i) => {
        if (group.type === "li") {
          return (
            <ul key={i} className="list-disc pl-6 space-y-1">
              {group.items.map((item, j) => (
                <li key={j}>{renderText(item)}</li>
              ))}
            </ul>
          );
        }
        if (group.type === "h3") {
          return (
            <h3 key={i} className="font-semibold text-gray-900 pt-2">
              {renderText(group.items[0])}
            </h3>
          );
        }
        return <p key={i}>{renderText(group.items[0])}</p>;
      })}
    </div>
  );
}
