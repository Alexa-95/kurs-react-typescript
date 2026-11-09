import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z.string().min(8, {
        message: 'The password must be at least eight characters long.'
    })
})

type FormData = z.infer<typeof schema>

const App = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    const onFormSubmit = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <>
            <div className="flex h-screen justify-center items-center w-full bg-gray-200">
                <form
                    className="w-1/3 rounded-lg bg-white p-6 flex flex-col gap-4"
                    onSubmit={handleSubmit(onFormSubmit)}
                >
                    <h1 className="text-3xl font-bold mb-3">Login</h1>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            className="bg-gray-200 px-4 py-2 rounded-lg"
                            {...register('email')}
                        />
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="bg-gray-200 px-4 py-2 rounded-lg"
                            {...register('password')}
                        />
                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button className="bg-gray-900 text-white px-6 py-4 text-xl font-medium w-full rounded-lg hover:bg-gray-700 disabled:hover:bg-gray-900 disabled:opacity-60">
                        Sign In
                    </button>
                </form>
            </div>
        </>
    )
}

export default App
