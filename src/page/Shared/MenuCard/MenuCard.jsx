export default function MenuCard({ menu }) {
  const { name, recipe, image, price } = menu;
  return (
    <div className="grid grid-cols-12 gap-2">
      <figure className="col-span-3 ">
        <img
          className="rounded-bl-full rounded-br-full rounded-tr-full  "
          src={image}
          alt=""
        />
      </figure>
      <div className="col-span-7">
        <h2 className="text-xl uppercase">{name} ---------</h2>
        <p className="text-base">{recipe}</p>
      </div>
      <h4 className="col-span-2 text-yellow-500 text-xl">${price}</h4>
    </div>
  );
}
