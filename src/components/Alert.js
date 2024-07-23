import React from 'react'

const Alert = (props) => {
    return (


        <div style={{ height : "25px" }}>
          {  props.alert && <div className="alert alert-warning alert-dismissible fade show container" role="alert">
                {props.alert.type} : {props.alert.msg}

            </div>}
        </div>

    )
}

export default Alert 