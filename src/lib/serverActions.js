'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"
import { redirect } from "next/navigation"

export async function createCar(formData) {
    const car = await prisma.cars.create({
        data: {
            price: Number(formData.get('price')),
            madeIn: formData.get('madeIn'),
            marka: formData.get('marka'),
            model: formData.get('model'),
            year: Number(formData.get('year')),
            hp: Number(formData.get('hp')),
        }
    })

    revalidatePath('/admin/cars')
}

export async function deleteCar(id) {

    const car = await prisma.cars.delete({
        where: {
            id: Number(id)
        }
    })

    revalidatePath('/admin/cars')

}

export async function editCar(id, formData) {

    const car = await prisma.cars.update({
        data: {
            price: Number(formData.get('price')),
            madeIn: formData.get('madeIn'),
            marka: formData.get('marka'),
            model: formData.get('model'),
            year: Number(formData.get('year')),
            hp: Number(formData.get('hp')),
        },
        where: {
            id: Number(id)
        }
    })

    redirect('/admin/cars')
}