import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsMainDirectory = path.join(process.cwd(), "posts/");

export function getPostCategoryPath() {
  const fileNames = fs.readdirSync(postsMainDirectory);

  return fileNames.map((fileName) => postsMainDirectory + fileName);
}

export function getAllFileNames() {
  const filesDirectory = getPostCategoryPath();
  const allFileWithPath = getAllFilesWithPath(postsMainDirectory);
  const fileNames = allFileWithPath.map((fileName) =>
    fileName.substring(fileName.lastIndexOf("/") + 1).replace(/\.md$/, "")
  );

  return fileNames;
}

export const getAllFilesWithPath = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFilesWithPath(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
};

export function getAllSlugs() {
  const allFileWithPath = getAllFilesWithPath(postsMainDirectory);
  const fileNamesWithSubPath = allFileWithPath.map((fileName) =>
    fileName.replace(/^.*posts\/(.*)$/, "$1").replace(/\.md$/, "")
  );

  return fileNamesWithSubPath;
}

export function getSortedPostsData() {
  const allSlugs = getAllSlugs();
  const allPostsData = allSlugs.map((slug) => {
    const id = getIdFromSlug(slug);
    const fullPath = postsMainDirectory + slug;
    const fileContents = fs.readFileSync(fullPath + ".md", "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id and slug
    return {
      id,
      slug,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((post1, post2) =>
    post1.title > post2.title ? 1 : -1
  );
}

export function getIdFromSlug(slug) {
  const postId =
    typeof slug === "array"
      ? slug.join("-").replace("/", "-")
      : slug.replace("/", "-");
  return postId;
}

export function getAllPostSlugArray() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => {
    const slugArray = slug.split("/");
    return {
      params: {
        slug: slugArray,
      },
    };
  });
}
export async function getPostData(slug) {
  const id = getIdFromSlug(slug);
  const fullPath = postsMainDirectory + slug;
  const fileContents = fs.readFileSync(fullPath + ".md", "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    slug,
    contentHtml,
    ...matterResult.data,
  };
}
