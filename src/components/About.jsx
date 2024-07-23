import React from 'react'

const About = (props) => {


    // const [myStyle, setMyStyle] = React.useState({
    //     color: "black",
    //     backgroundColor: "white",
    // })

    const myStyle = {
        color : props.mode === "dark" ? "white" : "#042743",
        backgroundColor : props.mode === "dark" ? "rgb(36 74 104)" : "white",
        border: "2px solid",
        borderColor : props.mode === "dark" ? "white" : "#042743"
    }

    

    // const [btnText, setBtnText] = React.useState("Enable Darkmode")

    // const [btnColor, setBtnColor] = React.useState("btn btn-dark")


    // const handleMode = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white",
              
    //         })
    //         setBtnText("Enable Lightmode")
    //         setBtnColor("btn btn-light")
    //     }
    //     else {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
            
               
    //         })
    //         setBtnText("Enable Darkmode")
    //         setBtnColor("btn btn-dark")
    //     }
    // }


    return (
        <div className='container mt-4' style={{  color : props.mode === "dark" ? "white" : "#042743" }}>
            <h2 className='py-3'>{props.heading}</h2>
            <div className="accordion my-4" id="accordionExample"  >

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            {props.accordianHeading}
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item " style={myStyle} >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                         Browser compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>



            {/* <div>
                <button type='button' className={`btn my-3 ${btnColor}`}  onClick={handleMode}>{btnText}</button>
            </div> */}
        </div>
    )
}

export default About