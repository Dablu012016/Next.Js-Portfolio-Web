import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import NewsLatter from "./components/NewsLatter";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Blogs />
      <NewsLatter />
    </div>
  );
}
