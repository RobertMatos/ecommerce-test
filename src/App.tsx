import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery";
import ProductInfo from "./components/ProductInfo";
import VariantSelector from "./components/VariantSelector";
import DeliveryChecker from "./components/DeliveryChecker";
import { product } from "./data/productData";
import { loadState, saveState } from "./utils/storage";

interface Selection {
  [key: string]: string | null;
}

export default function App() {
  const [mainImage, setMainImage] = useState<string>(
    loadState<string>("mainImage") || product.images[0]
  );

  const [selected, setSelected] = useState<Selection>(
    loadState<Selection>("selectedVariants") || {
      tamanho: null,
      cor: null,
    }
  );

  // Salva localStorage com expiração
  useEffect(() => {
    saveState("mainImage", mainImage);
  }, [mainImage]);

  useEffect(() => {
    saveState("selectedVariants", selected);
  }, [selected]);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <main className="container mx-auto px-4 py-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <ImageGallery
            images={product.images}
            mainImage={mainImage}
            setMainImage={setMainImage}
          />
        </div>

        <section className="col-span-12 md:col-span-8">
          <ProductInfo title={product.title} price={product.price} />
          <VariantSelector
            variants={product.variants}
            selected={selected}
            setSelected={setSelected}
          />
          <DeliveryChecker />
        </section>
      </main>
    </div>
  );
}
