import CyberHeat from "../components/CyberHeat";
import News from "../components/News";
import PanduanHome from "../components/PanduanHome";
import "../App"
import "../css/Home.css"
import { ShuffleHero } from "../components/ShuffleHero";

export default function Home() {
  return (
    <div className="Home">
      <ShuffleHero />
      <News />
      <CyberHeat />
      <PanduanHome />
    </div>
  )
}
