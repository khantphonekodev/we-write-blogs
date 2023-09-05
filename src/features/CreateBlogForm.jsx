/* eslint-disable react/prop-types */
import { css, styled } from "styled-components";
import { StyledHeading } from "../ui/Heading";
import { StyledInput } from "../ui/Input";
import Textarea from "../ui/TextArea";
import { StyledButton } from "../ui/Button";
import { useGetCategories } from "../features/useGetCategories";
import { useForm } from "react-hook-form";
import { useCreateBlog } from "./useCreateBlog";
import { useUpdateBlog } from "./useUpdateBlog";
import FileInput from "../ui/FileInput";
import FormRow from "../ui/FormRow";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: -6px 7px 9px -7px rgba(0, 0, 0, 0.75);
  background-color: var(--gray);
  border-radius: 5px;
  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `};
  margin: 0 auto;
  padding: 40px 30px;
  gap: 1.6rem;
`;

const ButtonDiv = styled.div`
  text-align: right;
`;

const Select = styled.select`
  padding: 12px 24px;
  color: var(--text);
  border: none;
  background-color: var(--white);
  &:foucs {
    outline: none;
    border: none;
  }
`;

function CreateBlogForm({ type = "normal", blog = {} }) {
  const { categories = [] } = useGetCategories();
  const { mutateCreateBlog, isCreatingBlog } = useCreateBlog();
  const { mutateUpdateBlog, isUpdatingBlog } = useUpdateBlog();

  const { id: idToUpdate, ...blogData } = blog;
  const isEditingSession = Boolean(idToUpdate);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: isEditingSession ? blogData : {} });

  function onSubmit(data) {
    const imageToUpload =
      typeof data.image === "string" ? data.image : data.image[0];
    if (isEditingSession) {
      mutateUpdateBlog({
        newBlog: { ...data, image: imageToUpload },
        idToUpdate: idToUpdate,
      });
    } else {
      mutateCreateBlog({ ...data, image: imageToUpload });
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} type={type}>
      <StyledHeading as="h3">Create New Blog</StyledHeading>

      <FormRow label="Title" error={errors?.title?.message}>
        <StyledInput
          placeholder="Example Title...."
          {...register("title", {
            required: "Title field is required to create blog",
          })}
        />
      </FormRow>

      <FormRow label="Intro Content" error={errors?.intro?.message}>
        <Textarea
          placeholder="Write Intro...."
          size="4rem"
          {...register("intro", {
            required: "Intro content field is required to create blog",
          })}
        />
      </FormRow>
      <FormRow label="Content" error={errors?.content?.message}>
        <Textarea
          placeholder="Write Content...."
          {...register("content", {
            required: "Content is required to create blog",
          })}
        />
      </FormRow>

      <FormRow label="Cateogry" error={errors?.category?.message}>
        <Select
          name="categroy"
          defaultValue={categories[0]}
          {...register("category", {
            required: "Category field is required to create blog",
          })}
        >
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </Select>
      </FormRow>

      <FormRow label="Cover Image" error={errors?.image?.message}>
        <FileInput
          {...register("image", {
            required: isEditingSession
              ? false
              : "Image field is required to create blog",
          })}
        />
      </FormRow>

      <ButtonDiv>
        <StyledButton
          variation="primary"
          disabled={isCreatingBlog || isUpdatingBlog}
        >
          {isEditingSession ? "Update" : "Create"}
        </StyledButton>
      </ButtonDiv>
    </StyledForm>
  );
}

export default CreateBlogForm;
