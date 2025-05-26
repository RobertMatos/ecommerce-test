import React from "react";

interface ImageGalleryProps {
  images: string[];
  mainImage: string;
  setMainImage: (img: string) => void;
}

export default function ImageGallery({ images, mainImage, setMainImage }: ImageGalleryProps) {
  return (
    <div className="w-[35vw] max-w-[400px] flex flex-col">
      <div className="w-full aspect-square rounded-lg overflow-hidden border border-gray-300">
        <img
          src={mainImage}
          alt="Imagem principal do produto"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex mt-3 space-x-3">
        {images.map((img, i) => (
          <div
            key={i}
            className={`w-16 h-16 rounded overflow-hidden cursor-pointer border-2 ${
              mainImage === img ? "border-blue-600" : "border-transparent"
            } hover:border-blue-400 transition`}
            onClick={() => setMainImage(img)}
          >
            <img src={img} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
