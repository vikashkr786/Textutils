import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {//arrow function
        // console.log("uppercase button was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case","success");
    }
    const handleLoClick = () => {//arrow function
        // console.log("uppercase button was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lower case","success");
    }
    const handleClearClick = () => {//arrow function
        // console.log("uppercase button was clicked")
        let newText = "";
        setText(newText)
    }
    const handleSpeakClick = () => {//arrow function
        // console.log("uppercase button was clicked")
        let msg = new SpeechSynthesisUtterance(text);
        //msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleOnChange = (event) => {
        //console.log("Onchange")
        setText(event.target.value)
    }
    const [text,setText] = useState('');
    // text = "new Text";//wrong way to change state
    //setText = "new Text";//correct way
  return (
    <div>
    <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} style={{backgroundColor : props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button type="submit" className="btn btn-primary mx-2" onClick={handleSpeakClick}>Speak Text</button>

        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length } words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>PREVIEW</h2>
            <p>{text}</p>
        </div>
    </div>
    </div>
  )
}
