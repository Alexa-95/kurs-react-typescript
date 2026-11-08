import btnStyles from'./PrimaryButton.module.css'
import globalBtnStyles from './../../css/global.module.css';

function PrimaryButton() {
    return (
        <>
            <button className={[btnStyles.primaryButton, globalBtnStyles.button].join(' ')}>
                React + Typescript
            </button>
        </>
    )
}

export default PrimaryButton
