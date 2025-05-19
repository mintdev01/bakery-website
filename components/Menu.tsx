import Card from "../components/Card";

const item1 = {
  name: "brioch bread",
  description: "Flaky.",
  imageurl: "/bread1.jpg",
};

const item2 = {
  name: "sourdough bread",
  description: "jsut good",
  imageurl: "/bread2.jpg",
};

const item3 = {
  name: "normal bread",
  description: "Flaky.",
  imageurl: "/bread3.jpg",
};

export default function Menu() {
  return (
    <section id="products" className="w-full px-4 py-8 bg-primary">
      <div className="w-full text-center mb-6">
        <h1 className="text-2xl font-bold text-black bg-primary-dark w-[90%] border-2 inline-block pb-1">
          Menu
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card item={item1} />
        <Card item={item2} />
        <Card item={item3} />
      </div>
    </section>
  );
}
