import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';




import {reset} from './timers.js'
function PopUp() {
  const [idleModal, setIdleModal] = useState(false);
  const navigate=useNavigate();
  localStorage.getItem("email")
  let Timeout = 1000 * 60 * 9.50; 
  setTimeout(() => setIdleModal(true), Timeout); //show session warning modal.
    
  
  return (

    <>
   {idleModal? <div>
    <div
    className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
  >
    <div className="relative w-auto max-w-sm mx-auto my-6">
      {/*content*/}
      <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
       
        <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
          <h3 className="text-xl font-semibold">your session is will expire in 30 second</h3>
        </div>
        <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
          <button
            className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
            type="button"
            onClick={()=>{setIdleModal(false);
              localStorage.removeItem("email");
              navigate('/signin');
            }}
          >Logout</button>
          <button
            className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
            type="button"
            onClick={()=>{
             reset();
             setIdleModal(false);
            }}
           >Continue</button>
        </div>
      </div>
    </div>
  </div>
  <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </div>:null}
</>  
  )
}

export default PopUp;