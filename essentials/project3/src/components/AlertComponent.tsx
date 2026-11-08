interface Props {
    showAlert: boolean
    title: string
    copy: string
}
const AlertComponent = ({ showAlert, title, copy }: Props) => {
    return (
        <>
            {showAlert && (
                <div className="flex flex-col bg-white p-8 gap-4 rounded-xl shadow-xl">
                    {/* Pass the title here. */}
                    <span className="font-medium text-xl">{title}</span>

                    {/* Pass the children here. */}
                    <div className="flex">{copy}</div>
                </div>
            )}
        </>
    )
}

export default AlertComponent
