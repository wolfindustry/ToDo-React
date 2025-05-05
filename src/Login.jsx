import React, { useState } from "react";
import Icons from "./Components/Icons";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Registr from "./Components/Registr";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const Login = () => {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false)
  console.log(form);
  return (
    <div className="w-full h-screen bg-white p-10">
      <div className="w-full h-full flex rounded-2xl overflow-hidden">
        <div className="w-[40%] bg-[#20a38b] flex items-center justify-center flex-col p-14  text-center gap-8 ">
          <h1 className="text-white text-4xl font-medium">Welcome Back!</h1>
          <p className="text-white text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque a,
            quis totam id saepe maxime pariatur.
          </p>
          <button className="border-white px-20 py-3 border rounded-3xl text-white cursor-pointer">
            Sign In
          </button>
        </div>
        <div className="w-[60%] flex items-center justify-center flex-col gap-6">
          <h1 className="text-3xl text-[#20a38b] font-bold ">Create Account</h1>
          <div className="flex gap-3 shrink-0">
            <Icons img={<FaFacebookF />} />
            <Icons img={<IoLogoGoogleplus />} />
            <Icons img={<FaLinkedinIn />} />
          </div>
          <p>Or use your email for regestration</p>
          <form
            className="w-full max-w-96 flex flex-col gap-3 items-center justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              const data = {
                email: e.target.email.value,
                first_name: e.target.fname.value,
                last_name: 'Abdullayev',
                password: e.target.password.value
              };

              setLoading(true)
              
              fetch("https://rent-cars.hojiakbar.me/api/v1/auth/register", {
                method: 'post',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              }).then((res)=>res.json()).then((data)=>{
                console.log(data)
                setLoading(false)
              })


            }}
          >
            <div className="w-full flex flex-col gap-3">
              <Registr img={<IoPersonOutline />} name="fname" />
              <Registr img={<MdOutlineEmail />} name="email" />
              <Registr img={<CiLock />} name="password" />
            </div>
            <button
              type="submit"
              className="w-[50%] py-2.5 text-white rounded-3xl bg-[#20a38b]  "
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
