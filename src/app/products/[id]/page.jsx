
export default async function SingleProductPage({ params }) {
    const { id } = await params


    const resp = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const data = await resp.json()

    return (
        <div>
            <p>{data.title}</p>
            <p>{data.price}</p>
        </div>
    )
}
