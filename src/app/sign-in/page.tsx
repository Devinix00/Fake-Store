import React from "react";
import SignInForm from "./_components/SignInForm";

function SignIn() {
  return (
    <div className="w-[100%] min-h-[100vh] bg-black flex flex-col justify-center items-center">
      <h1 className="text-white mb-4 text-2xl font-medium">Sign In</h1>
      <SignInForm />
      <p className="w-80 text-gray-400 mt-5 text-center">
        Please enter any values in the sign in inputs. Even if you enter an
        arbitrary value, you will be able to log in successfully!
      </p>
    </div>
  );
}

export default SignIn;
