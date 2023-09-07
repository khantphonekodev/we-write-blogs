import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { styled } from "styled-components";
import SideBar from "./SideBar";

const App = styled.div`
  background-color: var(--white);
`;

const StyledAppLayout = styled.div`
  display: grid;

  padding: 20px;
  grid-template-rows: auto 1fr auto auto;
  gap: 1.4rem;
  @media (min-width: 1170px) {
    grid-template-columns: 1fr 26rem;
  }
`;

const StyledMain = styled.div`
  grid-column: 1/3;
  overflow-y: scroll;
  @media (min-width: 1170px) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;

function AppLayout() {
  return (
    <App>
      <StyledAppLayout>
        <Header />

        <StyledMain>
          <Outlet />
        </StyledMain>
        <SideBar />
        <Footer />
      </StyledAppLayout>
    </App>
  );
}

export default AppLayout;
