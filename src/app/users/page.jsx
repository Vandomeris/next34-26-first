import { prisma } from "@/lib/prisma"

export default async function UsersPage() {
    const data = await prisma.user.findMany({
        where: {
            id: 3
        },
        include: {
            posts: true
        }
    })
    console.log(data)
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Список статьей пользователя с ID 3</h1>

            {
                data.map(user => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ))
            }

        </div>
    )
}
