
import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        let upper = text.toUpperCase();
        setText(upper); 
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Entre the text');
    // setText();
    return (
        <>
      <h1>{props.heading}</h1>
     <div className='mb-3'>
     <textarea className="form-control" value= {text} onChange={handleOnChange} rows="8" id="comment" name="text"></textarea>
     </div>
     <button type="button" className="btn btn-primary " onClick={handleUpClick}>Change to UpperCase</button>
    </>
  )
}

    