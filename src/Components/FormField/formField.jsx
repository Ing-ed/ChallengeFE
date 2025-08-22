import './formField.css'

export function FormField({text,type, handleEvent, name}){
    return(
        <div id="formField">
            <input type={type} placeholder={text} onChange={handleEvent} name = {name}/>
            <label htmlFor>{text}</label>
        </div>
    )
}