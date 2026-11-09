import { useState } from "react"


const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState('add');

    const handleToggleTab = (selectedTab: string) => {
        setSelectedTab(selectedTab)
    }
    
  return (
      <div role="tablist" className="tabs tabs-box">
          <a
              role="tab"
              className={`tab tabs-sm w-1/2 ${selectedTab === 'add' && 'tab-active font-bold'}`}
              onClick={() => handleToggleTab('add')}
          >
              Add Entry
          </a>
          <a
              role="tab"
              className={`tab tabs-sm w-1/2 ${selectedTab === 'entries' && 'tab-active font-bold'}`}
              onClick={() => handleToggleTab('entries')}
          >
              Journal Entries
          </a>
      </div>
  )
}

export default Tabs