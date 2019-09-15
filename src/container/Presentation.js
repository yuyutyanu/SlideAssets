import * as React from 'react';
import { ALL_POST } from "../query/slide";
import { useQuery } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import '../assets/presentation.css'

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

const Presentation = () => {
  const {loading, error, data} = useQuery(ALL_POST);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {
        data.slides.map(slide => (
          <div className="toSlide">
            <Link to={`/slide/${slide.title}`}>
              <div className="slide-thumbnail-wrapper">
                <img src={slide.thumbnail.url} alt=""/>
              </div>
            </Link>
            <div>
              <div className="slide-title">{slide.title}</div>
              <div className="description">
                {slide.description}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default Presentation
