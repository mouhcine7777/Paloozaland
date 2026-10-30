"use client";
import { useEffect } from "react";

export default function EngLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const previousLang = document.documentElement.lang;
    document.documentElement.lang = "en";
    return () => {
      document.documentElement.lang = previousLang;
    };
  }, []);

  return children;
}
