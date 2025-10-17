import React from "react";
import logo from "../assets/logo/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contacts(){
    return(
        <>
        <div className="flex flex-col bg-gray-50 justify-center items-center p-8">
            <h1 className="text-4xl font-outfit font-bold">Contact Us</h1>
            <div className="flex flex-col justify-start items-start m-10 bg-gradient-to-r from-blue-600 to-blue-900 p-10 h-auto rounded-md">             
                    <img src={logo} className="w-8 bg-white p-2 rounded-2xl m-2"></img>
            <div className="flex flex-row justify-center items-center">
               <i className="fas fa-location-dot text-white m-4"></i>
               <h2 className="font-outfit text-white">Knowledge Park 2, Greater Noida (201306)</h2>
             </div>
             <div className="flex flex-row justify-center items-center">
               <i className="fas fa-phone text-white m-4"></i>
               <h2 className="font-outfit text-white">+91-94123-30177</h2>
             </div>
             <div className="flex flex-row justify-center items-center">
               <i className="fas fa-message text-white m-4"></i>
               <h2 className="font-outfit text-white">team.brainlink@gmail.com</h2>
             </div>
             <div className="flex flex-row justify-center items-center">
               <i className="fab fa-instagram text-white m-4"></i>
               <h2 className="font-outfit text-white">brainlink_softwares</h2>
             </div>
             <div className="flex flex-row justify-center items-center">
               <i className="fab fa-linkedin text-white m-4"></i>
               <h2 className="font-outfit text-white">brainlink_softwares</h2>
             </div>
            </div>
        </div>
        </>
    );
}