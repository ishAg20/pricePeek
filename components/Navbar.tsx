import Link from "next/link";
import Image from "next/image";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "Search" },
  { src: "/assets/icons/black-heart.svg", alt: "Wishlist" },
  { src: "/assets/icons/user.svg", alt: "User" },
];

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/assets/icons/logo.svg"
            width={30}
            height={30}
            alt="Logo"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <p className="font-spaceGrotesk text-[21px] text-gray-800 font-bold transition-all group-hover:text-blue-600">
            price
            <span className="text-blue-600 group-hover:text-gray-800">
              Peek
            </span>
          </p>
        </Link>

        <div className="flex items-center gap-6">
          {navIcons.map((icon) => (
            <button
              key={icon.alt}
              className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 focus-visible:ring-2 ring-offset-2 ring-blue-400"
              aria-label={icon.alt}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={28}
                height={28}
                className="object-contain transition-transform duration-300 hover:scale-110 active:scale-90"
              />
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
