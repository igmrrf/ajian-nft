"use client";
import { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
import { Country, State, City } from "country-state-city";
import { ICountry, IState, ICity } from "country-state-city";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createCryptoSchema } from "../form-validators/validationSchema";
import Button from "../button";
type CryptoFormT = z.infer<typeof createCryptoSchema>;

const CryptoForm = () => {
  const countries = Country.getAllCountries();
  const [states, setState] = useState<Array<IState>>(State.getStatesOfCountry("AO"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CryptoFormT>({
    resolver: zodResolver(createCryptoSchema),
  });

  return (
    <div className="w-full flex flex-col justify-center items-start space-y-5">
      {/* Enter a name */}
      <div className="w-full space-y-5">
        <h4 className="text-coral font-black"> Details</h4>
        <div className="w-full text-card-text font-bold space-y-3">
          <div className="w-full">
            <label>Enter a name* </label>
            <div className="w-full border-nav border-2 flex items-center pr-2 ">
              <input
                type="text"
                placeholder="Title"
                {...register("name", { required: "Title is required" })}
                className="p-2 w-full outline-none focus:border-none border-none ring-0 focus:ring-0"
              />
              <BsQuestionCircle size={25} />
            </div>
          </div>
          <div className="w-full flex flex-col md:gap-5 md:flex-row">
            {/* enter country */}
            <div className="w-full md:w-1/2  text-card-text font-bold">
              <label>Enter country* </label>
              <div className="w-full border-nav border-2 flex items-center ">
                <select
                  className="p-2 w-full outline-none text-coral"
                  {...register("country", { required: "select your country" })}
                  onChange={(e) => {
                    countries.find((item) => {
                      if (item.name === e.target.value) {
                        return setState(State.getStatesOfCountry(item.isoCode))
                      }
                    });
                  }}
                >
                  <option>Country</option>
                  {countries?.map((country) => (
                    <option key={country.isoCode}>{country.name}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* enter State*/}
            <div className="w-full md:w-1/2  text-card-text font-bold">
              <label>Enter state* </label>
              <div className="w-full border-nav border-2 flex items-center ">
                <select
                  className="p-2 w-full outline-none text-coral"
                  {...register("state", { required: "select your state" })}
                >
                  <option>State</option>
                  {states?.map((state) => (
                    <option key={state.name}>{state.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="w-full text-card-text font-bold space-y-3">
            <div className="w-full flex flex-col md:flex-row gap-5">
              <div className="w-1/2">
                <label>Enter email* </label>
                <div className="w-full border-nav border-2 flex items-center pr-2 ">
                  <input
                    type="text"
                    placeholder="expiration number"
                    {...register("email", { required: "Title is required" })}
                    className="p-2 w-full outline-none focus:border-none border-none ring-0 focus:ring-0"
                  />
                  <BsQuestionCircle size={25} />
                </div>
              </div>
              <div className="w-1/2">
                <label>Enter phone* </label>
                <div className="w-full border-nav border-2 flex items-center pr-2 ">
                  <input
                    type="text"
                    placeholder="cvv"
                    {...register("phone", { required: "Title is required" })}
                    className="p-2 w-full outline-none focus:border-none border-none ring-0 focus:ring-0"
                  />
                  <BsQuestionCircle size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button className="bg-nav-button font-bold" name="PAY $25" />
    </div>
  );
};

export default CryptoForm;
