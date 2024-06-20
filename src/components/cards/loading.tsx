import { cn } from "@/utils/tailwind-class";


const LazyCard = () => {
  return (
    <div
      className={cn(
        "animate-pulse flex items-center flex-col ",
      )}
    >
      <div className="relative w-[250px] h-[250px] bg-card-text">
      </div>
      <div className="flex flex-row w-[250px] py-2 px-3 justify-between items-center border-r-2 bg-white border-l-2 border-b-2 border-default-border ">
        {/* <div className="space-y-2 w-full flex-row flex"> */}
          <div className="w-full flex flex-col space-y-3">
          <div className="h-4 bg-card-text rounded w-22"></div>
          <div className="h-4 bg-card-text rounded w-12"></div>
          </div>
          <div className="w-full flex flex-col space-y-3 justify-end items-end">
          <div className="h-4 bg-card-text rounded w-14"></div>
          <div className="h-4 bg-card-text rounded w-10"></div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default LazyCard;
