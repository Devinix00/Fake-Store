"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

function SignInForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("password", "password"));
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-80">
      <section className="flex flex-col gap-4">
        <input
          {...(register("username"),
          { required: true, placeholder: "username", type: "text" })}
          className="p-2 rounded-md"
        />
        <input
          {...(register("password"),
          { required: true, placeholder: "password", type: "password" })}
          className="p-2 rounded-md"
        />
      </section>

      <button
        type="submit"
        className="w-[100%] bg-blue text-white py-4 rounded-lg mt-4"
      >
        Sign In
      </button>
    </form>
  );
}

export default SignInForm;
