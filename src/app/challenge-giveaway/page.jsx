"use client";
import Image from 'next/image';

const LogoSection = () => {
  return (
    <section className="flex items-center justify-center w-full py-16 bg-black">
      <Image
        src="/logo.png"
        alt="Palooza Park Logo"
        width={200}
        height={200}
        className="object-contain"
      />
    </section>
  );
};

export default LogoSection;