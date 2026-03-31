export default function Products() {
  return (
    <div className="barang flex items-center flex-col bg-[#dfe6e9] p-10" id="product">
      <h2 className="font-extrabold text-4xl text-center pb-8">Our Products</h2>
      <div className="grid place-items-center grid-cols-2 md:grid-cols-3 gap-5">
        <div className="products text-center">
          <img className="rounded-2xl" src="img/product/mos.jpg" alt="Mosturizer"></img>
          <div>
          <h3 className="name font-semibold text-xl pt-2">Mosturizer</h3>
          <h4 className="price2 text-sm pt-1">
            from 25$ <span>35$</span>
          </h4>
          <button className="bg-white mt-2 py-1.5 px-6 rounded-full border-black">buy now</button>
          </div>
        </div>
        <div className="products text-center">
          <img className="rounded-2xl" src="img/product/serum.jpg" alt=""></img>
          <h3 className="name font-semibold text-xl pt-2">Serum</h3>
          <h4 className="price2">55$</h4>
          <button className="bg-white mt-2 py-1.5 px-6 rounded-full border-black">buy now</button>
        </div>
        <div className="products text-center">
          <img className="rounded-2xl" src="img/product/bodywash.jpg" alt=""></img>
          <h3 className="name font-semibold text-xl pt-2">Bodywash</h3>
          <h4 className="price2">
            from 15$ <span>20$</span>
          </h4>
          <button className="bg-white mt-2 py-1.5 px-6 rounded-full border-black">buy now</button>
        </div>
        <div className="products text-center">
          <img className="rounded-2xl" src="img/product/sunscreen.jpg" alt=""></img>
          <h3 className="name font-semibold text-xl pt-2">Sunscreen</h3>
          <h4 className="price2">30$</h4>
          <button className="bg-white mt-2 py-1.5 px-6 rounded-full border-black">buy now</button>
        </div>
      </div>
    </div>
  );
}
