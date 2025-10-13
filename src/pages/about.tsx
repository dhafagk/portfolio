import Layout from "@/components/Layout";
import Link from "next/link";

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
              <Link
                href="https://www.instagram.com/dhafageka/"
                className="text-link hover:underline"
                target="_blank"
              >
                @dhafageka
              </Link>
            </div>
            <div className="flex items-center text-left gap-4">
              <span className="text-muted w-24">Linkedin:</span>
              <Link
                href="https://www.linkedin.com/in/dhafagk/"
                className="text-link hover:underline"
                target="_blank"
              >
                dhafagk
              </Link>
            </div>
            <div className="flex items-center text-left gap-4">
              <span className="text-muted w-24">Github:</span>
              <Link
                href="https://github.com/dhafagk"
                className="text-link hover:underline"
                target="_blank"
              >
                dhafagk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
