import { prisma } from "@/lib/prisma"
import CreateCarForm from "./CreateCarForm"
import { createCar } from "@/lib/serverActions"
import DeleteButton from "./DeleteButton"

export default async function CarsAdminPage() {

    const cars = await prisma.cars.findMany()

    return (
        <div className="container mx-auto">
            <div>
                <CreateCarForm />
            </div>
            <div className="grid grid-cols-5 gap-5">
                {
                    cars.map(car => (
                        <div
                            className="p-5 rounded-lg bg-gray-600 text-white flex flex-col gap-y-3"
                            key={car.id}>
                            <p>{car.marka} {car.model} - {car.year}</p>
                            <div className="flex justify-between">
                                <p>{car.hp} лс</p>
                                <p>${car.price}</p>
                            </div>
                            <p>{car.madeIn}</p>
                            <DeleteButton id={car.id} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
