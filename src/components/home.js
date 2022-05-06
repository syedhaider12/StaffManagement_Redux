import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import Member from "./addMember";
import PopUp from "./popup";
import Users from "./showMembers";
import { useSelector } from "react-redux"
function Home() {
  const [addModal, setaddModal] = useState(false);
  const totalUser = useSelector(state=>state.user.length);

  function handleClose() {
    setaddModal(false);
  }
  return (
    <>
      <div>
         <h2 className="p-2 text-lg font-bold text-center"> Total Member {totalUser}</h2>
        <Users />

        <PopUp></PopUp>
        {addModal ? <Member handleClose={handleClose} /> : null}
        <PlusIcon
          className="absolute w-10 h-10 text-white bg-blue-600 rounded-full right-5 bottom-5"
          onClick={() => {
            setaddModal(true);
          }}
        ></PlusIcon>
      </div>
    </>
  );
}

export default Home;
