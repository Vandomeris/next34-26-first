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
                        email: user.email,
                        role: user.role
                    }
                } else {
                    return null
                }


            }
        }),


    ],
    callbacks: {
        async jwt({token, user}){
            if(user){
                token.role = user.role
                token.id = user.id
            }
            return token
        },
        async session({session, token}){

            session.user = {
                id: token.id,
                email: token.email,
                role: token.role
            }

            return session
        }
    }

}