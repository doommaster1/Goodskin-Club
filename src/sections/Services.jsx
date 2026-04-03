import Button from "../components/button";

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
            Discover the nearest GoodSkinClub official stores and authorized
            retailers. Visit us in-person to experience our full product range
            and get professional consultations from our beauty experts near you.
          </p>
          <Button>learn more</Button>
        </div>
        <div className="flex items-center flex-col text-center bg-white p-3 rounded-xl">
          <div className="icon">
            <i className="bi bi-bag-heart text-3xl"></i>
          </div>
          <h3 className="font-bold py-2">Best Seller</h3>
          <p>
            Explore our most-loved skincare essentials, curated by our community
            and proven by results. From hydrating serums to protective
            sunscreens, find the holy grail products that everyone is talking
            about.
          </p>
          <Button>learn more</Button>
        </div>
        <div className="flex items-center flex-col text-center bg-white p-3 rounded-xl">
          <div className="icon">
            <i className="bi bi-truck text-3xl"></i>
          </div>
          <h3 className="font-bold py-2">Shipment</h3>
          <p>
            We provide fast, reliable, and secure nationwide shipping to ensure
            your skincare routine is never interrupted. Every order is handled
            with care and packed in eco-friendly materials to protect your glow.
          </p>
          <Button>learn more</Button>
        </div>
        <div className="flex items-center flex-col text-center bg-white p-3 rounded-xl">
          <div className="icon">
            <i className="bi bi-hand-thumbs-up text-3xl"></i>
          </div>
          <h3 className="font-bold py-2">Recomendation</h3>
          <p>
            Take the guesswork out of your routine with our personalized skin
            analysis. Receive expert-backed product suggestions tailored
            specifically to your unique skin type, concerns, and long-term
            beauty goals.
          </p>
          <Button>learn more</Button>
        </div>
      </div>
    </section>
  );
}
