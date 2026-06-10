import Header from "@/app/component/moleculs/Header";
import SideRays from "./component/atoms/SideRays";
import Navbar from "./component/moleculs/Navbar";
import Projects from "./component/moleculs/Projects";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <SideRays>
        <Navbar />
        <Header />
        <Projects />
      </SideRays>
    </div>
  );
}
