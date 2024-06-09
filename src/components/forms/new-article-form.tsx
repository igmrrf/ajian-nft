"use client";
import Button from "@/components/button";
import ButtonNoArrow from "@/components/buttons/button-no-arrow";
import { BsQuestionCircle } from "react-icons/bs";
// import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createNewArticleSchema } from "../form-validators/validationSchema";
import { z } from "zod";
type ArticleForm = z.infer<typeof createNewArticleSchema>;
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

const NewArticleForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleForm>({
    resolver: zodResolver(createNewArticleSchema),
  });
  return (
    <div className="w-full flex flex-col-reverse justify-center items-start md:flex-row">
      <form
        onSubmit={handleSubmit((data) => {
          try {
            console.log(data);
          } catch (err) {
            console.log(err, errors);
          }
        })}
        className="w-full mt-10 md:mt-0  space-y-5"
      >
        <div className="w-full flex justify-center items-center border-dashed border-nav border-2 py-10">
          <div className="w-full flex items-center justify-center flex-col">
            <span className="font-thin px-2 py-1 bg-nav rounded"> Add files</span>
            <label htmlFor="file" className="text-card-text">
              Accepts .gif .jpg and .png
            </label>
          </div>
          <input id="file" className="hidden" type="file" {...register("image")} />
        </div>
        {/* input for title  */}

        <div className="w-full text-card-text font-bold">
          <label>Enter a Title* </label>
          <div className="w-full border-nav border-2 flex items-center pr-2 ">
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: "Title is required" })}
              className="p-2 w-full outline-none"
            />
            <BsQuestionCircle size={25} />
          </div>
          {errors?.title && <p className="text-red-500"> {errors.title.message}</p>}
        </div>
        {/* input for subtitle */}
        <div className="w-full text-card-text font-bold">
          <label>Enter a subtitle* </label>
          <div className="w-full border-nav border-2 flex items-center pr-2 ">
            <input
              type="text"
              placeholder="Subtitle"
              {...register("subtitle", { required: "subtitle is required" })}
              className="p-2 w-full outline-none"
            />
            <BsQuestionCircle size={25} />
          </div>
          {errors?.subtitle && <p className="text-red-100"> {errors.subtitle.message}</p>}
        </div>
        {/* input for tags */}
        <div className="w-full text-card-text font-bold">
          <label>Enter a tag* </label>
          <div className="w-full border-nav border-2 flex items-center pr-2 ">
            <input
              type="text"
              placeholder="Press enter to save tag"
              {...register("tag", { required: "tags are required" })}
              className="p-2 w-full outline-none"
            />
            <BsQuestionCircle size={25} />
          </div>
          {errors?.tag && <p className="text-red-100"> {errors.tag.message}</p>}
        </div>

        <div className="w-full">
          <label className="text-card-text">description </label>
          <Controller
            name="article"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="Write your article" className="text-coral" {...field} />
            )}
          />
          {errors?.article && <p className="text-red-100"> {errors.article.message}</p>}
        </div>
        <div className="space-x-5">
          <ButtonNoArrow name="CANCEL " className="bg-[#DEDBEF] font-bold" />
          <Button name="SEND " className="bg-nav-button font-bold" />
        </div>
      </form>
    </div>
  );
};

export default NewArticleForm;
