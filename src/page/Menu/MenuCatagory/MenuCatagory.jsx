import MenuCard from "../../Shared/MenuCard/MenuCard";

export default function MenuCatagory({ items }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 my-6 md:my-12">
        {items.slice(0, 6).map((menu) => (
          <MenuCard key={menu._id} menu={menu} />
        ))}
      </div>
      <div className="flex justify-center items-center mb-16">
        <button className="uppercase transition-all active:scale-95 px-4 py-2 border-b-2 dark:border-b-yellow-600 rounded-full">
          Order your favourit food
        </button>
      </div>
    </>
  );
}
