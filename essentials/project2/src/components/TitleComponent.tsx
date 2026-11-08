interface Props {
    textColor?: string // Sign ? makes prop optional
    // textColor?: 'text-font-blue' | 'text-color-red' | 'text-color-gray'
}

const TitleComponent = ({ textColor = "text-green-500" }: Props) => {
    return <h1 className={`font-bold text-4xl ${textColor}`}>React + TypeScript</h1>
}

export default TitleComponent
