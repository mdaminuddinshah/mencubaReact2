import {useState} from "react";
import PropTypes from 'prop-types';

function Form(props) {

    // 1) cara access dan hantar value ke app.jsx
    const handleSubmit = (event) => {
        event.preventDefault();

        // sekarang ni nak tahu apa value dalam input 
        const elements = event.target.elements;
        const username = elements.username.value;
        const text = elements.text.value;

        props.nilai({
            username,
            text,
        });

        // console.log({username, text});
        event.target.reset();

    }

    const [nilai, setNilai] = useState('');


  return (
    <form onSubmit={handleSubmit} style={{textAlign: "center", marginTop: "35px", padding: "15px", border: "1px solid black", borderRadius: "1rem"}}>
        <fieldset style={{alignItems: "start",display: "flex", flexDirection: "column", border: "none"}}>
            <label htmlFor="username">Username: </label>
            <input style={{width: "100%"}} id="username" name="username" onChange={(event) => {setNilai((event.target.value))}}/>
            <label htmlFor="text">Text: </label>
            <input style={{width: "100%"}} id="text" name="text"/>
        </fieldset>
        <button type="submit" disabled={!nilai.trim()}>Submit</button>
    </form>
  )
}

Form.propTypes = {
    nilai: PropTypes.func,
}

export default Form;
