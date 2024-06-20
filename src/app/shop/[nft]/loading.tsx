import React from "react";
import LazyCard from "@/components/cards/loading"

const loading = () => {
  return (
    <div className="w-full flex min-h-screen flex-col items-center py-10 md:px-36 px-5 pb-20 space-y-10">
      <div className=" animate-pulse flex flex-col justify-center items-start space-y-10 py-10 px-8 w-full border-nav border-2">
        <div className="flex space-y-2 flex-col animate-pulse w-full">
        <div className="h-2 bg-card-text rounded w-1/3"></div>
        <div className="h-2 bg-card-text rounded w-1/4"></div>
        </div>
        <div className="h-8 bg-card-text rounded w-[200px]"></div>
      </div>
      <div className="w-full flex flex-col md:flex-row md:py-3 mb-2 md:items-center space-y-5 md:space-y-0 justify-between">
              <div className="h-2 w-[100px] bg-card-text rounded"></div>
        <div className="flex space-x-2">
          <div className="w-full">
            <div className="animate-pulse flex space-x-2">
              <div className="h-[30px] w-[100px] bg-card-text rounded"></div>
              <div className="h-[30px] w-[100px] bg-card-text rounded"></div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 ">
        <LazyCard />
        <LazyCard />
        <LazyCard />
        <LazyCard />
      </div>
    </div>
  );
};

export default loading;

