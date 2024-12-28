export default function MenuCard({ menu }) {
  console.log(menu);
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

const x = {
  _id: "642c155b2c4774f05c36ee7f",
  name: "Roasted Pork Belly",
  recipe:
    "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
  image:
    "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg",
  category: "popular",
  price: 14.5,
};
