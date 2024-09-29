import React from 'react'
import type { Metadata } from "next";
// import { Fade } from "react-awesome-reveal";
import Hero from '@/app/ui/main/Fifteens/Hero';
import CTA from '@/app/ui/main/Fifteens/CTA';
import Hook from '@/app/ui/main/Hook';
import Nosotros from '@/app/ui/main/Nosotros';
import Servicios from '@/app/ui/main/Fifteens/Servicios';

export const metadata: Metadata = {
  title: "Fifteens",
  description: "Fifteens",
};

function page() {
  return (
    <div className='space-y-10'>
      <section>
        <Hero />
      </section>
      <section>
        <CTA />
        <Hook message={"Este momento especial solo se vive una vez, nosotros somos expertos en capturarlo."} />
      </section>
      <section>
        <Nosotros />
      </section>
      <section>
        <CTA />
        <Hook message={"Cuidamos todos los detalles para entregarte los mejores resultados."} />
      </section>
      <section>
        <Servicios />
      </section>
    </div>
  )
}

export default page
