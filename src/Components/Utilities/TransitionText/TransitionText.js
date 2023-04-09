import React from 'react'
import "./styles/transitionText.css"

export default function TransitionText(props) {
    const imageOne = props.imageOne
    const imageTwo = props.imageTwo
    const textTransition = props.textTransition

  return (
<div className="transition-text-container">
    <div className="transition-text-box">
        <div className="transition-inner-box">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="transition-text">
                    <img src={imageOne} />
                    <img src={imageTwo} />
                    <p>{textTransition}</p>
                </div>
            ))}
        </div>
    </div>
    <div className="transition-text-box-copy">
        <div className="transition-inner-box">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="transition-text">
                    <img src={imageOne} />
                    <img src={imageTwo} />
                    <p>{textTransition}</p>
                </div>
            ))}
        </div>
    </div>
</div>

  )
}
