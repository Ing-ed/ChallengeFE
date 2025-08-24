import './formField.css'

/**
 * this component contains an input and the label for these input
 * @param {text} text - the text to show in the label
 * @param {type} type - the type of the input
 * @param {handleEvent} - the callback to handle  onChange events
 * @param {name} - a name to identify the input 
 * @returns 
 */
export function FormField({text,type, handleEvent, name}){
    return(
        <div id="formField">
            <input type={type} placeholder={text} onChange={handleEvent} name = {name}/>
            <label htmlFor>{text}</label>
        </div>
    )
}