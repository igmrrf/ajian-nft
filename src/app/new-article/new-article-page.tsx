import NewArticleForm from "@/components/forms/new-article-form";
import { BsInfo } from "react-icons/bs";

const NewArticlePage = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center py-10 px-5 md:px-36 pb-20 space-y-10">
      {/* hero */}
      <div className="border-nav w-full border-2 md:pl-10 px-3 flex py-4 justify-between items-center md:items-start space-y-5 text-card-text">
        <p className="flex text-sm md:text-md">
          {" "}
          <span>
            <BsInfo size={25} />
          </span>
          Note: Articles will be made public after approval{" "}
        </p>
        <h4 className="font-black md:text-5xl text-2xl">NEW ARTICLE</h4>
      </div>
      {/* Form */}
      <NewArticleForm />
    </div>
  );
};

export default NewArticlePage;
