import { useForm, type FieldValues } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
    title: z.string({ error: 'The Journal title is required.' }).min(5, {
        message: "The journal title must be at least 5 characters."
    }),
    emotion: z.string({ error: 'Please specify emotion' }).min(3, {
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
        // 1. Crate unique ID for the journa; entry.
        const uuid = crypto.randomUUID();
        data.id = uuid;

        // 2. Add the current timestamp for the journal entry.
        const now = new Date();
        data.createdAt = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // 3. Retrieve the journa; entries from storage.
        const hasJournals = localStorage.getItem('journals')
        const journalEntries = hasJournals ? JSON.parse(hasJournals) : [];

        // 4. Save the journal entry to storage.
        journalEntries.push(data)
        const newEntry = JSON.stringify(journalEntries)
        localStorage.setItem('journals', newEntry)
        openDialog();
        reset();
    }

    const openDialog = () => { 
        // document.getElementById('success_modal').showModal()

        const modal = document.getElementById('success_modal');

        if (modal instanceof HTMLDialogElement) {
            modal.showModal();
        }
    }

    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="success_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Succesful!</h3>
                    <p className="py-4">
                        Journal entry was successfully saved!
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
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
                    id="emotion"
                    defaultValue="Pick a color"
                    className="select select-bordered w-full"
                    {...register('emotion')}
                >
                    <option>Happy</option>
                    <option>Neutral</option>
                    <option>Sad</option>
                </select>
                {errors.emotion && (
                    <span className="-mt-3 font-medium text-red-500">
                        {errors.emotion.message}
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