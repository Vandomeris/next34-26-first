'use client'

import { useState } from "react"

export default function AddUserModal({ show, setShow }) {
    async function addUser() {
        const resp = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({

            })
        })
    }
    return (
        <>
            {
                show && (
                    <div onClick={() => setShow(false)} className="top-0 left-0 flex justify-center items-center fixed w-full h-full bg-black/30">
                        <form onClick={(e) => e.stopPropagation()} className="relative w-125 p-5 bg-white flex flex-col gap-y-2 pt-10">
                            <button type="button" onClick={() => setShow(false)} className="w-4 h-4 absolute right-5 top-2 text-[14px]">❌</button>
                            <input className="px-2 py-1 border border-amber-500" type="text" placeholder="Имя" />
                            <input className="px-2 py-1 border border-amber-500" type="text" placeholder="E-mail" />
                            <input className="px-2 py-1 border border-amber-500" type="text" placeholder="Возраст" />
                            <input className="px-2 py-1 border border-amber-500" type="text" placeholder="Пароль" />
                            <button>Создать</button>
                        </form>
                    </div>
                )
            }
        </>

    )
}
