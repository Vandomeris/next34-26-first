'use client'

import { useState } from "react"

export default function AddUserModal({ show, setShow, setUsers }) {
    async function addUser(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const resp = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                age: formData.get('age'),
                password: formData.get('password'),
            })
        })
        const result = await resp.json()

        if (result.status !== 'error') {
            setUsers(prev => {
                return [
                    ...prev,
                    result
                ]
            })

            setShow(false)
        }

    }



    return (
        <>
            {
                show && (
                    <div onClick={() => setShow(false)} className="top-0 left-0 flex justify-center items-center fixed w-full h-full bg-black/30">
                        <form onSubmit={(e) => addUser(e)} onClick={(e) => e.stopPropagation()} className="relative w-125 p-5 bg-white flex flex-col gap-y-2 pt-10">
                            <button type="button" onClick={() => setShow(false)} className="w-4 h-4 absolute right-5 top-2 text-[14px]">❌</button>
                            <input name="name" className="px-2 py-1 border border-amber-500" type="text" placeholder="Имя" />
                            <input name="email" className="px-2 py-1 border border-amber-500" type="text" placeholder="E-mail" />
                            <input name="age" className="px-2 py-1 border border-amber-500" type="text" placeholder="Возраст" />
                            <input name="password" className="px-2 py-1 border border-amber-500" type="text" placeholder="Пароль" />
                            <button>Создать</button>
                        </form>
                    </div>
                )
            }
        </>

    )
}
