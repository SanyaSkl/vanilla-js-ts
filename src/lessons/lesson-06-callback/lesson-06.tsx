import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {


    const nameDelete = (event: MouseEvent<HTMLButtonElement>) => {
       alert (event.currentTarget.name)
        //alert("user have been delete")
    }

    const onNameChanged = () => {
        alert("name changed")
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        alert ("age changed: " + event.currentTarget.value)
    }

    const focusLostHandler = () => {
        alert("focus lost")
    }

    return (
        <div>
        <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Sanya</textarea>
            <input onChange={onAgeChanged} type={"number"}/>

            <button name="delete" onClick={nameDelete}>x</button>
        </div>
    );

}