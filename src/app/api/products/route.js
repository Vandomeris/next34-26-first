export function GET() {


    const DbReq = [
        {
            id: 1,
            title: 'phone'
        },
        {
            id: 2,
            title: 'laptop'
        },
    ]

    return Response.json({ DbReq })


}

export async function POST(request) {
    const body = await request.json()

    // КАкая то логика которая записывает товар в БД

    return Response.json({
        result: 'success',
        message: `Новый товар ${body.title} имеет ID: ${Date.now()}`
    })

}