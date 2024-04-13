"use client";

import signIn from "@/app/_api/signInApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SignInLoading from "./SignInLoading";
import useIsSignedInStore from "@/app/_stores/useIsSignedInStore";

type Inputs = {
  username: string;
  password: string;
};

function SignInForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<Inputs>();
  const { setIsSignedIn } = useIsSignedInStore();
  const signInMutation = useMutation({
    mutationFn: ({ username, password }: Inputs) => signIn(username, password),
    onSuccess: () => {
      router.push("/");
      setIsSignedIn(true);
    },
  });

  const isPending = signInMutation.isPending;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    signInMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-80">
      <section className="flex flex-col gap-4">
        <input
          {...(register("username"),
          {
            required: true,
            placeholder: "username",
            type: "text",
            autoFocus: true,
          })}
          className="p-2 rounded-md outline-none"
        />
        <input
          {...(register("password"),
          { required: true, placeholder: "password", type: "password" })}
          className="p-2 rounded-md outline-none"
        />
      </section>

      <button
        type="submit"
        className="w-[100%] h-12 bg-blueButton text-white rounded-lg mt-4"
      >
        {isPending ? <SignInLoading /> : <p>Sign In</p>}
      </button>
    </form>
  );
}

export default SignInForm;
