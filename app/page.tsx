import { FaLocationPinLock } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { MdOutlineDocumentScanner, MdOutlinePayment } from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGift } from "react-icons/ai";
import { RiRefund2Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
export default function Home() {


  return (
    <main className="flex min-h-screen min-w-full  bg-[#171717]">
      <section className=" container grid grid-cols-2 ">
        <div className="text-white  border-r-[1px] border-neutral-700 ">
          <div className="pl-[25rem] overflow-y-auto ">
         
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

        <div className="text-white">
        <div className="flex flex-wrap items-center px-4 py-5 border-b-[1px] border-neutral-700 ">
          
               
        <img  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="w-16 h-16 mr-3 rounded-full " alt="" />

                <div className=" border-[1px] border-neutral-700 w-36 h-9 flex items-center justify-center rounded-lg">
                  <button type="button" className="flex gap-[5px] text-sm">
                    <svg className="flex " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" x2="12" y1="3" y2="15"></line>
                    </svg>
                    Upload photo
                  </button>
                </div>
              </div>
          <div className="pt-10 pl-10 border-b-[1px] border-neutral-700">
            <h1 className="">Name</h1>
          <span className="text-zinc-500">James Collins</span>
    
     </div>

     <div className="pt-10 pl-10 border-b-[1px] border-neutral-700">
            <h1 className="">Email</h1>
          <span className="text-zinc-500"> jamescollins@site.so </span>
    
     </div>

     <div className="pt-10 pl-10 border-b-[1px] border-neutral-700">
            <h1 className="">Phone hrpOm</h1>
          <span className="text-zinc-500"> +(01) 222 333 444 </span>
    
     </div>

     <div className="pt-10 pl-10 border-b-[1px] border-neutral-700">
            <h1 className="">Password</h1>
          <span className="text-zinc-500 ">........</span>
    
     </div>

     <div className="pt-10 pl-10 border-b-[1px] border-neutral-700">
            <h1 className=""> Two-factor authentication </h1>
          <span className="text-zinc-500"> Add a layer of security. Require a code in addition to your password. </span>
    
     </div>
     <div className="pt-10 pl-10 border-b-[1px] border-neutral-700">
            <h1 className=""> Deactivate your account </h1>
          <span className="text-zinc-500 "> This will immediately delete all of your data. This action is not reversible, so please continue with caution. </span>
    
     </div>
    


        </div>
      </section>
    </main>
  );
}
