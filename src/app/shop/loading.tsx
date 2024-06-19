import React from "react";
import LazyCard from "@/components/cards/loading"

const loading = () => {
  return (
    <div className="w-full flex min-h-screen flex-col items-center py-10 md:px-36 px-5 pb-20 space-y-10">
      <div className=" animate-pulse flex flex-col justify-center items-start space-y-10 py-10 px-8 w-full border-nav border-2">
        <div className="h-2 bg-card-text rounded w-2/3"></div>
        <div className="h-4 bg-card-text rounded w-2/3"></div>
      </div>

      <div className="w-full flex justify-center md:justify-between items-center flex-wrap gap-2">
        <LazyCard />
      </div>
    </div>
  );
};

export default loading;
