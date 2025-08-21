import './formField.css'

export function FormField({text,type}){
    return(
        <div id="formField">
            <input type={type} placeholder={text}/>
            <label htmlFor>{text}</label>
        </div>
    )
}