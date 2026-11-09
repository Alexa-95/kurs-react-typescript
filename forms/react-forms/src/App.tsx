
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import z from 'zod'

const schema = z.object({
    name: z.string().min(3, {message: 'The name must be at least 3 characters long.'}),
    age: z.number({ error: 'The age field is required.' }).min(18, {message: 'Minimum age must be 18 years old.'})
})

type FormData = z.infer<typeof schema>

// interface FormData {
//     name: string,
//     age: number
// }

const App = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    const onFormSubmit = (data: FieldValues) => console.log(data)

    const nameValue = watch('name')
    const ageValue = watch('age')

    const isNameValid = () => {
        try {
            schema.shape.name.parse(nameValue)
            return true
        } catch(error) {
            return false;
        }
    }
    const isAgeValid = () => {
        try {
            schema.shape.age.parse(ageValue)
            return true
        } catch (error) {
            return false
        }
    }
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                        {...register('name')}
                        id="name"
                        type="text"
                        placeholder="Enter name"
                        className="border border-gray-200 px-4 py-2 rounded-xl"
                    />
                    {errors.name && (
                        <p className="text-red-500">{errors.name.message}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="age">Age</label>
                    <input
                        {...register('age', { valueAsNumber: true })}
                        id="age"
                        type="number"
                        placeholder="Enter age"
                        className="border border-gray-200 px-4 py-2 rounded-xl"
                        disabled={!isNameValid()}
                    />
                    {errors.age && (
                        <p className="text-red-500">{errors.age.message}</p>
                    )}
                </div>
                <button disabled={!isNameValid() || !isAgeValid()} className="p-4 px-5 mt-4  bg-gray-800 text-white rounded-xl cursor-pointer disabled:opacity-50">
                    Save
                </button>
            </form>
        </div>
    )
}

export default App
