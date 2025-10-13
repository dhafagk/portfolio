import Layout from "@/components/Layout";
import { Accordion, Tab } from "@/components";

export default function SkillsPage() {
  const frontendTabs = [
    {
      id: "typescript",
      label: "Typescript",
      content: (
        <p>
          Building type-safe applications, leveraging advanced TS features like
          generics, utility types, and strict mode configurations.
        </p>
      ),
    },
    {
      id: "react",
      label: "React",
      content: (
        <p>
          Creating interactive UIs with hooks, context API, performance
          optimization, and modern patterns like compound components.
        </p>
      ),
    },
    {
      id: "css",
      label: "CSS",
      content: (
        <p>
          Responsive design with TailwindCSS, CSS Grid, Flexbox, animations, and
          maintaining design systems across projects.
        </p>
      ),
    },
    {
      id: "state",
      label: "State Management",
      content: (
        <p>
          Managing complex application state with Context API, custom hooks, use
          third party libraries such as Redux, Zustand, etc. and also
          implementing efficient data flow patterns.
        </p>
      ),
    },
    {
      id: "others",
      label: "Others",
      content: (
        <p>
          Next.js for full-stack development, testing with Jest, bundling with
          Webpack/Vite, and deployment strategies.
        </p>
      ),
    },
  ];

  const backendTabs = [
    {
      id: "node",
      label: "Node JS",
      content: (
        <p>
          Building REST APIs, handling middleware, managing dependencies with
          npm/yarn, and creating efficient server-side applications with
          Express.js.
        </p>
      ),
    },
    {
      id: "database",
      label: "Database",
      content: (
        <p>
          Designing relational schemas with PostgreSQL, working with NoSQL
          databases like MongoDB, optimizing queries, and implementing data
          migrations.
        </p>
      ),
    },
    {
      id: "cloud",
      label: "Cloud",
      content: (
        <p>
          Deploying applications on AWS, managing serverless functions, setting
          up CI/CD pipelines, and working with cloud databases and storage
          solutions.
        </p>
      ),
    },
    {
      id: "others",
      label: "Others",
      content: (
        <p>
          API authentication with JWT, containerization with Docker, version
          control with Git, and implementing testing strategies for backend
          systems.
        </p>
      ),
    },
  ];

  const accordionItems = [
    {
      title: "Frontend",
      children: (
        <div className="flex flex-col gap-4">
          <p>
            Specializing in modern frontend development with focus on user
            experience, performance, and maintainable code architecture.
            <br />
            Experienced in:
          </p>
          <Tab tabs={frontendTabs} defaultActiveTab="typescript" />
        </div>
      ),
    },
    {
      title: "Backend",
      children: (
        <div className="flex flex-col gap-4">
          <p>
            Experienced in building scalable API architectures, designing
            optimized database structures, implementing secure user
            authentication, and managing reliable cloud-based deployments.
            <br />
            Experienced in:
          </p>
          <Tab tabs={backendTabs} defaultActiveTab="node" />
        </div>
      ),
    },
    {
      title: "AI & Machine Learning",
      children: (
        <p>
          Experienced in applying artificial intelligence to real-world
          applications, with a focus on leveraging Retrieval-Augmented
          Generation (RAG) and prompt engineering to build intelligent,
          context-aware systems. Skilled in designing AI-driven workflows that
          integrate natural language processing, data retrieval, and adaptive
          reasoning to enhance user experience and decision-making.
        </p>
      ),
    },
  ];

  return (
    <Layout currentPage="skills">
      <div className="flex-1 flex justify-center pt-4">
        <div className="max-w-2xl w-full space-y-6">
          <div className="relative border-b-2 border-dashed border-muted pb-3 after:content-[''] after:absolute after:-bottom-2 after:border-dashed after:left-0 after:right-0 after:border-b-2 after:border-muted">
            <h1 className="text-sm text-header font-bold">
              # Skills that I have
            </h1>
          </div>

          <Accordion items={accordionItems} allowMultiple={false} />
        </div>
      </div>
    </Layout>
  );
}
