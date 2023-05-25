import '../styles/ButtonCount.css'
export const ButtonCount = ({text, isButtonClick, listenPilotClick}) => {
  return (
    <button
        className={ isButtonClick ? "button-click" : "button-reset" }
        onClick={listenPilotClick}>
    {text}
    </button>
  )
}
