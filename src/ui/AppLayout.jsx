import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { styled } from "styled-components";
import SideBar from "./SideBar";

const App = styled.div`
  width: inherit;
  min-height: 100dvh;
  background-color: var(--white);
`;

const StyledAppLayout = styled.div`
  min-height: 100vh;
  width: inherit;
  display: grid;
  grid-template-columns: 1fr 26rem;
  grid-template-rows: auto 1fr auto auto;
  padding: 20px;
  row-gap: 1.4rem;
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
