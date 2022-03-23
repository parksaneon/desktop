import {FlexBox, Imoji, Time, Info, Text, Star, Button, MainWrapper} from './Review.style';
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReviewProps } from './Review.type';
import { memo } from 'react';

const StarScore = (star:number) => {
  const stars = [];
  for(let i=0; i < star; i++) stars.push(<Star><FontAwesomeIcon icon={faStar} /></Star>);
  return stars;
}

const Review = ({review}) => {

  return(
    <article>
      <FlexBox>
        <Imoji>
          {
            review.rating/2 > 3?
              <svg data-v-a09cfc0c="" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" className=""><g data-v-a09cfc0c="" fill="none" fillRule="evenodd"><g data-v-a09cfc0c="" fill="#FA0"><g data-v-a09cfc0c=""><g data-v-a09cfc0c=""><g data-v-a09cfc0c=""><g data-v-a09cfc0c=""><g data-v-a09cfc0c=""><g data-v-a09cfc0c=""><path data-v-a09cfc0c="" d="M19.01 0C29.488.005 38.005 8.532 38 19.01 37.995 29.488 29.468 38.005 18.99 38 8.512 37.995-.005 29.468 0 18.99.005 8.515 8.532-.005 19.01 0zm-.002 3.94c-8.305-.003-15.064 6.748-15.069 15.052-.002 8.307 6.75 15.066 15.053 15.069 8.305.005 15.064-6.747 15.069-15.053.002-8.305-6.75-15.064-15.053-15.069zM14.29 22.515c.962 1.712 2.771 2.771 4.722 2.774 1.928 0 3.731-1.041 4.704-2.721.294-.504.94-.676 1.434-.383.504.292.674.933.382 1.434-1.347 2.328-3.848 3.772-6.52 3.772-2.706-.002-5.219-1.474-6.557-3.84-.28-.507-.103-1.148.398-1.434.51-.284 1.145-.106 1.437.398zm11.214-10.623c1.565.003 2.832 1.27 2.83 2.833 0 1.565-1.27 2.832-2.833 2.83-1.563 0-2.83-1.27-2.83-2.833.003-1.563 1.27-2.83 2.833-2.83zm-13.001-.005c1.563 0 2.83 1.27 2.83 2.833 0 1.563-1.27 2.83-2.833 2.83-1.563 0-2.83-1.27-2.83-2.833 0-1.563 1.27-2.83 2.833-2.83z" transform="translate(-1559 -1337) translate(55 1112) translate(1484 44) translate(20 175) translate(0 6)"></path></g></g></g></g></g></g></g></g></svg>
            :
              <svg data-v-a09cfc0c="" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" className=""><g data-v-a09cfc0c="" fill="none" fillRule="evenodd"><g data-v-a09cfc0c="" fill="#FFCD34"><g data-v-a09cfc0c=""><g data-v-a09cfc0c=""><g data-v-a09cfc0c=""><g data-v-a09cfc0c=""><g data-v-a09cfc0c=""><g data-v-a09cfc0c=""><path data-v-a09cfc0c="" d="M19.008 0c10.478.005 18.998 8.53 18.993 19.008C37.996 29.486 29.468 38.005 18.99 38 8.513 37.995-.004 29.468 0 18.99.006 8.515 8.53-.005 19.008 0zm0 3.94C10.704 3.935 3.945 10.688 3.94 18.993c-.005 8.306 6.749 15.065 15.053 15.068 8.304.005 15.063-6.749 15.066-15.056.005-8.301-6.749-15.06-15.05-15.065zm1.566 19.975c.578 0 1.052.47 1.052 1.051 0 .58-.474 1.051-1.054 1.051H17.42c-.58 0-1.051-.473-1.051-1.054.002-.58.471-1.05 1.054-1.048h3.151zm4.931-11.848c1.563.003 2.83 1.27 2.83 2.832-.002 1.566-1.27 2.833-2.832 2.83-1.566 0-2.832-1.27-2.83-2.832 0-1.563 1.27-2.83 2.832-2.83zm-13.003-.005c1.563 0 2.833 1.27 2.83 2.832 0 1.563-1.27 2.83-2.832 2.83-1.563 0-2.83-1.27-2.83-2.832.003-1.563 1.27-2.83 2.832-2.83z" transform="translate(-1559 -1833) translate(55 1112) translate(1484 44) translate(20 677)"></path></g></g></g></g></g></g></g></g></svg>
          }
        </Imoji>
        <div>
          <div>
            {StarScore(review.rating/2)}
            <Time>{review.reviewDate}</Time>
          </div>
        <Info>
          <span>{review.reviewer.name || '익명'}</span>
          <span>{review.tripTypeText}</span>
        </Info>
        </div>
      </FlexBox>
      <MainWrapper>
        <Text>
          {review.description}
        </Text>
        <Button>삭제</Button>
      </MainWrapper>
    </article>
  )
}

export default memo(Review);