export default function ShareTitle({ handing, subHading }) {
  return (
    <div className="text-center my-8 md:my-16">
      <h4 className="text-xl text-yellow-500">{subHading}</h4>
      <h2 className="text-3xl font-light uppercase py-2 my-4 md:w-3/12 mx-auto border-t-2 border-b-2">
        {handing}
      </h2>
    </div>
  );
}
