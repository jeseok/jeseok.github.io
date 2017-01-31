import React, {PropTypes} from 'react'

LangButton.propTypes = {
  currentLang : PropTypes.string.isRequired,
  handleLangButton: PropTypes.func.isRequired
}
export default function LangButton({currentLang, handleLangButton, style}){
  const btnStyle = style ? style : ""
  return(
    <div className={btnStyle} onClick={()=> handleLangButton()}>
      <p> {currentLang} </p>
    </div>
  )
}
