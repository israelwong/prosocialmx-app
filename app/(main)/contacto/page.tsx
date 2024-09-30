import React from 'react'
import FormContacto from '@/app/ui/main/FormContacto';

function page() {
  return (
    <div>

      <section className="container mx-auto mt-10 max-w-screen-sm">
        <p
          className="
        text-center 
        text-6xl 
        font-Bebas-Neue
        text-gray-500
        px-8
        mb-5
        ">
          Contactanos hoy mismo
        </p>

        <div className="mx-auto">
          <p className="px-8 text-lg font-light">
            Por favor, compartenos la siguiente información brindarte una menor atención.
          </p>
          <FormContacto />
        </div>
      </section>

    </div>
  )
}

export default page
