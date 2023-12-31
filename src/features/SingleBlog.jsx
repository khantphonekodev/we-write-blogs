/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { StyledHeading } from "../ui/Heading";
import { StyledImg } from "../ui/Image";
import { Small } from "../ui/Small";
import { Link, useNavigate } from "react-router-dom";
import { formatTimestampRelativeToNow } from "../utils/FormatDate";

const StyledSingleBlog = styled.div`
  display: grid;
  grid-template-rows: 2fr 3fr;
  gap: 0.4rem;
  min-height: 300px;
  max-height: 370px;
  box-shadow: -6px 7px 9px -7px rgba(0, 0, 0, 0.75);
  background-color: var(--gray);
  transition: 0.6s;
  margin: 20px 10px;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledTexts = styled.div`
  display: grid;
  gap: 0.2rem;
  grid-template-rows: auto auto auto;
  text-align: left;
  padding: 12px 16px;
`;
const ImageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function SingleBlog({ blog }) {
  const navigate = useNavigate();
  return (
    <StyledSingleBlog onClick={() => navigate(`/blogs/${blog.id}`)}>
      <ImageContainer>
        <StyledImg src={blog.image} alt="blog image" />
      </ImageContainer>
      <StyledTexts>
        <StyledHeading as="h5">{blog.title}</StyledHeading>
        <Small size="14px">{blog.intro}</Small>
        <Div>
          <Link to={`/blogs/${blog.id}`}>
            <Small color="blue">Read More</Small>
          </Link>
          <Small color="#2A2F4F" size="10px">
            {formatTimestampRelativeToNow(blog.created_at)}
          </Small>
        </Div>
      </StyledTexts>
    </StyledSingleBlog>
  );
}

export default SingleBlog;
