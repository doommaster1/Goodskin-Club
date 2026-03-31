export default function Header() {
  return (
    <header className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-3 p-4 max-h-150">

      {/* HERO */}
      <div className="relative md:col-span-2 md:row-span-2 group overflow-hidden rounded-xl">
        <img
          src="img/8x6.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
          <h2 className="text-white text-4xl font-bold mb-2">
            Beautyfly
          </h2>
          <p className="text-white text-lg">
            Confident is key
          </p>
        </div>
      </div>

      {/* FEATURE 1 */}
      <div className="relative group overflow-hidden rounded-xl">
        <img
          src="img/feature1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
          <h4 className="text-white text-xl font-semibold">
            Natural
          </h4>
          <p className="text-white text-sm">
            No Chemicals
          </p>
        </div>
      </div>

      {/* FEATURE 2 */}
      <div className="relative group overflow-hidden rounded-xl">
        <img
          src="img/feature2.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
          <h4 className="text-white text-xl font-semibold">
            Cruelty Free
          </h4>
          <p className="text-white text-sm">
            no animals were harm
          </p>
        </div>
      </div>

    </header>
  );
}