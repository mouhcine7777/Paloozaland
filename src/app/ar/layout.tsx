"use client";
import { useEffect } from "react";

export default function ArLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const previousLang = document.documentElement.lang;
    const previousDir = document.documentElement.dir;
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
    return () => {
      document.documentElement.lang = previousLang;
      document.documentElement.dir = previousDir;
    };
  }, []);

  return <div dir="rtl">{children}</div>;
}
