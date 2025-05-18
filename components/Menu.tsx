import Card from "../components/Card";

const exampleItem = {
  name: "Chocolate Croissant",
  description: "testing",
  imageurl: "/bread1.jpg",
};
export default function Menu() {
  return (
    <>
      <div
        className=" h-[80vh] flex justify-center items-center flex-col px-2 py-2"
        id="products"
      >
        <div className="h-[12%] border-2 w-full mb-2 flex justify-center items-center bg-primary-dark">
          <h1 className="text-xl font-semibold ">Menu</h1>
        </div>
        <div className="h-[88%] w-full border-2 flex justify-around items-center bg-primary overflow-clip">
          <Card item={exampleItem} />
          <Card item={exampleItem} />
          <Card item={exampleItem} />
          <Card item={exampleItem} />
        </div>
      </div>
    </>
  );
}
