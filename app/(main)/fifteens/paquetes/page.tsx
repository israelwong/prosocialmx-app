import React from 'react'
import type { Metadata } from "next";
import BtnCerrar from '@/app/ui/main/BtnCerrar';
import PaquetesFifteens from '@/app/ui/main/fifteens/PaquetesFifteens';
import Galeria from '@/app/ui/main/Galeria';

export const metadata: Metadata = {
  title: "Paquetes",
  description: "Paquetes de fotografía y video para XV años",
};

function page() {
  return (
    <div>
      <section className="container mx-auto mt-3 text-center md:max-w-screen-lg max-w-screen-sm">

        <div className="py-10 md:py-12">
          <h4
            className="
            text-center 
            text-xl 
            md:text-2xl
            font-Bebas-Neue
            text-gray-500
            ">
            Paquetes
          </h4>
          <h1>
            <span
              className="text-gray-500 font-Smooch text-6xl md:text-8xl
                ">Fifteens</span>
          </h1>
        </div>

        <div className="px-5 md:max-w-screen-sm mx-auto max-w-screen-sm">
          <PaquetesFifteens />
        </div>

      </section>

      <Galeria
        ruta={'https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/porfatolio/'}
        num_fotos={52}
        rowHeight={250}
      />

      <BtnCerrar url={'/fifteens'} />
    </div>
  )
}

export default page
