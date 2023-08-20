import React,{useState} from "react";
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        // console.log("OnChange");
        setText(event.target.value);
    }


    const [Text,setText] = useState("Enter the text here");
    // Text = "New text" //wrong way to change the state
    // setText("new Text");  //right way to change the state
    // console.log(Text);


return<div>
    <h3 className="my-2">{props.heading}</h3>
    <div className="mb-3">
        <textarea name="form-control" id="myBox" cols="100" rows="15" value={Text} onChange={handleOnChange}></textarea>
    </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert to UPPERCASE</button>
</div>;

}
