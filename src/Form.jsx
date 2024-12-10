import { useState } from "react";

export default function Form(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstName(e){
        setFirstName(e.target.value);
        console.log(firstName);
    }
    function handleLastName(e){
        setLastName(e.target.value);
        console.log(lastName);
    }
    return (
        <div>
            <label>First Name:
                <input value={firstName} onInput={handleFirstName} />
            </label>
            <label>Last Name:
                <input value={lastName} onInput={handleLastName} />
            </label>
        </div>
    )

}