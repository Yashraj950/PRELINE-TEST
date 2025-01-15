import React from 'react'
import { FaLocationPinLock } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { MdOutlineDocumentScanner, MdOutlinePayment } from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGift } from "react-icons/ai";
import { RiRefund2Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div>
        <div className="text-white bg-[#171717]  ">
          <div className=" overflow-y-auto ">
         
            <h1 className="pt-10 pb-5 font-bold">Account</h1>

            <div className="flex gap-2 pb-2 pt-2 cursor-pointer hover:rounded-lg font-semibold hover:bg-neutral-800">
            <GoPerson className="relative top-1"/>
              <p className=" ">Personal Info</p>
            </div>
            
            <div className="flex gap-2 pb-2 pt-2 cursor-pointer hover:rounded-lg  hover:bg-neutral-800 font-semibold ">
          <RiShoppingBag3Line  className="relative top-1"/>
              <p className=" ">My Order</p>
            </div>
            <div className="flex gap-2  pb-2 pt-2 cursor-pointer hover:rounded-lg  hover:bg-neutral-800 font-semibold">
            <MdOutlineDocumentScanner className="relative top-1"/>
              <p className=" ">Order Details</p>
            </div>
            <div className="flex gap-2  pb-2 pt-2 cursor-pointer hover:rounded-lg   hover:bg-neutral-800 font-semibold">
            <FaLocationPinLock  className="relative top-1"/>
              <p className=" ">Addresses</p>
            </div>
            <div className="flex gap-2 pb-2 pt-2 cursor-pointer hover:rounded-lg   hover:bg-neutral-800   font-semibold">
            <MdOutlinePayment  className="relative top-1"/>
              <p className=" ">Payment</p>
            </div>

            <div className="flex gap-2 pb-2 pt-2 hover:rounded-lg cursor-pointer  hover:bg-neutral-800 border-b-[1px] border-neutral-700   font-semibold">
            <AiOutlineMail  className="relative top-1"/>
              <p className=" ">Email Newsletter</p>
            </div>

            <div className="flex  gap-2 pb-2 pt-2 hover:rounded-lg mt-5 cursor-pointer hover:bg-neutral-800 font-semibold">
            <AiOutlineGift className="relative top-1"/>
              <p className=" ">Gift Cards</p>
            </div>

            <div className="flex gap-2 pb-2 pt-2 hover:rounded-lg  border-b-[1px] border-neutral-700 cursor-pointer hover:bg-neutral-800   font-semibold">
            <RiRefund2Fill  className="relative top-1"/>
              <p className=" ">Return and Refund</p>
            </div>

            <div className="flex gap-2 pb-2 pt-2 hover:rounded-lg  mt-5   hover:bg-neutral-800 cursor-pointer  font-semibold">
            <FiLogOut className="relative top-1"/>
              <p className=" ">Logout</p>
            </div>






           
          </div>
        </div>

    </div>
  )
}

export default Sidebar