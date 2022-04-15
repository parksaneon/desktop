import { StyledDiv, StyledDivInner } from './Carousel.style';
import CarouselLi from './CarouselLi/CarouselLi';
import { CarouselProps } from './Carousel.type';

const NoMoveCarousel = ({ resHotels }: CarouselProps) => {
  return (
    <div>
      <StyledDiv>
        <ul>
          {resHotels.length !== 0 &&
            resHotels.map((hotel, index) => <CarouselLi key={resHotels.length * index} hotel={hotel} />)}
        </ul>
      </StyledDiv>
    </div>
  );
};

export default NoMoveCarousel;
