import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Modal from './Modal';
import { useAuth } from '../context/AuthContext';


export default function Header() {
    const [openModal, setOpenModal] = useState(false);
    const { currentUser } = useAuth();

    return (
        <>
            {openModal && <Modal setOpenModal={setOpenModal} />}
            <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white'>
                <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>
                {currentUser && <FontAwesomeIcon onClick={() => setOpenModal(true)} className=" text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl" icon={faUser} />}
            </div>
        </>
    )
}