import { useState } from 'react'

interface Props {
  heading: string
  items: string[]
  onSelectItem: (item: string) => void
}

const ListComponent = ({heading, items, onSelectItem}: Props) => {

    const [selectetItem, setSelectetItem] = useState(0)

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-6">{heading}</h2>
            <ul className="w-1/2 border border-gray-200 rounded-lg divice-y divide-gray-300 overflow-hidden">
                {items.map((item, index) => {
                    return (
                        <li
                            className={
                                selectetItem === index
                                    ? 'py-2 px-3 bg-gray-800 text-white'
                                    : 'py-2 px-3'
                            }
                            key={index}
                            onClick={() => {setSelectetItem(index); onSelectItem(item);}}
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>
            <hr />
            {items.length === 0 && <p>No languages found</p>}
            <p>
                {items.length > 0
                    ? `Total: ${items.length}`
                    : 'Total: 0'}
            </p>
        </div>
    )
}
export default ListComponent
