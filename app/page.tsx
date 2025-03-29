import Image from "next/image";
import Searchbar from "@/components/Searchbar";
import CarouselHome from "@/components/CarouselHome";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-[1400px]:flex-col gap-16">
          <div className="flex flex-col justify-center animate-fade-in-left">
            <p className="flex items-center gap-2 text-lg font-medium text-primary group">
              Shop Smarter, <span className="text-blue-600"> Save Bigger!</span>
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
                className="group-hover:translate-x-2 transition-all duration-300"
              />
            </p>
            <h1 className="typewriter">
              Find the <span className="text-blue-600"> Best Deals,</span> Every
              Time!
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Track price trends, analyze product insights, and find the best
              deals to make informed purchases. 🚀
            </p>
            <div className="animate-fade-in">
              <Searchbar />
            </div>
          </div>
          <div className="animate-fade-in">
            <CarouselHome />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-10 px-6 md:px-20 py-2">
        <h2 className="text-gray-900 text-[32px] font-semibold animate-fade-in">
          Trending Now
        </h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16"></div>
      </section>
    </>
  );
};

export default Home;
