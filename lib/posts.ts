import fs from "fs";
import path from "path";

const postsMainDirectory = path.join(process.cwd(), "posts/");

export const getAllFilesWithPath = function (
  dirPath: string,
  arrayOfFiles = []
) {
  const files = fs.readdirSync(dirPath);

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
    fileName.replace(/^.*posts\/(.*)$/, "$1").replace(/\.mdx$/, "")
  );

  return fileNamesWithSubPath;
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

export async function getPostData(slug: string) {
  const id = slug.replace("/", "-");
  const fullPath = postsMainDirectory + slug;
  const fileContents = fs.readFileSync(fullPath + ".mdx", "utf8");
  return {
    id,
    fileContents,
  };
}

export function getMenuData() {
  const slugs = getAllSlugs();

  function prettifyNavigationTitle(title: string) {
    return title
      .split("_")
      .map(function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  function createNestedArray(slugs: any[]) {
    const nestedArray = [];
    slugs.reduce(
      (r, string) => {
        string
          .split(/(?=\/)/)
          .reduce(
            (
              total: { submenu: { title: string; url: any }[] },
              _: any,
              index: number,
              slugs: any[]
            ) => {
              total.submenu = total.submenu || [];
              var url = slugs.slice(0, index + 1).join(""),
                temp = total.submenu.find((object) => object.url === url);
              if (!temp) {
                let title = prettifyNavigationTitle(
                  url.replace(/^.*\/(.*)$/, "$1")
                );
                total.submenu.push((temp = { title, url }));
              }
              return temp;
            },
            r
          );
        return r;
      },
      { submenu: nestedArray }
    );
    return nestedArray;
  }
  return createNestedArray(slugs);
}
