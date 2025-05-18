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
    <>
      <div className="h-[90%] w-[32%] max-w-[20%] border-2 bg-background flex flex-col rounded-xl">
        <div className=" h-[45%] flex justify-center items-center">
          <div className="h-[90%] w-[90%] rounded-2xl  overflow-hidden">
            <img
              src={item.imageurl}
              alt="image"
              className="w-full h-full object-cover  translate-y-1.5 rounded-2xl"
            />
          </div>
        </div>
        <div className="h-[15%] flex-col flex justify-center items-center text-center">
          <h1 className="text-primary-dark font-semibold text-sm">
            {item.name}
          </h1>
        </div>
        <div className="h-[15%] flex justify-center items-center text-center">
          <h1 className="text-primary font-bold">{item.description}</h1>
        </div>
        <div className=" h-[25%] px-3 py-4 ">
          <button className="bg-primary-dark font-semibold h-full w-full border-2 rounded-2xl">
            order
          </button>
        </div>
      </div>
    </>
  );
}
