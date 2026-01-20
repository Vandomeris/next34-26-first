'use client'

import { useState } from "react"
import AddUserModal from "./AddUserModal"
import EditUserModal from "./EditUserModal"

export default function UsersTable({ Users }) {
    const [users, setUsers] = useState(Users)

    async function deleteUser(id) {
        const resp = await fetch('/api/users', {
            method: 'DELETE',
            body: JSON.stringify({
                id: id
            })
        })
        const res = await resp.json()

        if (res.id) {
            setUsers(
                users.filter(user => user.id !== res.id)
            )

        }

    }

    const [addModalShow, setAddModalShow] = useState(false)
    const [showEdit, setshowEdit] = useState(false)
    const [editData, setEditData] = useState({})

    function showAddModal() {
        setAddModalShow(true)
    }

    function editUser(user) {
        setEditData(user)
        setshowEdit(true)
    }

    return (
        <div>
            <div className="flex justify-end mb-5">
                <button onClick={() => showAddModal()} className="px-4 py-2 bg-green-500 text-white">Создать пользователя</button>
            </div>
            <table className="w-full">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>E-mail</th>
                        <th>Возраст</th>
                        <th>Количество постов</th>
                        <th>Действия</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.posts.length}</td>
                                <td className="flex gap-x-2">
                                    <button onClick={() => editUser(user)} className="px-2 py-1 text-white pointer bg-amber-400">Edit</button>
                                    <button onClick={() => deleteUser(user.id)} className="px-2 py-1 text-white pointer bg-red-400">Delete X</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
            <AddUserModal show={addModalShow} setShow={setAddModalShow} setUsers={setUsers} />
            <EditUserModal setShowEdit={setshowEdit} showEdit={showEdit} editData={editData} setUsers={setUsers} />
        </div>


    )
}
