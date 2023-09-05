import supabase, { supabaseUrl } from "../services/supabase";
import { PagePerItems } from "../utils/Env";

export async function getBlogs(page, category) {
  let query = supabase.from("blogs").select("*", { count: "exact" });

  // Filter by category
  if (category) {
    query.eq("category", category);
  }

  //page
  if (page) {
    const from = (page - 1) * PagePerItems;
    const to = from + PagePerItems - 1;
    query.range(from, to);
  }

  const { data: blogs, count, error } = await query;

  if (error) throw new Error("There is an error in getting blogs");

  return { blogs, count };
}

export async function getRecentBlogs() {
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) throw new Error("There is an error in getting blogs");

  return blogs;
}
export async function getSingleBlog(id) {
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error("There is an error in getting single blog");

  return blog;
}

export async function getCategories() {
  const { data: categories, error } = await supabase
    .from("blogs")
    .select("category");

  if (error) throw new Error("There is an error in getting categories");

  const categoriesArr = categories.map((entry) => entry.category);
  const uniqueCategories = [...new Set(categoriesArr)];

  return uniqueCategories;
}

export async function createEditBlog(newBlog, idToUpdate) {
  //'https://zbqqjtzjipkrbgmaklvy.supabase.co/storage/v1/object/public/covers/vs.png'::text
  const isEditingSession = Boolean(idToUpdate);
  const hasImgInDB = newBlog?.image?.startsWith?.(supabaseUrl);

  const ImgName = `${Math.random()}-${newBlog.image.name}`.replaceAll("/", "");
  const ImageUlr = hasImgInDB
    ? newBlog.image
    : `${supabaseUrl}/storage/v1/object/public/covers/${ImgName}`;

  //1. Create Cabin with imageUrl

  let query = supabase.from("blogs");

  if (!isEditingSession) {
    query = query.insert([{ ...newBlog, image: ImageUlr }]);
  }
  if (isEditingSession) {
    query = query.update({ ...newBlog, image: ImageUlr }).eq("id", idToUpdate);
  }

  const { data: blog, error: isCreatngError } = await query.select().single();

  if (isCreatngError) throw new Error("There is an error in creating blog");

  //2. Upload photo
  // Early return
  if (hasImgInDB) return blog;

  const { error: isUploadingPhotoError } = await supabase.storage
    .from("covers")
    .upload(ImgName, newBlog.image);

  //3 If error in uploadin photo delete the uploaded blog
  if (isUploadingPhotoError) {
    await supabase.from("blogs").delete().eq("id", blog.id);
    throw new Error("There is an error in uploading blog cover photo ");
  }

  return blog;
}

export async function deleteBlog(id) {
  const { error } = await supabase.from("blogs").delete().eq("id", id);
  if (error)
    throw new Error("There is an error in uploading blog cover photo ");
}
