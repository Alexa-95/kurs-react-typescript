import { useForm, type FieldValues } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    title: z.string({ error: 'The Journal title is required.' }).min(5, {
        message: "The journal title must be at least 5 characters."
    }),
    emotions: z.string({ error: 'Please specify emotion' }).min(3, {
        message: 'The emotions field must have at least 3 characters.'
    }),
    body: z
        .string({ error: 'Please write something for this journal' })
        .min(128, { message: 'Your journa must have at least 128 characters.' })
})

type FormData = z.infer<typeof schema>

export const AddJournalForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const onFormSubmit = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <>
            <form
                className="flex flex-col gap-3"
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <label
                    htmlFor="title"
                    className="input input-bordered flex items-center gap-2 w-full"
                >
                    Journal Title
                    <input
                        id="title"
                        type="text"
                        className="grow"
                        placeholder="Give your journal entry a nice title"
                        {...register('title')}
                    />
                </label>
                {errors.title && (
                    <span className="-mt-3 font-medium text-red-500">
                        {errors.title.message}
                    </span>
                )}
                <label htmlFor="emotions">How are you feeling today?</label>
                <select
                    id="emotions"
                    defaultValue="Pick a color"
                    className="select select-bordered w-full"
                    {...register('emotions')}
                >
                    <option>Happy</option>
                    <option>Neutral</option>
                    <option>Sad</option>
                </select>
                {errors.emotions && (
                    <span className="-mt-3 font-medium text-red-500">
                        {errors.emotions.message}
                    </span>
                )}
                <textarea
                    className="textarea w-full"
                    placeholder="Write something..."
                    rows={10}
                    {...register('body')}
                ></textarea>
                {errors.body && (
                    <span className="-mt-3 font-medium text-red-500">
                        {errors.body.message}
                    </span>
                )}

                <button className="btn btn-primary">Save Journal</button>
            </form>
        </>
    )
}