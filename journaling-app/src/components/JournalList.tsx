import { useState } from "react"
import { ImHappy2, ImSad2 } from "react-icons/im"
import { ImNeutral2 } from "react-icons/im"
import { ImSad } from "react-icons/im"

interface Journal {
  id: string
  title: string
  emotion: string
  body: string
  createdAt: string
}

export const JournalList = () => {
  const [journals, setJournals] = useState<Journal[]>(() => {
    const hasJournals = localStorage.getItem('journals')
    return hasJournals ? JSON.parse(hasJournals) : []
  })

  const initJournalState: Journal = {
    id: '',
    title: '',
    emotion: '',
    body: '',
    createdAt: ''
  }
  const [journal, setJournal] = useState<Journal>(initJournalState)

  const onViewJournal = (selected: Journal) => {
    setJournal(selected)
  }

  const closeJournal = () => {
    setJournal(initJournalState)
  }

  const deleteJournal = (id: string) => {
    const updatedJournals = journals.filter(journal => journal.id !== id)
    setJournals(updatedJournals)
    localStorage.setItem('journals', JSON.stringify(updatedJournals))
    setJournal(initJournalState)
  }

  return (
      <>
          <div className="grid grid-cols-2 gap-4">
              {journal.id === '' &&
                  journals.map(journal => (
                      <div
                          onClick={() => onViewJournal(journal)}
                          key={journal.id}
                          className="rounded-lg bg-white p-4 hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
                      >
                          <h3 className="mb-3 text-xl font-bold font-playfair">
                              {journal.title}
                          </h3>
                          <h4>Created at: {journal.createdAt}</h4>
                      </div>
                  ))}
          </div>

          {journals.length === 0 && (
            <div className="w-full rounded-xl bg-white p-3 text-center font-medium">
              There are no published journals yet.
            </div>
          )}

          {journal.id !== '' && (
              <div className="relative flex max-h-[640px] flex-col overflow-y-auto bg-white rounded-xl p-8">
                  {journal.emotion == 'Sad' ? (
                      <ImSad2
                          size={128}
                          className="absolute -right-8 -top-3 z-0 text-gray-200"
                      />
                  ) : journal.emotion == 'Happy' ? (
                      <ImHappy2
                          size={128}
                          className="absolute -right-8 -top-3 z-0 text-gray-200"
                      />
                  ) : (
                      <ImNeutral2
                          size={128}
                          className="absolute -right-8 -top-3 z-0 text-gray-200"
                      />
                  )}
                  <h2 className="mb-2 font-playfair text-4xl font-bold z-10">
                      {journal.title}
                  </h2>
                  <h3 className="mb-4 text-gray-500">
                      Created at: {journal.createdAt}
                  </h3>
                  <p className="text-lg z-10">{journal.body}</p>
                  <div className="flex justify-between gap-2">
                      <button
                          className="btn mt-2 flex-1"
                          onClick={() => deleteJournal(journal.id)}
                      >
                          Delete
                      </button>
                      <button
                          className="btn btn-secondary mt-2 flex flex-1"
                          onClick={closeJournal}
                      >
                          Close
                      </button>
                  </div>
              </div>
          )}
      </>
  )
}
