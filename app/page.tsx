import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bienvenido a ProSocial",
  description: "Forogafía y video profesional para eventos sociales",
};


export default function Home() {
  return (
    <section className="w-full h-auto flex items-center justify-center
    bg-gradient-to-b from-slate-900 to-slate-950/20
    ">

      <div className="">

        <div className="max-w-screen-md mx-auto pt-10 px-10">
          <div className="pt-5 pb-10 text-center md:w-2/3 mx-auto px-8">
            <h2 className="
                mx-auto font-Bebas-Neue 
                md:text-5xl text-6xl
                animate-pulse text-slate-600">
              10 años de experiencia
            </h2>
            <p className="md:text-2xl text-xl">
              Presentes en momentos especiales
            </p>

          </div>
        </div>


        <div className="max-w-screen-md mx-auto px-10">


          <div className="flex flex-col items-center gap-5 w-full pb-5">
            <div className="w-full max-w-sm">
              <div className="relative z-10 flex cursor-pointer overflow-hidden rounded-full border border-none p-[1.5px] mx-auto">
                <div className="animate-rotate absolute h-full w-full rounded-full bg-[conic-gradient(#cbd5e1_20deg,transparent_120deg)]"></div>
                <Link href="/fifteens" className="relative z-20 flex w-full items-center justify-center rounded-full bg-gray-950" title="Fifteens">
                  <span className="relative z-50 rounded-full py-4 text-center text-white shadow-2xl md:text-xl text-sm
                        ">
                    XV años
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 w-full pb-5">
            <div className="w-full max-w-sm">
              <div className="relative z-10 flex cursor-pointer overflow-hidden rounded-full border border-none p-[1.5px] mx-auto">
                <div className="animate-rotate absolute h-full w-full rounded-full bg-[conic-gradient(#cbd5e1_20deg,transparent_120deg)]"></div>
                <Link href="/weddings" className="relative z-20 flex w-full items-center justify-center rounded-full bg-gray-950" title="Fifteens">
                  <span className="relative z-50 rounded-full py-4 text-center text-white shadow-2xl md:text-xl text-sm
                        ">
                    Bodas
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <p className="
        text-center
        pt-10
        md:w-2/4
        mx-auto
        text-sm
        text-gray-400
        ">
            Agradecemos tu interés en nuestros servicios profesionales en fotografía y video para eventos sociales.
          </p>
        </div>

      </div>

    </section>
  );
}
