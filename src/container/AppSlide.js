import * as React from 'react';
import { Deck, MarkdownSlides } from 'spectacle';
import {GET_SLIDE_BY} from '../query/slide'
import {useQuery} from '@apollo/react-hooks'

// const theme = createTheme(
//   {
//     primary: 'dedede',
//     secondary: 'black'
//   },
//   {
//     primary: 'Helvetica',
//     secondary: {
//       name: 'Droid Serif',
//       googleFont: true,
//       styles: ['400', '700i']
//     }
//   }
// )

const AppSlide = ({history}) => {
  const pathList = history.location.pathname.split("/")
  const title = pathList[pathList.length - 1]

  const {loading, error, data} = useQuery(GET_SLIDE_BY, {
    variables: {title}
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Deck>
      {MarkdownSlides(data.slide.content)}
    </Deck>
  )
}

export default AppSlide
