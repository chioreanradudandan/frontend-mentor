import React, { useState } from 'react'
import * as Styled from './styled/rating-component'

const ratings = [1, 2, 3, 4, 5]

const RatingComponent = () => {
  const [ratingValue, setRatingValue] = useState()
  const [isSubmitted, setIsSubmitted] = useState(false)
  return !isSubmitted ? (
    <Styled.BeforeSubmitContainer>
      <Styled.CircleContainer>
        <Styled.StarIcon></Styled.StarIcon>
      </Styled.CircleContainer>
      <Styled.Header>How did we do?</Styled.Header>
      <Styled.Text>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Styled.Text>
      <Styled.RateContainer>
        {ratings.map(rating => (
          <Styled.RatingCircleContainer
            key={rating}
            isSelected={rating === ratingValue}
            onClick={() => setRatingValue(rating)}
          >
            {rating}
          </Styled.RatingCircleContainer>
        ))}
      </Styled.RateContainer>
      <Styled.Button
        isDisabled={!ratingValue}
        onClick={() => ratingValue && setIsSubmitted(true)}
      >
        Submit
      </Styled.Button>
    </Styled.BeforeSubmitContainer>
  ) : (
    <Styled.AfterSubmitContainer>
      <Styled.ThankYouImg></Styled.ThankYouImg>
      <Styled.FinalRatingContainer>{`You selected ${ratingValue} out of 5`}</Styled.FinalRatingContainer>
      <Styled.Header>Thank you!</Styled.Header>
      <Styled.Text>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Styled.Text>
    </Styled.AfterSubmitContainer>
  )
}

export default RatingComponent
