type Item = {
  name: string;
  description: string;
  imageurl: string;
};

type CardProp = {
  item: Item;
};

export default function Card({ item }: CardProp) {
  return (
    <div className="border-2 bg-background rounded-xl overflow-hidden flex flex-col shadow-md">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={item.imageurl}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-grow">
        <h2 className="text-lg font-semibold text-primary-dark text-center">
          {item.name}
        </h2>
        <p className="text-sm text-primary text-center">{item.description}</p>
        <button className="mt-auto bg-primary-dark text-white font-semibold py-2 px-4 rounded-xl border-2 hover:bg-primary-dark/90 transition">
          Order
        </button>
      </div>
    </div>
  );
}
