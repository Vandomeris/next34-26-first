import { registerUser } from "@/lib/serverActions";

export default function RegistrationPage() {
    return (
        <div className="min-h-screen w-full grid place-items-center">
            <form className="max-w-125 mx-auto flex flex-col gap-y-5" action={registerUser}>
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Пароль" name="password" />
                <button>Зарегистрироваться</button>
            </form>
        </div>
    )
}
