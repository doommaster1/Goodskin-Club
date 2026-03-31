export default function Services() {
  return (
    <section className="services mx-auto flex items-center justify-center flex-col width-full bg-[#b2bec3] w-full pb-[100px] px-3 py-10 min-h-[550px]">
      <h2 className="font-extrabold text-4xl text-center pb-8">Our Services</h2>
      <div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 place-items-center md:gap-5 width-full">
        <div className="flex items-center flex-col text-center bg-white p-3 rounded-xl">
          <div className="icon">
            <i className="bi bi-shop-window text-3xl"></i>
          </div>
          <h3 className="font-bold py-2">Where to buy</h3>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            quam ipsa, deserunt esse aut possimus, recusandae nulla vitae
            provident ut placeat dolorum. Repellendus aperiam, accusamus
            suscipit aliquid tenetur exercitationem dignissimos?
          </p>
          <button className="bg-[#b2bec3] mt-3 py-[6px] px-6 rounded-full border-black">
            learn more
          </button>
        </div>
        <div className="flex items-center flex-col text-center bg-white p-3 rounded-xl">
          <div className="icon">
            <i className="bi bi-bag-heart text-3xl"></i>
          </div>
          <h3 className="font-bold py-2">Best Seller</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            quam ipsa, deserunt esse aut possimus, recusandae nulla vitae
            provident ut placeat dolorum. Repellendus aperiam, accusamus
            suscipit aliquid tenetur exercitationem dignissimos?
          </p>
          <button className="bg-[#b2bec3] mt-3 py-[6px] px-6 rounded-full border-black">
            learn more
          </button>
        </div>
        <div className="flex items-center flex-col text-center bg-white p-3 rounded-xl">
          <div className="icon">
            <i className="bi bi-truck text-3xl"></i>
          </div>
          <h3 className="font-bold py-2">Shipment</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            quam ipsa, deserunt esse aut possimus, recusandae nulla vitae
            provident ut placeat dolorum. Repellendus aperiam, accusamus
            suscipit aliquid tenetur exercitationem dignissimos?
          </p>
          <button className="bg-[#b2bec3] mt-3 py-[6px] px-6 rounded-full border-black">
            learn more
          </button>
        </div>
        <div className="flex items-center flex-col text-center bg-white p-3 rounded-xl">
          <div className="icon">
            <i className="bi bi-hand-thumbs-up text-3xl"></i>
          </div>
          <h3 className="font-bold py-2">Recomendation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            quam ipsa, deserunt esse aut possimus, recusandae nulla vitae
            provident ut placeat dolorum. Repellendus aperiam, accusamus
            suscipit aliquid tenetur exercitationem dignissimos?
          </p>
          <button className="bg-[#b2bec3] mt-3 py-[6px] px-6 rounded-full border-black">
            learn more
          </button>
        </div>
      </div>
    </section>
  );
}
