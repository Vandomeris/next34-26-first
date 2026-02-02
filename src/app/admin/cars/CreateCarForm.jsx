'use client'

import { createCar } from "@/lib/serverActions"
import { useState } from "react"

export default function CreateCarForm() {


    const [images, setImages] = useState(Array(1).fill(undefined))
    console.log(images)
    return (
        <div>
            <form className="flex flex-col gap-y-4 max-w-125 mx-auto" action={createCar}>
                <input name="marka" type="text" placeholder='Марка авто' />
                <input name="model" type="text" placeholder='Модель авто' />
                <input name="year" type="number" placeholder='Год выпуска' />
                <input name="hp" type="number" placeholder='Мощность авто' />
                <select name="madeIn">
                    <option value="Россия">Россия</option>
                    <option value="Китай">Китай</option>
                    <option value="Европа">Европа</option>
                    <option value="Америка">Америка</option>
                </select>
                <input name="price" type="number" placeholder='Цена авто' />
                {
                    images.map((_, index) => (
                        <input key={index} type="file" name="image" />
                    ))
                }
                <button type="button" onClick={() => setImages(Array(images.length + 1).fill(undefined))}>Добавить еще картинку</button>
                <button>Создать</button>
            </form>
        </div>
    )
}
