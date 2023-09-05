import { styled } from "styled-components";
import { StyledHeading } from "../ui/Heading";
import SingleRecent from "./SingleRecent";
import { useGetRecentBlogs } from "./useGetRecentBlogs";

const StyledRecentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 20px;
`;

function RecentPosts() {
  const { recentBlogs, isGettingRecent } = useGetRecentBlogs();
  if (isGettingRecent) return null;
  return (
    <div>
      <StyledHeading as="h4">Recent posts</StyledHeading>
      <StyledRecentContainer>
        {recentBlogs.map((blog) => (
          <SingleRecent blog={blog} key={blog.id} />
        ))}
      </StyledRecentContainer>
    </div>
  );
}

export default RecentPosts;
