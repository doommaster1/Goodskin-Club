export default function Gallery() {
  return (
    <section className="px-10 py-16 w-full h-full" id="gallery">
      {/* Title */}
      <div className="mb-10">
        <h4 className="text-3xl font-extrabold text-center">
          Innovative Beauty
        </h4>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Image Besar */}
        <img
          className="col-span-2 row-span-2 w-full h-full object-cover rounded-xl"
          src="img/p/freckles4.jpg"
          alt="white"
        />

        <img
          className="w-full h-full object-cover rounded-xl"
          src="img/p/Davidson-TulsiGabbard.png"
          alt="tulsi"
        />

        <img
          className="w-full h-full object-cover rounded-xl"
          src="img/p/male.jpg"
          alt="person4"
        />

        <img
          className="w-full h-full object-cover rounded-xl"
          src="img/p/alisha3.jpg"
          alt="alisha3"
        />

        <img
          className="w-full h-full object-cover rounded-xl"
          src="img/p/acne3.jpeg"
          alt="acne3"
        />
      </div>
    </section>
  );
}