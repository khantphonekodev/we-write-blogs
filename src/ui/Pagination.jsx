/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import { PagePerItems } from "../utils/Env";
import { Small } from "./Small";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PaginationButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);
  border-radius: 25px;
  transition: 0.6ms;

  gap: 0.4rem;
  padding: 0.4rem 0.8rem;

  & svg {
    height: 1.6rem;
    width: 1.6rem;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

const P = styled.p`
  font-size: 1rem;
  margin-left: 0.4rem;

  & span {
    font-weight: 700;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page")
    ? Number(searchParams.get("page"))
    : 1;
  const totalPage = Math.ceil(count / PagePerItems);

  function prevPage() {
    const prev = currentPage === 1 ? 1 : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  function nextPage() {
    const next = currentPage === totalPage ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  //if page is only one , don't show pagination
  if (totalPage === 1) return null;

  const startItem = (currentPage - 1) * PagePerItems + 1;
  const endItem =
    currentPage === totalPage ? count : currentPage * PagePerItems;

  return (
    <StyledPagination>
      <P>
        Showing {startItem} to {endItem} of total {count} results
      </P>
      <Buttons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <IoChevronBack />
          <Small>Back</Small>
        </PaginationButton>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === totalPage}
        >
          <Small>Next</Small>
          <IoChevronForward />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
