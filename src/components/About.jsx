export default function About() {
  return (
    <div className="penjelasan grid grid-cols-1 md:grid-cols-2" id="penjelasan">
      <div className="hero2 h-162.5">
        <img
          className="w-full h-full object-cover"
          src="img/good_skin.jpg"
          alt="white"
        />
      </div>
      <div className="explain bg-[#b2bec3] p-8 flex flex-col items-center justify-center">
        <h2 className="font-extrabold text-4xl text-center pb-8">The Experience</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          reiciendis, fugit praesentium necessitatibus exercitationem
          accusantium eius optio soluta aut modi velit facere, alias iusto
          consequuntur? Dolor nemo explicabo eos aut?
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus sunt illum modi blanditiis amet ab accusantium
          temporibus cumque voluptas ratione a, esse assumenda adipisci et.
          Maiores totam accusantium harum similique!
        </p>
        <button className="bg-[#e5e5e5] py-2 px-8 mt-5 rounded-full font-semibold text-xl border border-black hover:bg-black hover:text-white transition-all duration-300">learn more</button>
      </div>
    </div>
  );
}
