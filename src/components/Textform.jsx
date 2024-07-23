import React, { useRef } from 'react'

const Textform = (props) => {

    const [text, setText] = React.useState("")
    const [count, setCount] = React.useState(0)
    const [charCount, setCharCount] = React.useState(0)
    const interval1ref = useRef(null);
    const interval2ref = useRef(null);
    const [isrunning, setIsrunning] = React.useState(false);


    const handleUppercase = () => {

        console.log("Uppercase button clicked");
        let newText = text.toUpperCase();
        setText(newText);


        props.showAlert("Text Converted to Uppercase", "success");

    }

    const handleOnChange = (e) => {
        setText(e.target.value)
        setCount(0);

    }

    const handleCount = () => {
        let words = text.split(" ");
        let count = words.length;
        setCount(count);

        let charCount = text.replace(/\s/g, '').length;
        setCharCount(charCount);
    }

    const handleLowercase = () => {
        let toLowerText = text.toLowerCase();
        setText(toLowerText);


        props.showAlert("Text Converted to Lowercase", "success");
    }

    const handleCapitalize = () => {
        let newText = text.split(" ");

        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);

        }
        setText(newText.join(" "));


        props.showAlert("Text Converted to Another Form", "success");

    }

    const handleClear = () => {
        setText("");

        props.showAlert("Text Cleared", "success");
        document.title = "TextUtils - Pressed Clear Button";

    }

    const handleDontClick = () => {
        props.showAlert("dont click this button", "danger");

        // if(isrunning){
        //     clearInterval(interval1ref.current);
        //     clearInterval(interval2ref.current);
        //     setIsrunning(false);

        //     document.title = "TextUtils - Home";
        // }
        // else{
        //    interval1ref.current =  setInterval(() => {
        //         document.title = "Dont Click This Button";
        //     }, 2000);

        //    interval2ref.current =  setInterval(() => {
        //         document.title = "Virus is Downloading";
        //     }, 1500);

        //     setIsrunning(true);
        // }


    }

    const handlecopy = () => {
        // console.log("copy button clicked");
        // let text = document.getElementById("mybox")
        // text.select();

        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Text Copied", "success");

    }

    return (
        <div>
            <div className='container'>

                <div className="mb-3 mt-5 ">
                    <h3><label for="mybox" className={`form-label  text-${props.mode === "dark" ? "light" : "dark"}`}>{props.heading}</label></h3>
                    <textarea className="form-control border border-secondary" id="mybox" rows="7" onChange={handleOnChange} value={text}
                        style={{ backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "black" }}
                    ></textarea>
                    <button disabled={text.length === 0} type="button" className="btn btn-dark mt-3 my-1" onClick={handleUppercase}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} type="button" className="btn btn-danger mt-3 mx-2 my-1" onClick={handleCount} >Count the Words</button>
                    <button disabled={text.length === 0} type="button" class="btn btn-primary mt-3 me-2 my-1" onClick={handleLowercase}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} type='button' className='btn btn-warning mt-3 me-2 my-1' onClick={handleCapitalize}>Convert to Another Form</button>
                    <button disabled={text.length === 0} type='button' className='btn btn-danger mt-3 me-2 my-1' onClick={handleClear}>Clear the Area</button>

                    <button disabled={text.length === 0} type='button' className='btn btn-outline-primary mt-3 me-2 my-1' onClick={handlecopy}>Copy Text</button>


                    <button disabled={text.length === 0} type='button' className='btn btn-success mt-3 my-1' onClick={handleDontClick}>Dont Click</button>

                    <div className={`mt-3 text-${props.mode === "dark" ? "light" : "dark"}`}>
                        {/* <p>Total no of words are : {count}</p>
                        <p>Total no of characters are : {charCount}</p> */}

                        <p>Total no of words are : {(text.split(/s+/).filter((e) => { return e.length !== 0 }).length)}</p>
                        <p>Total no of characters are : {text.length}</p>
                        <p>Time required to read this : {0.008 * text.split(/s+/).filter((e) => { return e.length !== 0 }).length + " min"}</p>
                        <h3>Preview of the texts:</h3>
                        {/* <span className=''>{text.length > 0 ? text : "Enter something to Preview here"}</span> */}


                        {/* <span className='' style={{ 
                            color : props.mode === "dark" ? "gray"
                                  : text.length<=0 ? "gray" : "black"
                         }}>{text.length > 0 ? text : "Nothing to preview here"}</span> */}

                        <span style={{
                            color: text.length <= 0 ? "gray" : ""
                        }
                        }>{text.length > 0 ? text : "Nothing to preview here"}
                        </span>



                    </div>

                </div>
            </div>


            {/* <div className="container">
              <h1>Texts Summary</h1>

              <p>Total Words : {text.split(" ").length} and Total Charactes : {text.length}</p>
            </div> */}
        </div>
    )
}

export default Textform