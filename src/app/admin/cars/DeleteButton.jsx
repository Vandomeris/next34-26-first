'use client'

import { deleteCar } from "@/lib/serverActions"

export default function DeleteButton({ id }) {
    return (
        <button onClick={() => deleteCar(id)}>Удалить</button>
    )
}
