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

export async function POST(request) {
    const body = await request.json()
    console.log(body)
    const createdUser = await prisma.user.create({
        data: {
            email: body.email,
            name: body.name,
            password: body.password,
            age: Number(body.age)
        },
        include: {
            posts: true
        }
    })

    console.log(createdUser)

    if (createdUser) {
        return Response.json(createdUser)
    }
    return Response.json({
        status: 'error'
    })
}


export async function PUT(request) {
    const body = await request.json()

    const editedUser = await prisma.user.update({
        data: {
            email: body.email,
            name: body.name,
            password: body.password,
            age: Number(body.age)
        },
        where: {
            id: Number(body.id)
        }
    })

    if (editedUser) {
        return Response.json(editedUser)
    }
    return Response.json({
        status: 'error'
    })
}