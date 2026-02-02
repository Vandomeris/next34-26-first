import Credentials from "next-auth/providers/credentials"
import { prisma } from "./prisma"
import { compare } from "bcryptjs"

export const options = {

    session: {
        strategy: 'jwt'
    },
    providers: [

        Credentials({
            credentials: {
                email: '',
                password: ''
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })


                const correctPassword = await compare(credentials.password, user.password)

                if (correctPassword) {
                    return {
                        id: user.id,
                        email: user.email
                    }
                } else {
                    return null
                }


            }
        }),


    ]

}