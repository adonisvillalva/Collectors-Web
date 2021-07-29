import React from 'react'

const Title_page = ({attribute}) => {
    return (
        <div className = 'container-fluid'>
            <div className = 'row'>
                <div className = 'col-sm-4'>
                    <hr className = 'hr-title'/>
                </div>
                <div className = 'col-sm-4'>
                    <h2>{attribute}</h2>
                </div>
                <div className = 'col-sm-4'>
                    <hr className = 'hr-title'/>
                </div>
            </div>
        </div>
    )
}

export default Title_page
