"use client";
import { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

function SlideFotosEvento() {
  const imagenes = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
    "/13.jpg",
    "/14.jpg",
    "/15.jpg",
  ];

  useEffect(() => {
    const glideFotosEvento = new Glide(".glide-fotos-evento", {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      autoplay: 3200,
      animationDuration: 700,
      gap: 0,
      classes: {
        activeNav: "[&>*]:bg-slate-200",
      },
      breakpoints: {
        1024: {
          perView: 4,
        },
        640: {
          perView: 1.2,
        },
      },
    });

    glideFotosEvento.mount();

    return () => {
      glideFotosEvento.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-fotos-evento relative w-full h-fit">
        {/*    <!-- Slides --> */}
        {/* <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {imagenes.map((imagen, index) => (
              <li key={index}>
                <Image
                  src={`https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/evento/${imagen}`}
                  alt={`Imagen ${index + 1}`}
                  width={500} // Ajusta el ancho según sea necesario
                  height={500} // Ajusta la altura según sea necesario
                  className="m-auto max-h-full w-full max-w-full fit-content"
                />
              </li>
            ))}
          </ul>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default SlideFotosEvento;
