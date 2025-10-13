import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/projects");
  }, [router]);

  return (
    <>
      <Head>
        <title>Dhafa Gustiadi Kurniawan - Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer from Bandung, Indonesia. Specialized in React, Next.js, Node.js, and modern web technologies."
        />
      </Head>
      {null}
    </>
  );
}
