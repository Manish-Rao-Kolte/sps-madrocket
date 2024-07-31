import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselComponent = (props) => {
  return (
    <Carousel
      className='w-full rounded-lg'
      controls={true}
      indicators={true}
      interval={3000}
      pause='hover'
    >
      <Carousel.Item className='relative'>
        <img
          className='d-block w-100 h-[100vh] img-fluid mx-auto object-cover'
          src='https://img.freepik.com/free-photo/full-shot-kids-playing-football-together_23-2149270950.jpg?t=st=1721970033~exp=1721973633~hmac=93cfc7c6b1c40590b3e5b5a01f1632d7c8c6eef9a7a2ee5ac75e6a8f99e232fb&w=1380'
          alt='Annual Sports Day'
        />
        <Carousel.Caption className='bg-gradient-to-t from-black/50 via-transparent to-transparent bg-opacity-45 p-4 rounded-lg'>
          <h5 className='font-bold text-white text-3xl mb-2'>
            Annual Sports Day
          </h5>
          <p className='text-white text-lg'>Celebrating Excellence in Sports</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='relative'>
        <img
          className='d-block w-100 h-[100vh] img-fluid mx-auto object-cover'
          src='https://img.freepik.com/free-photo/young-boy-learning-more-about-chemistry-class_23-2149068317.jpg?t=st=1721969617~exp=1721973217~hmac=3198174d7d46660c8e1a35afeb6dfb09253bd71488e276953fc577e5d09a3f5f&w=1380'
          alt='Science Exhibition'
        />
        <Carousel.Caption className='bg-gradient-to-t from-black/50 via-transparent to-transparent bg-opacity-45 p-4 rounded-lg'>
          <h5 className='font-bold text-white text-3xl mb-2'>
            Science Exhibition
          </h5>
          <p className='text-white text-lg'>Showcasing Student Innovations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='relative'>
        <img
          className='d-block w-100 h-[100vh] img-fluid mx-auto object-cover'
          src='https://img.freepik.com/free-photo/little-kids-halloween-party_53876-49101.jpg?t=st=1721969777~exp=1721973377~hmac=47428a963f19a78dec9ea34f6582ed26fb6baf0002db1ddcbcc73e5c5b0f269b&w=1060'
          alt='Cultural Fest'
        />
        <Carousel.Caption className='bg-gradient-to-t from-black/50 via-transparent to-transparent bg-opacity-45 p-4 rounded-lg'>
          <h5 className='font-bold text-white text-3xl mb-2'>Cultural Fest</h5>
          <p className='text-white text-lg'>
            Embracing Diversity and Creativity
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;

{
  /* 
  <video
              src='https://cdn.pixabay.com/video/2016/09/13/5157-183300197_large.mp4'
              muted
              loop
              autoPlay
              className='h-full w-full object-cover'
            ></video> 
            */
}
