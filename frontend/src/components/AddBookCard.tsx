import {ChangeEvent, useState} from "react";
import "./AddBookCard.css"

type AddBookCardProps={
    addBook:(newTitle:string, newAuthor:string, newIsbn:string)=>void;
}

export default function AddBookCard(props: AddBookCardProps){
    const [newTitle, setNewTitle] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newIsbn, setNewIsbn] = useState("");

    const onTitleChange=(event:ChangeEvent<HTMLInputElement>)=> {
        setNewTitle(event.target.value)
    }

    const onAuthorChange=(event:ChangeEvent<HTMLInputElement>)=> {
        setNewAuthor(event.target.value)
    }

    const onIsbnChange=(event:ChangeEvent<HTMLInputElement>)=> {
        setNewIsbn(event.target.value)
    }

    return(
        <div className={"cards"}>
            <div className={"addbook-card"}>
                <div className={"add"}>Title: <input onChange={onTitleChange} type={"text"} value={newTitle} placeholder={"Title"}/></div>
                <div className={"add"}>Author: <input onChange={onAuthorChange}type={"text"} value={newAuthor} placeholder={"Author"}/></div>
                <div className={"add"}>ISBN: <input onChange={onIsbnChange} type={"text"} value={newIsbn} placeholder={"ISBN"}/></div>
                <div className={"add"}><button onClick={()=>props.addBook(newTitle, newAuthor, newIsbn)}>Add a book</button></div>
            </div>
        </div>

    )
}