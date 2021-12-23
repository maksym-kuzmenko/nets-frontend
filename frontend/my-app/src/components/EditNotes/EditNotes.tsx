import { TextField } from "@material-ui/core";
import React, {FC, useEffect, useState} from "react";
import { Container } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router";
import { INote } from "../../models/INote";
import { useQuery } from "@apollo/client";
import { GET_ALL_NOTES } from "../../quary/note";

const EditNote: FC = observer(() =>{

    const [notes, setNotes] = useState([])
    let { id } = useParams() as any;

    const [title, setTitle] = useState('')
    const {data , loading } = useQuery(GET_ALL_NOTES)
    function saveNote(value:string) {
        let valueSt:string = ''
        if (value === null){
            valueSt = ''
        }else{
            valueSt = value
        }
        localStorage.setItem('notes', valueSt)
    }


    function saveTitle(value:string) {
        let valueSt:string = ''
        if (value === null){
            valueSt = ''
        }else{
            valueSt = value
        }
        localStorage.setItem('title', valueSt)
    }

    useEffect(() => {
        if(!loading){
            setNotes(data.getAllNote)
        }
    }, [data])

    let fulltext = notes.filter((note:INote) => note.id == id).map((note:INote) => note.fullText)[0]

    const [fullText, setFullText] = useState('')

    if (fulltext !== undefined){
        let full = fulltext
        console.log(full)
        console.log(typeof(full))
        // setFullText('')
    }
    // console.log(fulltext)

    // const [fullText, setFullText] = useState(notes.filter((note:INote) => note.id == id).map((note:INote) => note.fullText)[0])
    // const [fullText, setFullText] = useState(full)

    return(
        <Container>
            <div>
                <h1>{id}</h1>

                {notes.filter((note:INote) => note.id == id).map((note:INote) =>

                    <div key={note.id}>
                        title: {note.title}; 
                        
                        fullText: {note.fullText} 
                        
                        author: {note.author}
                        
                        date: {note.date} 
                        
                        
                        <TextField 
                            onChange={e => setTitle(e.target.value)}
                            value={title || ''}
                            label = 'title'
                            {...saveTitle(title || '')}
                        />


                        <TextField 
                            onChange={e => setFullText(e.target.value)}
                            value={fullText || ''}
                            label = 'full text'
                            multiline
                            maxRows ={10}
                            {...saveNote(fullText || '')}
                        
                        />
                        
                        
                        
                        
                        


                        <input type="file" multiple 
                            name="myImage" accept=".png, .jpeg" className="multiple-upload" 
                        />
                    </div>)
                }

            </div>
        </Container>
    )
})
export default EditNote