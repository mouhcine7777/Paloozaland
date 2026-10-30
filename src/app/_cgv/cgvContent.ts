// Contenu des CGV (version validée par l'avocat — Parthenon, 22/10/2026).
// Les jetons {{...}} sont remplacés par les valeurs de CGV_PLACEHOLDERS dans page.tsx.

// Version enregistrée avec chaque commande (traçabilité de l’acceptation, art. 4 et 16).
export const CGV_VERSION = "2026-10-22";

export type CgvBlock = { type: 'p' | 'h3' | 'li'; text: string };
export type CgvSection = { title: string; blocks: CgvBlock[] };

export const CGV_SECTIONS: CgvSection[] = [
  {
    "title": "IDENTIFICATION DE L’EXPLOITANT",
    "blocks": [
      {
        "type": "p",
        "text": "La Société Sunset Hospitality Company (Palooza) S.A.R.L, immatriculée au registre de commerce de Casablanca sous le ICE n°000224736000060, dont le siège social est situé City Park Business Center 106, Rue Abderrahmane Sahraoui - 20070 CASABLANCA représentée par Mr. Othman Benabdeljelil en sa qualité de Gérant régulièrement habilité aux fins des présentes."
      },
      {
        "type": "p",
        "text": "Les présentes Conditions générales de vente et d’utilisation (ci-après les « CGV ») régissent les commandes de billets, pass et prestations proposées à la vente en ligne par la société exploitant le Parc Palooza. Elles sont portées à la connaissance du Client avant la validation de sa commande."
      }
    ]
  },
  {
    "title": "ARTICLE 1 – OBJET ET CHAMP D’APPLICATION",
    "blocks": [
      {
        "type": "p",
        "text": "Les présentes CGV définissent les conditions dans lesquelles l’Exploitant commercialise et délivre des titres d’accès dématérialisés donnant accès aux espaces, attractions et prestations du Parc, notamment :"
      },
      {
        "type": "li",
        "text": "l’espace parc d’attractions et ses manèges ;"
      },
      {
        "type": "li",
        "text": "les espaces aventures, jeux interactifs, simulateurs et activités de réalité virtuelle ;"
      },
      {
        "type": "li",
        "text": "l’espace Aqua Park, ses bassins, toboggans et espaces associés ;"
      },
      {
        "type": "li",
        "text": "les billets, pass, forfaits, offres de groupe, anniversaires, événements et prestations complémentaires expressément proposés à la vente en ligne."
      },
      {
        "type": "p",
        "text": "Les caractéristiques essentielles, le prix, la date de validité, les conditions d’accès, les éventuelles restrictions et les prestations incluses dans chaque billet sont celles indiquées sur l’offre présentée au Client avant la commande. Seules les prestations expressément comprises dans l’offre achetée sont incluses dans le prix. Les prestations de restauration, événements privatifs, groupes ou autres services faisant l’objet d’un devis ou de conditions particulières peuvent être régies par un document distinct."
      },
      {
        "type": "p",
        "text": "Les CGV s’appliquent aux achats effectués par des consommateurs. Les commandes passées par des professionnels pour les besoins de leur activité peuvent faire l’objet de conditions particulières distinctes. Toute disposition impérative plus favorable au consommateur demeure applicable."
      }
    ]
  },
  {
    "title": "ARTICLE 2 – INFORMATION PRÉCONTRACTUELLE ET OFFRES",
    "blocks": [
      {
        "type": "p",
        "text": "Avant de confirmer sa commande, le Client accède aux informations essentielles relatives au billet choisi, à sa date de validité, aux tarifs, aux modalités de paiement, aux conditions d’utilisation, aux restrictions de sécurité et aux modalités de réclamation. Le Client est invité à vérifier ces informations avant de procéder au paiement."
      },
      {
        "type": "p",
        "text": "Les photographies, illustrations et descriptions publiées sur le site ont une valeur informative, sauf lorsqu’elles précisent une caractéristique déterminante de l’offre. Les horaires, attractions accessibles et prestations proposées peuvent varier selon la saison, les conditions météorologiques, les impératifs de sécurité et les opérations de maintenance, dans les conditions prévues aux présentes CGV."
      },
      {
        "type": "p",
        "text": "L’Exploitant veille à présenter des informations claires et actualisées. En cas d’erreur matérielle manifeste sur une offre ou un prix, l’Exploitant contacte le Client, lorsque cela est possible, afin de rechercher une solution conforme à la législation applicable. Aucune somme supplémentaire ne peut être imposée au Client après commande sans son accord ou sans fondement légal."
      }
    ]
  },
  {
    "title": "ARTICLE 3 – PRIX, TARIFS RÉDUITS ET FACTURATION",
    "blocks": [
      {
        "type": "p",
        "text": "Les prix sont affichés en dirhams marocains (MAD), toutes taxes comprises (TTC), et comprennent les taxes et frais obligatoires applicables indiqués au Client avant la validation de la commande. Aucun supplément ne peut être facturé au seul motif de l’utilisation d’un moyen de paiement électronique accepté par l’Exploitant."
      },
      {
        "type": "p",
        "text": "Les tarifs enfants, groupes, seniors, promotions et autres tarifs réduits sont soumis aux critères d’éligibilité indiqués dans l’offre concernée. Lorsque le tarif dépend de l’âge ou de la taille, le seuil exact et les justificatifs admis sont précisés avant la commande. L’éligibilité peut être vérifiée au contrôle d’accès au moyen d’une mesure ou d’un justificatif approprié."
      },
      {
        "type": "p",
        "text": "Lorsqu’un tarif réduit a été appliqué à tort et que le bénéficiaire ne remplit pas les critères annoncés, l’accès au tarif correspondant peut être subordonné au règlement préalable de la différence tarifaire applicable, à condition que le Client ait été informé des critères avant la commande. Cette régularisation constitue un ajustement de prix et non une pénalité."
      }
    ]
  },
  {
    "title": "ARTICLE 4 – COMMANDE EN LIGNE ET FORMATION DU CONTRAT",
    "blocks": [
      {
        "type": "p",
        "text": "La commande en ligne suit les étapes affichées sur le site marchand : sélection du billet ou de la prestation, choix de la date le cas échéant, indication des quantités et renseignements nécessaires, vérification du récapitulatif, acceptation expresse des CGV et paiement au moyen de l’interface proposée."
      },
      {
        "type": "p",
        "text": "Avant la validation définitive, le Client peut vérifier les caractéristiques de sa commande, le prix total et les informations saisies, puis corriger les erreurs éventuelles. L’acceptation des CGV est recueillie au moyen d’une case dédiée non précochée ou de tout mécanisme électronique équivalent permettant d’établir une acceptation expresse."
      },
      {
        "type": "p",
        "text": "La commande est confirmée après réception de la confirmation du paiement et émission ou mise à disposition du billet électronique, sous réserve des règles applicables au service de paiement. Un courriel de confirmation est envoyé à l’adresse communiquée par le Client. L’Exploitant conserve les éléments électroniques nécessaires à la traçabilité de la commande et de l’acceptation des CGV, selon les durées applicables."
      },
      {
        "type": "p",
        "text": "Si le compte du Client a été débité sans que le billet soit délivré ou reçu, le Client contacte le service clientèle en communiquant, dans la mesure du possible, la référence de commande et les éléments de transaction disponibles. Après vérification, l’Exploitant procède à la délivrance du billet, à la régularisation de la commande ou au remboursement des sommes dues, selon le cas et conformément à la législation applicable."
      }
    ]
  },
  {
    "title": "ARTICLE 5 – PAIEMENT ÉLECTRONIQUE",
    "blocks": [
      {
        "type": "p",
        "text": "Le paiement est réalisé en ligne au moment de la commande au moyen des solutions de paiement effectivement proposées et activées sur le site, notamment, le cas échéant, par l’intermédiaire de LANA CASH S.A. Les moyens de paiement disponibles sont ceux affichés dans l’interface au jour de l’achat."
      },
      {
        "type": "p",
        "text": "Les opérations de paiement sont soumises aux conditions du prestataire de paiement, aux règles des réseaux concernés et à la réglementation applicable. L’Exploitant n’invite pas le Client à lui transmettre par courrier électronique ou par téléphone ses données confidentielles de paiement en dehors de l’interface sécurisée prévue à cet effet."
      },
      {
        "type": "p",
        "text": "Les données de carte et de paiement sont traitées selon l’architecture technique effectivement mise en œuvre par les intervenants concernés. Les modalités précises de stockage, de transmission et de sécurisation des données sont celles décrites dans les informations communiquées par le prestataire de paiement. Aucun frais ou commission supplémentaire ne peut être imposé au Client du seul fait de l’utilisation du moyen de paiement électronique choisi parmi ceux acceptés."
      },
      {
        "type": "p",
        "text": "La confirmation, l’annulation ou le remboursement d’une opération est traité conformément aux règles du prestataire de paiement et aux dispositions légales applicables. La présente clause ne préjuge pas des droits du Client en cas d’opération non autorisée, de paiement mal exécuté ou de contestation fondée."
      }
    ]
  },
  {
    "title": "ARTICLE 6 – DÉLIVRANCE, VALIDITÉ ET UTILISATION DES E-BILLETS",
    "blocks": [
      {
        "type": "h3",
        "text": "6.1. Délivrance et présentation"
      },
      {
        "type": "p",
        "text": "Les billets sont délivrés sous format électronique, notamment PDF, portefeuille numérique, QR code, code-barres ou tout format indiqué lors de l’achat. Le Client doit présenter un billet lisible, sur support papier ou sur l’écran d’un appareil compatible, selon les modalités indiquées dans le billet ou sur le site."
      },
      {
        "type": "h3",
        "text": "6.2. Contrôle d’accès et utilisation unique"
      },
      {
        "type": "p",
        "text": "Chaque code d’accès est destiné à être contrôlé par le système de billetterie. Sauf indication contraire figurant sur le billet, un billet validé à l’entrée ne peut être utilisé une seconde fois. En cas de détection d’un billet déjà validé, dupliqué, falsifié ou manifestement utilisé de manière frauduleuse, l’accès peut être suspendu le temps des vérifications nécessaires. Le Client conserve la possibilité de présenter les justificatifs utiles afin de permettre l’examen d’une erreur éventuelle du système."
      },
      {
        "type": "h3",
        "text": "6.3. Cession et revente"
      },
      {
        "type": "p",
        "text": "Les conditions de cessibilité sont celles indiquées dans l’offre et sur le billet. La revente commerciale non autorisée, la falsification, la reproduction frauduleuse ou l’utilisation du billet à des fins trompeuses sont interdites. L’Exploitant peut refuser un billet dont la fraude ou l’invalidité est établie, sans préjudice des droits du Client lorsque l’anomalie résulte d’une erreur imputable à l’Exploitant ou à son système de billetterie."
      }
    ]
  },
  {
    "title": "ARTICLE 7 – ANNULATION, REPORT ET REMBOURSEMENT",
    "blocks": [
      {
        "type": "h3",
        "text": "7.1. Annulation ou non-présentation du Client"
      },
      {
        "type": "p",
        "text": "Sauf disposition particulière plus favorable figurant dans l’offre achetée, les billets datés ne sont ni échangeables ni remboursables en cas de désistement, de changement de convenance personnelle, de retard du Client ou de non-présentation à la date prévue. Cette règle s’applique sous réserve des droits impératifs prévus par la législation applicable et des situations relevant de l’Exploitant."
      },
      {
        "type": "h3",
        "text": "7.2. Fermeture totale ou annulation imputable au Parc"
      },
      {
        "type": "p",
        "text": "En cas de fermeture totale du Parc ou d’annulation par l’Exploitant empêchant l’utilisation du billet à la date prévue, le Client peut choisir entre le report de son billet à une date ultérieure convenue avec l’Exploitant ou le remboursement du prix correspondant à la prestation non fournie. Si seule une partie distincte de la prestation achetée n’est pas fournie, la solution proposée tient compte de l’importance de cette partie et des droits reconnus au Client par la législation applicable."
      },
      {
        "type": "h3",
        "text": "7.3. Modalités de remboursement"
      },
      {
        "type": "p",
        "text": "Lorsqu’un remboursement est dû, il est initié par l’Exploitant par le circuit de paiement utilisé pour la commande, selon les modalités techniquement disponibles et les règles applicables. Le remboursement est effectué, en principe, sur le moyen de paiement ayant servi à la transaction initiale, sauf impossibilité technique ou exigence légale contraire. L’Exploitant communique au Client les informations utiles au suivi de l’opération et respecte les délais légaux applicables."
      },
      {
        "type": "p",
        "text": "En cas d’indisponibilité du service commandé, les dispositions de l’article 40 de la loi n° 31-08 relatives à l’information du consommateur et au remboursement sont appliquées lorsque leurs conditions sont réunies. Les délais de traitement dépendant du prestataire de paiement peuvent varier, sans supprimer l’obligation de l’Exploitant d’initier le remboursement dans les délais qui lui incombent légalement."
      },
      {
        "type": "h3",
        "text": "7.4. Conditions météorologiques"
      },
      {
        "type": "p",
        "text": "Lorsque le Parc demeure ouvert et que les principales prestations achetées restent accessibles, des conditions météorologiques ordinaires ne donnent pas automatiquement droit à un remboursement. Toutefois, si les conditions climatiques conduisent à une fermeture totale ou à une indisponibilité substantielle des prestations essentielles, les solutions prévues aux articles 7.3 et 9 s’appliquent selon la situation et les dispositions légales applicables."
      }
    ]
  },
  {
    "title": "ARTICLE 8 – RÈGLEMENT INTÉRIEUR, ACCÈS ET SÉCURITÉ",
    "blocks": [
      {
        "type": "p",
        "text": "L’accès au Parc implique le respect du règlement intérieur, des consignes de sécurité affichées, des instructions du personnel et des conditions d’utilisation propres à chaque activité. Le règlement intérieur est consultable à l’adresse suivante : {{REGLEMENT_URL}} et est affiché à l’entrée du Parc."
      },
      {
        "type": "h3",
        "text": "8.1. Mineurs et surveillance"
      },
      {
        "type": "p",
        "text": "Les enfants de moins de douze (12) ans doivent être accompagnés d’un adulte majeur et demeurent sous la surveillance effective de celui-ci, sous réserve des conditions particulières applicables à certaines activités. L’accompagnateur est tenu de respecter les règles de sécurité et de veiller à ce que les mineurs placés sous sa responsabilité respectent les consignes du Parc."
      },
      {
        "type": "h3",
        "text": "8.2. Conditions d’accès aux attractions"
      },
      {
        "type": "p",
        "text": "L’accès aux attractions est subordonné au respect des critères de taille, d’âge, de morphologie et de santé ainsi que des restrictions indiquées sur place ou dans les consignes du fabricant. Certaines attractions peuvent être déconseillées ou interdites aux femmes enceintes, aux personnes présentant certaines pathologies ou à toute personne dont l’état est incompatible avec l’activité. Le visiteur doit prendre connaissance des avertissements et solliciter le personnel en cas de doute."
      },
      {
        "type": "h3",
        "text": "8.3. Espace aquatique"
      },
      {
        "type": "p",
        "text": "Dans l’espace Aqua Park, les visiteurs respectent les règles d’hygiène et de sécurité affichées, notamment les exigences relatives aux tenues de bain, aux douches, aux pédiluves et à l’utilisation de couches de bain adaptées pour les jeunes enfants lorsque cela est requis. Les conditions détaillées sont consultables dans le règlement intérieur."
      },
      {
        "type": "h3",
        "text": "8.4. Objets et comportements interdits"
      },
      {
        "type": "p",
        "text": "Sont interdits, conformément au règlement intérieur, objets dangereux, objets tranchants, contenants en verre, substances illicites, alcool et tout objet susceptible de porter atteinte à la sécurité. L’introduction de nourriture ou de boissons extérieures peut être interdite, à l’exception notamment de la nourriture destinée aux nourrissons et des situations particulières autorisées par le Parc. Les animaux sont interdits, sauf exception imposée par la réglementation applicable ou expressément autorisée par le Parc."
      },
      {
        "type": "p",
        "text": "L’Exploitant peut refuser l’accès ou faire quitter le Parc à toute personne dont le comportement constitue un risque sérieux pour la sécurité, trouble gravement le fonctionnement du site ou contrevient aux consignes après rappel lorsque celui-ci est possible. Cette mesure doit être proportionnée aux circonstances. Lorsque l’exclusion résulte d’un manquement grave imputable au visiteur, aucun remboursement n’est dû, sous réserve des dispositions impératives applicables et de l’examen des circonstances particulières."
      }
    ]
  },
  {
    "title": "ARTICLE 9 – DISPONIBILITÉ DES ATTRACTIONS ET MAINTENANCE",
    "blocks": [
      {
        "type": "p",
        "text": "Pour des raisons de sécurité, de maintenance préventive ou corrective, de contrôle technique, de conditions météorologiques incompatibles avec leur utilisation ou d’instructions des autorités compétentes, une ou plusieurs attractions, installations ou zones peuvent être temporairement indisponibles. L’Exploitant s’efforce, dans la mesure du possible, d’informer les visiteurs des indisponibilités significatives."
      },
      {
        "type": "p",
        "text": "La fermeture temporaire d’une attraction ne donne pas, à elle seule, droit à un remboursement lorsque les principales prestations comprises dans le billet restent accessibles et que la fermeture n’altère pas substantiellement la prestation achetée. En revanche, en cas de fermeture du Parc ou d’indisponibilité substantielle des prestations essentielles incluses dans le billet, l’Exploitant propose une solution adaptée, pouvant consister en un report, une prestation alternative acceptée par le Client ou un remboursement total ou partiel correspondant à la prestation non fournie, compte tenu de la situation et des dispositions légales applicables."
      }
    ]
  },
  {
    "title": "ARTICLE 10 – RESPONSABILITÉ DE L’EXPLOITANT ET EFFETS PERSONNELS",
    "blocks": [
      {
        "type": "p",
        "text": "L’Exploitant exécute ses obligations conformément aux dispositions légales et réglementaires applicables, notamment en matière d’organisation des prestations, d’entretien des installations et de sécurité des visiteurs. Aucune stipulation des présentes CGV ne peut être interprétée comme excluant ou limitant une responsabilité que la loi met impérativement à la charge de l’Exploitant, notamment en cas de dommage corporel imputable à un manquement de celui-ci."
      },
      {
        "type": "p",
        "text": "Les visiteurs demeurent responsables de la surveillance de leurs effets personnels et sont invités à utiliser les casiers fermés ou espaces de dépôt proposés par le Parc, selon les conditions affichées. L’Exploitant ne répond pas d’une perte, d’un vol ou d’une détérioration qui ne lui est pas imputable. Cette disposition ne fait pas obstacle à la responsabilité de l’Exploitant lorsque les conditions légales de cette responsabilité sont réunies."
      }
    ]
  },
  {
    "title": "ARTICLE 11 – INTERVENTION DU PRESTATAIRE DE PAIEMENT",
    "blocks": [
      {
        "type": "p",
        "text": "LANA CASH S.A. intervient, le cas échéant, pour le traitement ou l’acquisition des paiements électroniques de la billetterie, selon sa convention avec l’Exploitant et les conditions du service concerné. L’Exploitant demeure responsable des prestations de loisirs qu’il commercialise et de l’exécution de ses obligations envers les visiteurs. L’intervention d’un prestataire de paiement n’emporte pas, à elle seule, sa qualité de fournisseur des attractions ou activités du Parc."
      },
      {
        "type": "p",
        "text": "Chaque intervenant demeure responsable de ses propres obligations et manquements, dans les conditions prévues par la législation applicable et les contrats qui le lient au Client ou à l’Exploitant. Les présentes CGV ne créent aucune garantie autonome ou illimitée au bénéfice de LANA CASH ou d’un tiers. Toute répartition contractuelle de risques, garantie ou indemnisation entre l’Exploitant et le prestataire de paiement relève de leur convention distincte et n’est pas incorporée aux présentes CGV."
      }
    ]
  },
  {
    "title": "ARTICLE 12 – FORCE MAJEURE",
    "blocks": [
      {
        "type": "p",
        "text": "Aucune Partie ne peut être tenue responsable d’un retard ou d’une inexécution résultant d’un événement présentant les caractères de la force majeure au sens des articles 268 et 269 du Code des obligations et des contrats marocain. La qualification de force majeure s’apprécie au regard des conditions légales et des effets concrets de l’événement sur l’exécution de l’obligation concernée."
      },
      {
        "type": "p",
        "text": "Peuvent notamment être concernés, sous réserve que les conditions légales soient réunies, les catastrophes naturelles, intempéries exceptionnelles, incendies, situations graves affectant la sécurité ou fermetures ordonnées par les autorités compétentes. La Partie affectée informe, dans la mesure du possible, les personnes concernées des conséquences de l’événement et des mesures envisagées."
      },
      {
        "type": "p",
        "text": "Lorsque l’événement empêche totalement la fourniture de la prestation à la date prévue, le Client se voit proposer le report du billet ou le remboursement du prix correspondant à la prestation non fournie, conformément à l’article 7 et aux dispositions légales applicables. En cas d’exécution partielle, la solution tient compte des prestations effectivement disponibles et des droits du Client."
      }
    ]
  },
  {
    "title": "ARTICLE 13 – DONNÉES À CARACTÈRE PERSONNEL",
    "blocks": [
      {
        "type": "p",
        "text": "Par le biais de contrat, SUNSET HOSPITALITY COMPANY collecte vos données personnelles en vue {{FINALITE}}. Ce traitement a fait l’objet d’une déclaration / demande d’autorisation auprès de la CNDP sous le numéro {{CNDP_NUMERO}}. Les données personnelles collectées peuvent être transmises à {{DESTINATAIRES}} conformément à la demande de transfert déposée auprès de la CNDP. Vous pouvez vous adresser à {{CONTACT_DONNEES}} pour exercer vos droits d’accès, de rectification et d’opposition conformément aux dispositions de la loi 09-08."
      }
    ]
  },
  {
    "title": "ARTICLE 14 – RÉCLAMATIONS",
    "blocks": [
      {
        "type": "p",
        "text": "Le Client est invité à adresser toute réclamation au service clientèle à l’adresse {{EMAIL_RECLAMATIONS}}, en précisant la référence de commande, la date de visite et les éléments utiles à l’examen de la demande. Il est recommandé de transmettre la réclamation dans les trente (30) jours suivant la date de visite afin d’en faciliter le traitement. Ce délai est indicatif et ne prive pas le Client des droits et recours dont il bénéficie en vertu de la législation applicable."
      },
      {
        "type": "p",
        "text": "L’Exploitant s’efforce d’apporter une réponse dans un délai de quinze (15) jours ouvrés à compter de la réception d’une réclamation suffisamment documentée. Si la complexité de la demande nécessite un délai supplémentaire, le Client en est informé dans la mesure du possible."
      }
    ]
  },
  {
    "title": "ARTICLE 15 – DROIT APPLICABLE ET JURIDICTION COMPÉTENTE",
    "blocks": [
      {
        "type": "p",
        "text": "Les présentes CGV sont régies par le droit marocain. Le présent contrat est soumis au droit marocain. Les Parties s’engagent à rechercher prioritairement une solution amiable à tout différend relatif à l’interprétation ou à l’exécution du présent contrat. À défaut de résolution amiable, tout litige relèvera de la compétence exclusive des tribunaux du ressort du siège social du SUNSET HOSPITALITY COMPANY"
      }
    ]
  },
  {
    "title": "ARTICLE 16 – VERSION APPLICABLE ET ACCEPTATION ÉLECTRONIQUE",
    "blocks": [
      {
        "type": "p",
        "text": "La version des CGV applicable à une commande est celle mise à la disposition du Client et acceptée par celui-ci au moment de la validation de cette commande. Toute modification ultérieure s’applique aux commandes futures à compter de sa mise en ligne, sauf disposition légale contraire. Les modifications ne peuvent porter rétroactivement atteinte aux droits acquis au titre d’une commande déjà confirmée."
      },
      {
        "type": "p",
        "text": "Les CGV sont accessibles avant la validation de la commande et peuvent être enregistrées ou reproduites par le Client. L’acceptation électronique est recueillie avant paiement au moyen du dispositif prévu à cet effet. La confirmation de commande et les billets sont adressés à l’adresse électronique communiquée par le Client, sous réserve du bon fonctionnement des moyens de communication utilisés."
      },
      {
        "type": "p",
        "text": "Si une stipulation des présentes CGV est déclarée inapplicable ou nulle, les autres stipulations demeurent applicables dans la mesure permise par la loi. Aucune stipulation ne peut priver le Client d’un droit impératif reconnu par la législation applicable."
      }
    ]
  }
];
