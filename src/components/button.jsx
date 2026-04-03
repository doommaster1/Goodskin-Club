export default function Button({children, variant = "primary"}) {
  const base =
    "mt-3 py-1.5 px-6 rounded-full font-semibold border-black hover:shadow-lg hover:bg-black hover:text-white transition-all duration-300";

  const styles = {
    primary: "bg-[#b2bec3]",
    light: "bg-white",
    large: "bg-[#e5e5e5] py-2 px-8 mt-8 text-xl border border-black",
  };

  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
