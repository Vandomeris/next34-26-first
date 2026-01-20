export default function EditUserModal({ showEdit, setShowEdit, editData, setUsers }) {
    async function editUser(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const resp = await fetch('/api/users', {
            method: 'put',
            body: JSON.stringify({
                id: editData.id,
                name: formData.get('name'),
                email: formData.get('email'),
                age: formData.get('age'),
                password: formData.get('password'),
            })
        })
        const result = await resp.json()

        if (result.status !== 'error') {
            setUsers(prev => {
                return prev.map(user => {
                    if (user.id === result.id) {
                        user.email = result.email
                        user.name = result.name
                        user.age = result.age
                    }
                    return user
                })
            })
            setShowEdit(false)
        }
    }
    return (
        <>
            {
                showEdit && (
                    <div onClick={() => setShowEdit(false)} className="top-0 left-0 flex justify-center items-center fixed w-full h-full bg-black/30">
                        <form onSubmit={(e) => editUser(e)} onClick={(e) => e.stopPropagation()} className="relative w-125 p-5 bg-white flex flex-col gap-y-2 pt-10">
                            <button type="button" onClick={() => setShowEdit(false)} className="w-4 h-4 absolute right-5 top-2 text-[14px]">❌</button>
                            <input defaultValue={editData.name} name="name" className="px-2 py-1 border border-amber-500" type="text" placeholder="Имя" />
                            <input defaultValue={editData.email} name="email" className="px-2 py-1 border border-amber-500" type="text" placeholder="E-mail" />
                            <input defaultValue={editData.age} name="age" className="px-2 py-1 border border-amber-500" type="text" placeholder="Возраст" />
                            <input defaultValue={editData.password} name="password" className="px-2 py-1 border border-amber-500" type="text" placeholder="Пароль" />
                            <button>Создать</button>
                        </form>
                    </div>
                )
            }
        </>

    )
}
