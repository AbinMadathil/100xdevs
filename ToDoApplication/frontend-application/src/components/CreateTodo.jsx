export function CreateToDo() {
    
    return (
        <div>
            <input style= {{padding:10 }} type = "text" placeholder = "Enter todo title"/> <br/>
            <input style= {{padding:10}} type = "text" placeholder = "Enter a description"/> <br/>
            <button type = "submit">Create Todo</button><br/>
        </div>
    );  
}