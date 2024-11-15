
import React from 'react'
import card1 from '../Images/card1.png'
import card2m from '../Images/card2m.png'
import card3 from '../Images/card3.png'
import locker from '../Images/locker.png'
import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
import image from '../Images/image.png'
import { IoStar } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const Trending = () => {

let obj = [
  {
    img : card1,
    about : "Lorem ipsum has been the",
    about2 : "industry 's standard dummy",
    title : "(14 courses)",
    bottom : "bottom-[178px]",
    bg : "bg-yellow-300"
  } , 
  {
    img : card2m,
    about : "Lorem ipsum has been the",
    about2 : "industry 's standard dummy",
    title : "(14 courses)",
    bottom : "bottom-[190px]",
    bg : "bg-[#32CD32]"  
  } ,
   {
    img : card3,
    about : "Lorem ipsum has been the",
    about2 : "industry 's standard dummy",
    title : "(14 courses)",
    bottom : "bottom-[190px]" ,
    bg : "bg-blue-400"
   }
]


let obj2 = [
  {
   img  :  image1,
    head : "Lorem ipsum has been the",
    p1 : "Explore any interest ot trending topic,",
    p2 : "take prerequisites, and advance your",
    p3 : "Skills",
    main : "Learn anything"
    
  } , 
  {
    img  : image2,
    head : "Lorem ipsum has been the",
    p1 : "Explore any interest ot trending topic,",
    p2 : "take prerequisites, and advance your",
    p3 : "Skills",
    main : "Flexible learning"
  } ,
   {
    img  : locker,
    head : "Lorem ipsum has been the",
    p1 : "Explore any interest ot trending topic,",
    p2 : "take prerequisites, and advance your",
    p3 : "Skills",
     main : "Save money"
   },
   {
    img  : image,
    head : "Lorem ipsum has been the",
    p1 : "Explore any interest ot trending topic,",
    p2 : "take prerequisites, and advance your",
    p3 : "Skills",
    main : "Unlimited certificates"
   },
]




let obj3 = [
  {
   
    head : "Personal Plan",
    head2 : "For you",
    icon :  <IoMdPerson/>,
    p1 : "individual",
    p2 : "Starting at $850 per month",
    p3 : "Billed monthly or annually. Cancel anytime",
  } , 
  {
    head : "Personal Plan",
    head2 : "For you",
    icon :  < IoPeopleSharp/>,
    p1 : "individual",
    p2 : "Starting at $850 per month",
    p3 : "Billed monthly or annually. Cancel anytime",
  } ,
   {
    head : "Personal Plan",
    head2 : "For you",
    icon :  <IoIosPeople/>,
    p1 : "individual",
    p2 : "Starting at $850 per month",
    p3 : "Billed monthly or annually. Cancel anytime",
   },
]





  return (
    <>
     <h1 className='text-center p-5 text-4xl font-bold'>Trending Topics</h1>
      <div className="trending flex  mt-32 justify-evenly items-center flex-wrap gap-32 rounded-lg">

        {obj.map((item) => (
        <div className="cards text-center relative z-40 ">
         
             <img src={item.img} alt="image" className={`absolute ${item.bottom} h-80`} />
             
          <div className="card h-96 w-80 bg-red-500">

            <div className={`imgT mb-0 pb-0 h-48 ${item.bg}`}></div>

            <div className="contentT bg-white p-3 h-48">
              <div className="about mt-3">
                <p>{item.about}</p>
                <p>{item.about2}</p>
              </div>

              <div className="title mt-3">{item.title}</div>

              <div className="rating flex justify-center gap-2 text-3xl mt-5 text-yellow-400 ">
                <div className="star1"><IoStar/></div>
                <div className="star2"><IoStar/></div>
                <div className="star3"><IoStar/></div>
                <div className="star4"><IoStar/></div>
                <div className="star5"><IoStar/></div>
              </div>
            </div>
          </div>

        </div>
        ))}
          {/* <div className="green h-56 w-full bg-green-800 rounded-lg absolute max-[1300px]:hidden z-0 top-[920px]"></div> */}
      </div>


      {/* third page */}

      <div className="third ">
        <h1 className='text-center text-3xl font-bold mt-10'>Invest in your career with Learnify</h1>
        <div className="text-center mt-4">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, minima. Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>


        <div className="cards flex justify-evenly items-center mt-10 flex-wrap">
        {obj2.map((content) => ( 
        <div className="card h-auto w-80 flex flex-col justify-center items-center text-center p-4">
          <div className="img">
            <img src={content.img} className='h-60' alt="" />
          </div>
          <div className="head text-xl font-bold text-yellow-900">{content.main}</div>
          <div className="content">
            <p className='mt-2'>{content.p1}</p>
            <p className='mt-2'>{content.p2}</p>
            <p className='mt-2'>{content.p3}</p>
          </div>
        </div>
       
        ))}
         </div>
      </div>



      {/* fourth page */}
      <div className="fourth mt-36 ">
        <div className="text text-center">
        <h1 className='text-3xl font-bold'>Achieve your goals faster with personalized plans and programs</h1>
        <h2 className='text-2xl mt-4'>___start a free trial or connect with our team to learn more</h2>
        </div>
        
        <div className="cards mt-20 flex justify-evenly flex-wrap items-center gap-16">
        {obj3.map((card) => (
          <div className="card h-auto w-96 rounded-2xl border-4 border-yellow-300">

            <div className="upper h-52 bg-yellow-300 rounded-t-2xl">
              <div className="yellow h-10 bg-yellow-400 rounded-t-2xl"></div>
              <div className="head px-10 pt-6 text-2xl font-bold">{card.head}</div>
              <div className="head2 px-10">{card.head2}</div>
              <div className="people flex px-10 pt-5 text-xl font-bolder">
                <div className="icon mt-1 mr-1 text-2xl">{card.icon}</div>
                <div className="p1">{card.p1}</div>
              </div>
            </div>


            <div className="lower flex justify-center items-center flex-col p-4 text-center mt-4">
              <div className="month text-xl font-bold mt-2">{card.p2}</div>
              <div className="p mt-2">{card.p3}</div>

              <div className="btn flex justify-center items-center mt-5">
                <button className='w-80 h-10 bg-gray-800 text-white text-xl font-bold py-2 pb-1'>Start Subscription</button>
              </div>

              <div className="content mt-6 pb-14">
                <div className="first flex mt-2">
                <div className="icont mt-1 text-[#32CD32]"><FaCheckCircle/></div>
                <div className="text">Lorem ipsum dolor sit amet consectetur. </div>
                </div>
                <div className="first flex mt-2">
                <div className="icont mt-1 text-[#32CD32]"><FaCheckCircle/></div>
                <div className="text">Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div className="first flex mt-2">
                <div className="icont mt-1 text-[#32CD32]"><FaCheckCircle/></div>
                <div className="text">Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div className="first flex mt-2">
                <div className="icont mt-1 text-[#32CD32]"><FaCheckCircle/></div>
                <div className="text">Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div className="first flex mt-2">
                <div className="icont mt-1 text-[#32CD32]"><FaCheckCircle/></div>
                <div className="text">Lorem ipsum dolor sit amet consectetur.</div>
                </div>
                <div className="first flex mt-2">
                <div className="icont mt-1 text-[#32CD32]"><FaCheckCircle/></div>
                <div className="text">Lorem ipsum dolor sit amet consectetur.</div>
                </div>
              </div>
            </div>
          </div>


       
          ))}
           </div>
      </div>

    </>
  )
}

export default Trending;
