"use client";
import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const SlideFotosSesionesVestido = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagenes = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "8.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
  ];

  useEffect(() => {
    const glideSesionesVestido = new Glide(".glide-fotos-sesion-vestido", {
      type: "carousel",
      focusAt: "center",
      perView: 3.5,
      autoplay: 3000,
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
          perView: 1.3,
        },
      },
    });

    glideSesionesVestido.mount();

    return () => {
      glideSesionesVestido.destroy();
    };
  }, []);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="glide-fotos-sesion-vestido relative w-full h-fit">
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {imagenes.map((imagen, index) => (
              <li key={index}>
                <Image
                  src={`https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/vestido/${imagen}`}
                  alt={`Imagen ${index + 1}`}
                  width={500}
                  height={500}
                  className="m-auto max-h-full w-full max-w-full"
                  onClick={() => handleImageClick(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={imagenes.map((imagen) => ({
          src: `https://bgtapcutchryzhzooony.supabase.co/storage/v1/object/public/ProSocial/fofografia/vestido/${imagen}`,
        }))}
      />
    </>
  );
};

export default SlideFotosSesionesVestido;
