"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Galeria({ ruta, num_fotos, rowHeight }) {
  const [galeria, setGaleria] = useState([]);
  const [index, setIndex] = useState(-1);

  // Crea un array con las rutas de las fotos y las baraja aleatoriamente
  const urls = useMemo(() => {
    const urlsArray = [];
    for (let i = 1; i <= num_fotos; i++) {
      urlsArray.push(`${ruta}${i}.jpg`);
    }
    // Barajar el array de URLs
    return urlsArray.sort(() => Math.random() - 0.5);
  }, [ruta, num_fotos]);

  const getImageDimensions = useCallback(async (url) => {
    return new Promise((resolve, reject) => {
      if (typeof window === "undefined") {
        reject(new Error("This function can only be run in the browser"));
        return;
      }

      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      img.src = url;
    });
  }, []);

  const fetchGaleria = useCallback(async () => {
    try {
      const dimensionsArray = await Promise.all(
        urls.map((url) => getImageDimensions(url))
      );
      const galeriaConDimensiones = urls.map((url, index) => ({
        src: url,
        ...dimensionsArray[index],
      }));
      setGaleria(galeriaConDimensiones);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  }, [urls, getImageDimensions]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchGaleria();
    }
  }, [fetchGaleria]);

  // Añade una clave única a cada foto
  const galeriaConClaves = useMemo(
    () =>
      galeria.map((foto, idx) => ({
        ...foto,
        key: `${foto.src}-${idx}`,
      })),
    [galeria]
  );

  const handlePhotoClick = useCallback(({ index }) => {
    setIndex(index);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setIndex(-1);
  }, []);

  return (
    <div>
      <PhotoAlbum
        photos={galeriaConClaves}
        layout="rows"
        targetRowHeight={rowHeight}
        onClick={handlePhotoClick}
        loading="lazy"
      />

      <Lightbox
        slides={galeriaConClaves}
        open={index >= 0}
        index={index}
        close={handleCloseLightbox}
      />
    </div>
  );
}

export default Galeria;
