import Image from "next/image";
import Searchbar from "@/components/Searchbar";
import CarouselHome from "@/components/CarouselHome";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="apply flex gap-2 text-lg font-medium text-primary">
              Shop Smarter, <span className="text-blue-600"> Save Bigger!</span>
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="mt-4 text-6xl leading-[72px] font-bold tracking-[-1.2px] text-gray-900;">
              Find the <span className="text-blue-600"> Best Deals,</span> Every
              Time!
            </h1>
            <p className="mt-6">
              Track price trends, analyze product insights, and find the best
              deals to make informed purchases. 🚀
            </p>
            <Searchbar />
          </div>
          <CarouselHome />
        </div>
      </section>
      <section
        className="flex flex-col gap-10 px-6 md:px-20 py-24;
"
      >
        <h2 className="text-secondary text-[32px] font-semibold;">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16"></div>
      </section>
    </>
  );
};

export default Home;
