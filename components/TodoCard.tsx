import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function TodoCard(props: { children: any; edit: any; handleAddEdit: any; edittedValue: any; setEdittedValue: any; todoKey: any; handleEditTodo: any; handleDelete: any }) {
    const { children, edit, handleAddEdit, edittedValue, setEdittedValue, todoKey, handleEditTodo, handleDelete } = props

    return (
        <div className='p-2 relative sm:p-3 border flex items-stretch border-white border-solid '>

            <div className='flex-1 flex'>
                {!(edit === todoKey) ? <>{children}</> : (
                    <input className='bg-inherit flex-1 text-white outline-none' value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)} />
                )}
                {/* {children} */}
            </div>
            <div className='flex items-center'>
                {(edit === todoKey) ? <FontAwesomeIcon onClick={handleEditTodo} className="px-2 duration-300 hover:scale-125 cursor-pointer" icon={faCheck}></FontAwesomeIcon> : <FontAwesomeIcon onClick={handleAddEdit(todoKey)} className="px-2 duration-300 hover:rotate-45 cursor-pointer" icon={faPencil}></FontAwesomeIcon>}
                <FontAwesomeIcon onClick={handleDelete(todoKey)} className="px-2 duration-300 hover:scale-125 cursor-pointer" icon={faTrashCan}></FontAwesomeIcon>
            </div>
        </div>
    )
}