import CyberHeat from "../components/CyberHeat";
import News from "../components/News";
import PanduanHome from "../components/PanduanHome";
import "../App"
import "../css/Home.css"

export default function Home() {
  return (
    <div className="Home">
      <News />
      <CyberHeat />
      <PanduanHome />
    </div>
  )
}
