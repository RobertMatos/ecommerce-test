interface VariantSelectorProps {
  variants: {
    [key: string]: string[];
  };
  selected: {
    [key: string]: string | null;
  };
  setSelected: (value: { [key: string]: string | null }) => void;
}

export default function VariantSelector({ variants, selected, setSelected }: VariantSelectorProps) {
  const select = (type: string, value: string) => {
    setSelected({ ...selected, [type]: value });
  };

  return (
    <div className="space-y-6 mt-6">
      {Object.entries(variants).map(([type, options]) => (
        <div key={type}>
          <p className="font-medium text-lg capitalize mb-2">{type}</p>
          <div className="flex flex-wrap gap-3">
            {options.map(option => (
              <button
                key={option}
                className={`px-4 py-2 rounded border transition
                  ${
                    selected[type] === option
                      ? "!bg-black !text-white !font-bold border-black"
                      : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-black hover:text-white hover:font-light focus:bg-black focus:text-white focus:font-bold"
                  }
                `}
                onClick={() => select(type, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
