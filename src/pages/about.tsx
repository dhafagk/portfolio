import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout currentPage="about">
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-xl flex flex-col gap-4 text-center">
          <div className="flex flex-col gap-1">
            <p className="text-header">About page v0.0.1</p>
            <p className="text-header">Me on the web</p>
            <div className="flex items-center text-left gap-4">
              <span className="text-muted w-24">Email:</span>
              <span className="text-link">dhafageka@gmail.com</span>
            </div>
            <div className="flex items-center text-left gap-4">
              <span className="text-muted w-24">Instagram:</span>
              <span className="text-link">@dhafageka</span>
            </div>
            <div className="flex items-center text-left gap-4">
              <span className="text-muted w-24">Linkedin:</span>
              <span className="text-link">dhafagk</span>
            </div>
            <div className="flex items-center text-left gap-4">
              <span className="text-muted w-24">Github:</span>
              <span className="text-link">dhafagk</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
