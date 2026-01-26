'use client'

import { createCar } from "@/lib/serverActions"

export default function CreateCarForm() {



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
                <button>Создать</button>
            </form>
        </div>
    )
}
