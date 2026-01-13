'use client'

import { useEffect, useState } from "react"


export default function ProductPage() {

    const [products, setProducts] = useState([])
    const [title, setTitle] = useState('')
    useEffect(() => {

        async function getProducts() {
            const resp = await fetch('/api/products')
            const data = await resp.json()
            console.log(data)
            setProducts(data)
        }

        getProducts()

    }, [])


    async function createProduct(e) {
        e.preventDefault()

        const resp = await fetch('/api/products', {
            method: 'post',
            body: JSON.stringify({
                title: title
            })
        })

        const data = await resp.json()
        console.log(data)

    }

    return (
        <div>
            <form onSubmit={(e) => createProduct(e)}>
                <input value={title} onInput={(e) => setTitle(e.target.value)} type="text" placeholder="Product Title" />
                <button>Создать</button>
            </form>
        </div>
    )
}
