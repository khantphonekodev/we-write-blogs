import { styled } from "styled-components";
import SingleBlog from "./SingleBlog";
import { useGetBlogs } from "./useGetBlogs.js";
import Spinner from "../ui/Spinner";
import { useSearchParams } from "react-router-dom";
import Pagination from "../ui/Pagination";

// const data = [
//   {
//     id: 1,
//     name: "What is technology",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 2,
//     name: "Vision in football",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 3,
//     name: "Regen Tiki taka",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 4,
//     name: "Generation talent boy",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 5,
//     name: "What is technology",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 6,
//     name: "Vision in football",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 7,
//     name: "Regen Tiki taka",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 8,
//     name: "Generation talent boy",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 9,
//     name: "What is technology",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 10,
//     name: "Vision in football",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 11,
//     name: "Regen Tiki taka",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 12,
//     name: "Generation talent boy",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 10,
//     name: "Vision in football",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 11,
//     name: "Regen Tiki taka",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
//   {
//     id: 12,
//     name: "Generation talent boy",
//     content:
//       "what is well knoe Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quibusdam debitis quos laboriosam magnam ",

//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-Tju_yJO0olwVOlvplDDX1GZZMlFatW42g&usqp=CAU",
//   },
// ];

const StyledBlogs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* padding: 20px; */
  /* gap: 1.2rem; */

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1170px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

function AllBlogs() {
  const { blogs, count, isGettingBlogs } = useGetBlogs();
  const [searchParams] = useSearchParams();

  if (isGettingBlogs) return <Spinner />;

  const currentCategory = searchParams.get("category");

  let filteredBlogs;
  if (currentCategory)
    filteredBlogs = blogs.filter((blog) => blog.category === currentCategory);
  if (!currentCategory) filteredBlogs = blogs;
  return (
    <>
      <StyledBlogs>
        {filteredBlogs.map((blog) => (
          <SingleBlog blog={blog} key={blog.id} />
        ))}
      </StyledBlogs>
      <Pagination count={count} />
    </>
  );
}

export default AllBlogs;
