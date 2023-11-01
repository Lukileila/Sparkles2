/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import Spinner from './Spinner';

export default function CardSection({allEntries}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  console.log("Cardsection allEntries:",allEntries)

  return (
    <div className="carousel-container">
      {allEntries.length > 0 ? (


       <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
        > 

        {console.log("Something",allEntries.map((x)=>x))}
        {allEntries.map((x)=>
        {return <Card key={x} singleProduct={x}/> }
        )}

         </Carousel> 

      ) : (
        <Spinner />
      )}
    </div>
  );
}