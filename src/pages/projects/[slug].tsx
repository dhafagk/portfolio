import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import Layout from "@/components/Layout";
import { Project } from "@/interfaces/ProjectInterface";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout currentPage="projects">
        <div className="flex items-center justify-center h-full">
          <span>Loading...</span>
        </div>
      </Layout>
    );
  }

  return (
    <Layout currentPage="projects">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-0 pt-5 max-w-4xl mx-auto pb-8">
        <div className="flex flex-col col-span-2">
          <div className="relative border-b-2 border-dashed border-muted pb-3 after:content-[''] after:absolute after:-bottom-2 after:border-dashed after:left-0 after:right-0 after:border-b-2 after:border-muted">
            <h1 className="text-sm text-header font-bold"># {project.name}</h1>
          </div>

          <div className="relative border-b-2 border-dashed border-muted pb-3 after:content-[''] after:absolute after:-bottom-2 after:border-dashed after:left-0 after:right-0 after:border-b-2 after:border-muted flex md:hidden flex-col gap-2 pt-4">
            <div className="flex flex-row gap-2">
              <span className="flex-1">Date</span>
              <span className="text-muted flex-2">{project.date}</span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="flex-1">Technology</span>
              <span className="text-muted flex-2">{project.tech}</span>
            </div>
            {project?.githubUrl && project.githubUrl.length > 0 && (
              <div className="flex flex-row gap-2">
                <span className="flex-1">Github URL</span>
                <div className="flex-2 flex gap-2">
                  {project.githubUrl?.map((url) => (
                    <Link
                      key={url}
                      href={url}
                      className="text-link hover:underline"
                      target="_blank"
                    >
                      [link]
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {project?.liveUrl && project.liveUrl.length > 0 && (
              <div className="flex flex-row gap-2">
                <span className="flex-1">Live URL</span>
                <div className="flex-2 flex gap-2">
                  {project.liveUrl?.map((url) => (
                    <Link
                      key={url}
                      href={url}
                      className="text-link hover:underline"
                      target="_blank"
                    >
                      [link]
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="pt-6 prose prose-sm max-w-none text-foreground prose-headings:text-header prose-code:text-muted prose-pre:bg-menu-background prose-pre:border prose-pre:border-muted prose-a:text-link prose-strong:text-foreground prose-table:border-collapse prose-table:border prose-table:border-muted prose-th:border prose-th:border-muted prose-th:bg-menu-background prose-th:text-header prose-th:px-3 prose-th:py-2 prose-td:border prose-td:border-muted prose-td:px-3 prose-td:py-2 prose-td:text-foreground [&_thead_th:first-child]:!pl-3 [&_tbody_td:first-child]:!pl-3"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div>
        <div className="hidden md:flex flex-col gap-2 col-span-1 pt-6">
          <div className="flex flex-row gap-2">
            <span className="flex-1">Date</span>
            <span className="text-muted flex-2">{project.date}</span>
          </div>
          <div className="flex flex-row gap-2">
            <span className="flex-1">Technology</span>
            <span className="text-muted flex-2">{project.tech}</span>
          </div>
          {project?.githubUrl && project.githubUrl.length > 0 && (
            <div className="flex flex-row gap-2">
              <span className="flex-1">Github URL</span>
              <div className="flex-2 flex gap-2">
                {project.githubUrl?.map((url) => (
                  <Link
                    key={url}
                    href={url}
                    className="text-link hover:underline"
                    target="_blank"
                  >
                    [link]
                  </Link>
                ))}
              </div>
            </div>
          )}
          {project?.liveUrl && project.liveUrl.length > 0 && (
            <div className="flex flex-row gap-2">
              <span className="flex-1">Live URL</span>
              <div className="flex-2 flex gap-2">
                {project.liveUrl?.map((url) => (
                  <Link
                    key={url}
                    href={url}
                    className="text-link hover:underline"
                    target="_blank"
                  >
                    [link]
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projectsDirectory = path.join(process.cwd(), "content/projects");
  const filenames = fs.readdirSync(projectsDirectory);

  const paths = filenames
    .filter((name) => name.endsWith(".md"))
    .map((name) => ({
      params: { slug: name.replace(/\.md$/, "") },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projectsDirectory = path.join(process.cwd(), "content/projects");
  const fullPath = path.join(projectsDirectory, `${params?.slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return {
      notFound: true,
    };
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  const project: Project = {
    id: data.id,
    date: data.date,
    name: data.name,
    tech: data.tech,
    description: data.description,
    image: data.image,
    githubUrl: data.githubUrl,
    liveUrl: data.liveUrl,
    content: contentHtml,
  };

  return {
    props: {
      project,
    },
  };
};
