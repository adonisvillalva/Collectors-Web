import React from 'react'

const ViewImg = ({children, openView, closeView}) => {
    return (
        <div className = {openView} onClick = {closeView}>
            <button onClick = {closeView}>X</button>
            {children}
        </div>
    )
}

export default ViewImg
