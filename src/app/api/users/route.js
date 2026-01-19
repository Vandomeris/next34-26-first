import { prisma } from "@/lib/prisma"

export async function DELETE(request) {
    const body = await request.json()

    const deletedUser = await prisma.user.delete({
        where: {
            id: Number(body.id)
        }
    })

    return Response.json({
        id: deletedUser.id
    })

}