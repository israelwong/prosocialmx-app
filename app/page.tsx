import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bienvenido a ProSocial",
  description: "Forogafía y video profesional para eventos sociales",
};


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      ProSocial
    </div>
  );
}
