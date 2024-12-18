

import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";

const Contact = () => {
  let [contactNumber, setcontact] = useState("");
  let [email, setemail] = useState("");
  let [fullName, setname] = useState("");
  let [username, setuser] = useState("");
  let [error , setError] = useState("")
  
  const token = localStorage.getItem("token")


    
  async function handleSubmit(e) {
    e.preventDefault();

    if (!token) {
      alert("Please sign up or log in first.");
      remove()
      return;
    }
  

    if (clear()) {
      let item = {
        fullName,
        username,
        contactNumber,
        email,
      };

      console.log(item);
      axios
        .post("https://lms-j25h.onrender.com/api/contact", item, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          alert("Thanks for contacting us.");
          remove()
        })
        .catch((error) => {
          console.log(error);
         setError(error.message)
        });
    }
  }
 
 
  function clear() {
    
    if(username =="" || contactNumber =="" || email == "" || fullName==""){
      alert("fill all fields")
    }

    if(username){
    if (!username.endsWith("123")) {
      alert("Username must end with '123'.");
      return false;
    }
  }

    if(contactNumber){
    if (contactNumber.length !== 10 || isNaN(contactNumber)) {
      alert("Contact Number must be exactly 10 digits.");
      return false;
    }
  }
   
   if(email){
    if (!email.endsWith("@gmail.com")) {
      alert("Email must end with '@gmail.com'.");
      return false;
    }
  }

    return true;
  }
  function remove(){
    setname("")
    setemail("")
    setcontact("")
    setuser("")
  }

  return (
    <>
    {error ? <p className="text-2xl text-red-600 text-center">{error}</p> : "" }
      <form onSubmit={handleSubmit}>
        <h1 className="text-4xl text-center font-bold  bg-red-950 py-5 text-white mt-1">
          Contact
        </h1>
        <div className="inputs text-xl md:text-2xl lg:text-3xl flex justify-center items-center flex-col">
          <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
            <label
              htmlFor="fullName"
              className="font-bold text-xl mb-4 text-red-950 ml-1"
            >
              Full Name
            </label>
            <div className="fullName flex rounded-lg justify-start items-center relative h-full border-2 border-black">
              <div className="icon absolute left-3 flex items-center text-black">
                <FaUserPlus />
              </div>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setname(e.target.value)}
                id="fullName"
                className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent"
                placeholder="Enter Full Name"
            
              />
            </div>
          </div>

          <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
            <label
              htmlFor="username"
              className="font-bold text-xl mb-4 text-red-950 ml-1"
            >
              Username
            </label>
            <div className="fullName flex rounded-lg justify-start items-center relative h-full border-2 border-black">
              <div className="icon absolute left-3 flex items-center text-black">
                <FaUserPlus />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setuser(e.target.value)}
                id="username"
                className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent"
                placeholder="Enter Username"
                
              />
            </div>
          </div>

          <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
            <label
              htmlFor="con"
              className="font-bold text-xl mb-4 text-red-950 ml-1"
            >
              Contact Number
            </label>
            <div className="name flex rounded-lg justify-start items-center relative h-full border-2 border-black">
              <div className="icon absolute left-3 flex items-center text-black">
                <RiLockPasswordFill />
              </div>
              <input
                type="contact"
                value={contactNumber}
                onChange={(e) => setcontact(e.target.value)}
                id="con"
                className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent"
                placeholder="Enter Contact Number"
              />
            </div>
          </div>

          <div className="first mt-4 w-full md:w-[600px] lg:w-[800px]">
            <label
              htmlFor="email"
              className="font-bold text-xl mb-4 text-red-950 ml-1"
            >
              Email Address
            </label>
            <div className="name flex rounded-lg justify-start items-center relative h-full border-2 border-black">
              <div className="icon absolute left-3 flex items-center text-black">
                <MdAttachEmail />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                id="email"
                className="text-xl text-black w-full pl-12 py-3 rounded-lg h-full bg-transparent"
                placeholder="Enter Email Address"
              />
            </div>
          </div>

          <div className="div text-lg mt-8 text-black text-center">
            <p className="tracking-wide">
              By submitting this form, you consent to our Terms of Use & Privacy
            </p>
            <p>Policy and to be contacted by us via Email/Call/Whatsapp/SMS</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-7">
          <button className="text-red-950 py-4 bg-orange-500 w-full sm:w-96 lg:w-[600px] text-xl text-center md:text-2xl font-bold">
            Schedule a call
          </button>
        </div>
      </form>

    </>
  );
};

export default Contact;
