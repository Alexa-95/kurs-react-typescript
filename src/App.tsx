import ListComponent from './component/ListComponent'
import Message from './component/Message'
import './index.css'

function App() {
    const dudes = ['Kenneth', 'Woody', 'Julis', 'Goorfrego']
    const items = ['JavaScript', 'PHP', 'Python', 'Swift']
    const frameworks = ['Django', 'Ruby', 'Laravel']

    const handleOnSelectItem = (item: string) => {
        console.log(item)
    }
        
    return (
        <>
            <Message />
            <h2>Handsome Dudes</h2>
            <ul>
                {dudes.map((dude, index) => {
                    return <li key={index}>{dude}</li>
                })}
            </ul>
            <ListComponent
                items={items}
                heading="Programing Languages"
                onSelectItem={handleOnSelectItem}
            />
            <ListComponent
                items={frameworks}
                heading="Frameworks"
                onSelectItem={handleOnSelectItem}
            />
        </>
    )
}

export default App
