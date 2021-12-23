import  { gql } from '@apollo/client'

export const CREATE_USER = gql`
mutation createNote($input: CreateNoteInput!){
    createNote(createNoteData: $input){
      title, fullText
    }
  }
`