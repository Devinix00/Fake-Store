import React from "react";
import SignInForm from "./_components/SignInForm";

function SignIn() {
  return (
    <div className="w-[100%] min-h-[100vh] bg-black flex flex-col justify-center items-center">
      <h1 className="text-white mb-4 text-2xl font-medium">Sign In</h1>
      <SignInForm />
    </div>
  );
}

export default SignIn;
