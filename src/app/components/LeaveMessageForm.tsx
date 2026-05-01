"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

function LeaveMessageForm() {
  const form = useRef(null);
  const schema = z.object({
    name: z
      .string("Invalid Name")
      .min(2, { message: "Name must be more than 2 character" }),
    message: z
      .string("Invalid Message")
      .min(2, { message: "Message must be more than 2 character" }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  function submitData(data: {name: string, message: string}) {
    console.log(data);
    redirect(`https://api.whatsapp.com/send/?phone=201001520321&text=${data.message}`);
  }
  return (
    <form
      ref={form}
      method="POST"
      className="sm:w-125 mx-auto text-left"
      onSubmit={handleSubmit(submitData)}
      data-aos="fade-up" data-aos-anchor-placement="top-center"
    >
      <div className="name-input flex flex-col mb-5">
        <label className="mb-1" htmlFor="name">
          Guest Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          className="border border-[#ded5c8] rounded-[5px] py-3 px-4 duration-[0.4s] hover:border-[#835D2F] focus:border-[#835D2F]"
          {...register("name")}
        />
        {errors.name && <span className="text-[12px] mt-1 italic text-red-500">{errors.name.message}</span>}
      </div>
      <div className="name-input flex flex-col mb-5">
        <label className="mb-1" htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          placeholder="Ex: The Best Couple In The World"
          className="border border-[#ded5c8] rounded-[5px] py-3 px-4 duration-[0.4s] hover:border-[#835D2F] focus:border-[#835D2F] resize-y min-h-50"
          {...register("message")}
        />
        {errors.message && <span className="text-[12px] mt-1 italic text-red-500">{errors.message.message}</span>}
      </div>
      <button
        type="submit"
        className="py-3 px-7 block w-fit mx-auto rounded-[5px] text-white bg-[#835D2F] cursor-pointer border-transparent border duration-[0.4s] hover:bg-transparent hover:text-[#835D2F] hover:border-[#835D2F]"
      >
        Send Message
      </button>
    </form>
  );
}

export default LeaveMessageForm;
