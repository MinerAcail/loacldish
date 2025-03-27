import IMG from "../../../assets/all.jpg";

const FeaturedFood = () => {
  return (
    <div className="relative h-[300px] w-[100%] overflow-hidden rounded-xl">
      <img
        src={IMG}
        alt={"Ghanaian cuisine"}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
        <span className="inline-block px-3 py-1 bg-amber-600 text-white text-xs font-medium rounded-full mb-3">
          GHANA LOCAL DISH
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          COURSE CODE: GPD231V
        </h2>
        <p className="text-amber-200 mb-2">
          COURSE TITLE: GLOBALISATION AND THE NEW WORLD ORDER
        </p>
        <p className="text-gray-200 mb-4 max-w-2xl">
          LECTURER: DR. JOVIA SALIFU
        </p>
      </div>
    </div>
  );
};

export default FeaturedFood;
