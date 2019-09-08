import {gql} from 'apollo-boost'

export const allPost = gql`
  query allPost {
  posts{
    status
    id
    title
    content
    description
    thumbnail{
      url
    }
  }
}
`
