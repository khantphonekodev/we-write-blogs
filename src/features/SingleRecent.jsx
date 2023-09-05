import { styled } from "styled-components";
import { StyledImg } from "../ui/Image";
import { StyledHeading } from "../ui/Heading";
import { Small } from "../ui/Small";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const StyledContainer = styled.div`
  /* display: flex;
  align-items: center;
  gap: 1.2rem; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.2rem;
  align-items: center;

  &:hover img {
    transform: scale(1.02);
  }
`;
const StyledImageContainer = styled.div``;
const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: space-between;
`;

function SingleRecent({ blog }) {
  return (
    <Link to={`/blogs/${blog.id}`}>
      <StyledContainer>
        <StyledImageContainer>
          <StyledImg src={blog.image} />
        </StyledImageContainer>
        <StyledContentContainer>
          <Small color="#102C57">{blog.category}</Small>
          <StyledHeading as="h5">{blog.intro}</StyledHeading>
          <Small color="#2A2F4F">{blog.created_at}</Small>
        </StyledContentContainer>
      </StyledContainer>
    </Link>
  );
}

export default SingleRecent;
