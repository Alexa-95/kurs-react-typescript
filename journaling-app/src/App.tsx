import React, { useState } from 'react'
import Tabs from './components/Tabs'
import { AddJournalForm } from './components/AddJournalForm'
import { JournalList } from './components/JournalList'


const App = () => {
    const [currentTab, setCurrentTab] = useState('add')

    const handleTab = (selectedTab: string) => {
        setCurrentTab(selectedTab)
    }
  return (
      <>
          <div className="=flex flex-col w-160 py-4 mx-auto">
              <div className="flex flex-col gap-2 rounded-xl bg-white p-4">
                  {/* Header */}
                  <header>
                      <h1 className="mb-4 pb-3 text-2xl font-bold border-b border-gray-300">
                          Journal App
                      </h1>
                  </header>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut sagittis pellentesque metus, cursus ultricies nulla
                      commodo vel.
                  </p>

                  {/* Tabs */}
                  <Tabs onSelectTab={handleTab} />

                  {/* Form */}
                  <div className="flex flex-col gap-3 rounded-xl bg-gray-200 p-4">
                      {currentTab === 'add' ? (
                          <AddJournalForm />
                      ) : (
                          <JournalList />
                      )}
                  </div>
              </div>
          </div>
      </>
  )
}

export default App