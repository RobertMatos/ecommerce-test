interface ProductInfoProps {
  title: string;
  price: number;
}

export default function ProductInfo({ title, price }: ProductInfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-2xl font-semibold text-green-700">R$ {price.toFixed(2)}</p>
    </div>
  );
}
