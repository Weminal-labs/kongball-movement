import React from "react";
import { useAptimusFlow } from "aptimus/react";
import { FcGoogle } from "react-icons/fc";
import { AptimusNetwork } from "aptimus";

export const LoginPage = () => {
  const flow = useAptimusFlow();

  const startLogin = async () => {
    console.log(window.location.origin)
    const url = await flow.createAuthorizationURL({
      provider: "google",
      clientId:
        "556302451277-tipnsth9rm9grmkpige3pus8kske73pc.apps.googleusercontent.com",
      redirectUrl: `${window.location.origin}/callback`,
      network: AptimusNetwork.TESTNET, // Thêm thuộc tính network
    });
    window.location.href = url.toString();
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="flex cursor-pointer gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-blue-500 shadow-md hover:bg-blue-700 hover:text-white"
        onClick={startLogin}
      >
        <FcGoogle size={"2.5rem"}></FcGoogle>
        <p className="blinking self-center font-bold ">
          {" "}
          Sign in with Google
        </p>
      </div>
    </div>
  );
};
