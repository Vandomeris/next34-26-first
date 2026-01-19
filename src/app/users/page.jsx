import UsersTable from "@/components/UsersTable"
import { prisma } from "@/lib/prisma"

export default async function UsersPage() {
    const data = await prisma.user.findMany({
        include: {
            posts: true
        }
    })
    return (
        <div>
            <h1 className="text-center text-4xl font-bold">Список пользователей</h1>

            <UsersTable Users={data} />
        </div>
    )
}
// https://github.com/Vandomeris/next34-26-first