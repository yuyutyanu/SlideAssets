import { gql } from 'apollo-boost'

export const ALL_POST = gql`
query {
  slides{
    status
    id
    title
    description
    thumbnail{
     url
    }
  }
}
`

export const GET_SLIDE_BY = gql`
query getSlideBy($title: String){
  slide(where: {title:$title}){
    title
    content
  }
}
`
