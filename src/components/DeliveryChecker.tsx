import { useState } from "react";

interface Address {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export default function DeliveryChecker() {
  const [cep, setCep] = useState<string>("");
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const checkCEP = async () => {
    const cleanCep = cep.replace(/\D/g, "");
    if (cleanCep.length !== 8) {
      setError("CEP inválido");
      setAddress(null);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data: Address = await res.json();

      if (data.erro) {
        setError("CEP não encontrado");
        setAddress(null);
      } else {
        setError(null);
        setAddress(
          `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
        );
      }
    } catch {
      setError("Erro ao consultar o CEP");
      setAddress(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8">
      <label htmlFor="cep" className="block font-medium mb-1">
        Verifique a entrega pelo CEP
      </label>
      <div className="flex gap-2">
        <input
          id="cep"
          type="text"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkCEP();
            }
          }}
          className="border rounded px-3 py-2 w-full focus:outline-blue-400"
          maxLength={9}
        />
        <button
          onClick={checkCEP}
          disabled={loading}
          className="bg-blue-600 text-white font-bold px-4 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Carregando..." : "Verificar"}
        </button>
      </div>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      {address && <p className="text-green-700 mt-2 font-medium">{address}</p>}
    </div>
  );
}
