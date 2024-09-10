import React, { useEffect } from "react";
import { useAptimusFlow } from "aptimus-sdk-test/react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AptosConnectButton, useAptosWallet } from "@razorlabs/wallet-kit";
import "@razorlabs/wallet-kit/style.css";
import './wallet.css'

export const LoginPage = () => {
  // const flow = useAptimusFlow();

  // const startLogin = async () => {
  //   console.log(window.location.origin)
  //   const url = await flow.createAuthorizationURL({
  //     provider: "google",
  //     clientId:
  //     import.meta.env.VITE_CLIENT_ID,
  //     redirectUrl: `${window.location.origin}/callback`,
  //   });
  //   window.location.href = url.toString();
  // };
  const {connected,account}=useAptosWallet()
  const navigate = useNavigate();
  useEffect(()=>{
    if(connected){
      localStorage.setItem('address', account?.address??"");

      navigate("/")
    }
  },[connected])
  return (
    <div className="flex items-center justify-center">
      {/* <div
        className="flex cursor-pointer gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-blue-500 shadow-md hover:bg-blue-700 hover:text-white"
        onClick={startLogin}
      >
        <FcGoogle size={"2.5rem"}></FcGoogle>
        <p className="blinking self-center font-bold ">
          {" "}
          Sign in with Google
        </p>
      </div> */}
            <AptosConnectButton />


    </div>
  );
};
