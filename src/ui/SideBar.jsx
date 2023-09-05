import { styled } from "styled-components";
import RecentPosts from "../features/RecentPosts";
import BlogCategoires from "../features/BlogCategoires";

const StyledSideBar = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  grid-column: 1/3;

  @media (min-width: 1170px) {
    grid-column: 2/3;
    grid-row: 2/3;
    border-left: 1px solid #444;
  }
`;

function SideBar() {
  return (
    <StyledSideBar>
      <RecentPosts />
      <BlogCategoires />
    </StyledSideBar>
  );
}

export default SideBar;
