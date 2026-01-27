import { prisma } from "@/lib/prisma"
import { editCar } from "@/lib/serverActions"

export default async function AdminEditCar({ params }) {
    const { id } = await params

    const car = await prisma.cars.findUnique({
        where: {
            id: Number(id)
        }
    })

    console.log(car)

    const editCarWithId = editCar.bind(null, car.id)

    return (
        <div>
            <form className="flex flex-col gap-y-4 max-w-125 mx-auto" action={editCarWithId}>

                <input defaultValue={car.marka} name="marka" type="text" placeholder='Марка авто' />
                <input defaultValue={car.model} name="model" type="text" placeholder='Модель авто' />
                <input defaultValue={car.year} name="year" type="number" placeholder='Год выпуска' />
                <input defaultValue={car.hp} name="hp" type="number" placeholder='Мощность авто' />
                <select defaultValue={car.madeIn} name="madeIn">
                    <option value="Россия">Россия</option>
                    <option value="Китай">Китай</option>
                    <option value="Европа">Европа</option>
                    <option value="Америка">Америка</option>
                </select>
                <input defaultValue={car.price} name="price" type="number" placeholder='Цена авто' />
                <button>Создать</button>
            </form>
        </div>
    )
}
