import { styled } from "styled-components";
import { StyledHeading } from "../ui/Heading";
import { StyledImg } from "../ui/Image";
import { PillButton } from "../ui/PillButton";
import { StyledButton } from "../ui/Button";
import { useGetBlog } from "./useGetBlog";
import { useGetUser } from "./auth/useGetUser";
import Spinner from "../ui/Spinner";
import { useDeleteBlog } from "./useDeleteBlog";
import Modal from "../ui/Modal";
import ConfirmDelete from "../ui/ConfirmDelete";
import CreateBlogForm from "./CreateBlogForm";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  text-align: center;
`;
const ImgContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 600px) {
    width: 80%;
  }
  @media (min-width: 970px) {
    width: 70%;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 90%;
  }
`;
const P = styled.p`
  letter-spacing: 0.6px;
  font-size: 20px;
  line-height: 140%;
  text-align: justify;
  white-space: normal;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
`;

function BlogDetail() {
  const { blog, isGettingBlog } = useGetBlog();
  const { mutateDeleteBlog, isDeletingBlog } = useDeleteBlog();
  const { isAuthenticated, isGettingUser } = useGetUser();
  const isProcessing = isDeletingBlog || isGettingBlog;

  if (isGettingBlog || isGettingUser) return <Spinner />;

  return (
    <StyledDiv>
      <StyledHeading as="h3">
        <span>{blog.title}</span>
      </StyledHeading>
      <div>
        <PillButton>{blog.category}</PillButton>
      </div>
      <ImgContainer>
        <StyledImg src={blog.image} alt="image" />
      </ImgContainer>
      <ContentContainer>
        <P>{blog.content}</P>
      </ContentContainer>

      {isAuthenticated && (
        <ActionsContainer>
          {/* Edit Blog Action */}
          <Modal>
            <Modal.OpenButton value="edit">
              <StyledButton variation="primary" disabled={isProcessing}>
                Edit Blog
              </StyledButton>
            </Modal.OpenButton>
            <Modal.Content value="edit">
              <CreateBlogForm type="modal" blog={blog} />
            </Modal.Content>
          </Modal>

          {/* Delete Blog Action */}
          <Modal>
            <Modal.OpenButton value={blog.id}>
              <StyledButton variation="danger" disabled={isProcessing}>
                Delete Blog
              </StyledButton>
            </Modal.OpenButton>
            <Modal.Content value={blog.id}>
              <ConfirmDelete
                resource="blog"
                onConfirm={() => mutateDeleteBlog(blog.id)}
                disabled={isDeletingBlog}
              />
              {/* <div>hello world</div> */}
            </Modal.Content>
          </Modal>
        </ActionsContainer>
      )}
    </StyledDiv>
  );
}

export default BlogDetail;
