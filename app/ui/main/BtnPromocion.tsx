'use client';

import React, { useCallback, useEffect } from "react";

interface BtnPromoProps {
  title: string;
  id_paquete: number;
  id_asunto: number;
  id_tipo_evento: number;
}

function BtnPromo({ title = '¡Quiero este paquete!', id_paquete, id_asunto, id_tipo_evento }: BtnPromoProps) {


  useEffect(() => {
    sessionStorage.setItem("id_paquete", id_paquete.toString());
    sessionStorage.setItem("id_asunto", id_asunto.toString());
    sessionStorage.setItem("id_tipo_evento", id_tipo_evento.toString());
  }, []);

  const handleClick = useCallback(() => {
    window.open("/contacto", "_self");
  }, []);

  return (
    <div>
      <div className="flex w-full max-w-lg">
        <div className="relative z-10 flex cursor-pointer overflow-hidden rounded-full border border-none p-[1.5px] md:mx-0 mx-auto">
          <div className="animate-rotate absolute h-full w-full rounded-full bg-[conic-gradient(#cbd5e1_20deg,transparent_120deg)]"></div>

          <button
            id="btn_promo"
            title="Promoción"
            onClick={() => handleClick()}
            className="relative z-20 flex w-full rounded-full bg-gray-950"
          >
            <span
              className="
                        relative z-50 rounded-full border border-gray-800 bg-none px-6 py-3 
                        text-center  text-white shadow-2xl transition duration-200 hover:bg-slate-800
                        md:text-xl text-sm
                    "
            >
              {title}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BtnPromo;