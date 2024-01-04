import { StarIcon, StarsCardContainer, StarsContainer, StarsText } from "./styles"



const CardStars = ({text}) => {
  return (
    <StarsCardContainer>
        <StarsContainer>
            <StarIcon src="/assets/images/icon-star.svg" alt="" />
            <StarIcon src="/assets/images/icon-star.svg" alt="" />
            <StarIcon src="/assets/images/icon-star.svg" alt="" />
            <StarIcon src="/assets/images/icon-star.svg" alt="" />
            <StarIcon src="/assets/images/icon-star.svg" alt="" />
        </StarsContainer>
        <StarsText>{text}</StarsText>

    </StarsCardContainer>
  )
}

export default CardStars