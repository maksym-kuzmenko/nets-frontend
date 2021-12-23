import  { gql } from '@apollo/client'

export const GET_ALL_NOTES = gql`
    query{
        getAllNote{
            id
            title
            author
            date
            fullText
            
        }
    } 
`