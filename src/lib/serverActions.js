'use server'

import { revalidatePath } from "next/cache"
import { prisma } from "./prisma"
import { redirect } from "next/navigation"
import { writeFile } from "node:fs/promises"
import { join } from "node:path"

export async function createCar(formData) {


    const files = formData.getAll('image')

    const imgNames = []

    for (const img of files) {
        const buffer = Buffer.from(await img.arrayBuffer())

        const imgName = Date.now() + img.name.replaceAll(" ", "_")
        console.log(imgName)
        imgNames.push({ url: imgName })
        await writeFile(
            join('public', imgName),
            buffer
        )
    }

    console.log({ 'картинки': imgNames })

    const car = await prisma.cars.create({
        data: {
            price: Number(formData.get('price')),
            madeIn: formData.get('madeIn'),
            marka: formData.get('marka'),
            model: formData.get('model'),
            year: Number(formData.get('year')),
            hp: Number(formData.get('hp')),
            images: {
                createMany: {
                    data: imgNames
                }
            }
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