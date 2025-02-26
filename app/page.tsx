import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/clients";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

function Home() {
  return (
    <main
      className=" relative bg-black-100 flex justify-center
     items-center flex-col overflow-clip
      mx-auto sm:px-10 px-5"
    >
      <div className=" max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}

export default Home;
