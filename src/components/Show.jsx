


import React from 'react';
import { GrNext } from "react-icons/gr";
import { MdAccessTimeFilled } from "react-icons/md";
import News from '../images/News.jpeg';
import { IoStar } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Show = () => {
  let Navigate = useNavigate()
  let obj1 = [
    "Popular Courses", "Data Science", "Machine Learning",
    "Python Programming", "Digital Marketing",
    "Web Development", "Graphic Designing", "Deep Learning"
  ];

  function handleClick(){
    Navigate("/showCourses")
  }

  let obj = [
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            {
              img :News,
              name : "Chat gpt for begginer",
              star : "4.45",
              rate : ".1.5 Learners",
              rate2 : "Begineer",
              text : "7.5 hour",
              btn : "Enroll now"
            } , 
            
          ]

  return (
    <>

    <h1 className='text-4xl font-bold text-center -z-10 mt-16 mb-10'>Explore all new and trending courses</h1>
    <div className="main mt-10 flex flex-wrap sm:flex-nowrap gap-6">

      {/* Left Section */}
      <div className="left text-white bg-pink-400  sm:w-[470px] w-full p-4 rounded-lg">
        <div className="header flex items-center justify-between p-4 text-2xl font-bold bg-violet rounded-t-lg">
          <p>Course Categories</p>
          <GrNext className="text-xl" />
        </div>
        {obj1.map((item, index) => (
          <div key={index} className="course flex items-center justify-between p-4 text-lg font-semibold bg-bg-pink-400 hover:bg-gradient-to-br from-violet-500 to-pink-600 mt-2 rounded-lg ">
            <p>{item}</p>
            <GrNext className="text-xl" />
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="right flex flex-wrap gap-6 sm:w-2/3 w-full -z-10">
        {obj.map((item, index) => (
          <div key={index} className="card w-full sm:w-72 flex-grow bg-white  rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
            <img src={item.img} className="h-48 w-full mb-1 object-cover" alt={item.name} />
            <div className="content bg-gradient-to-br from-violet-500 to-pink-600 p-4 text-white">
              <h3 className="name text-2xl font-bold text-center">{item.name}</h3>
              <div className="stats flex justify-between mt-3 text-lg">
                <div className="flex items-center gap-2">
                  <IoStar className="text-yellow-400 text-lg" />
                  <span>{item.star}</span>
                </div>
                <div>{item.rate}</div>
                <div>{item.rate2}</div>
              </div>
              <div className="info flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <MdAccessTimeFilled className="text-xl" />
                  <span>{item.text}</span>
                </div>
                <button className="flex items-center gap-2 text-black font-bold text-lg hover:text-blue-800">
                  {item.btn} <GrNext />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="div flex justify-center my-16">
  <button onClick={handleClick} className="border-2 border-red-700 p-4 px-10 rounded-xl font-bold text-black text-xl bg-white shadow-md hover:shadow-lg hover:bg-gradient-to-br from-violet-500 to-pink-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
    Show All Courses
  </button>
</div>




    </>
  );
};

export default Show;
