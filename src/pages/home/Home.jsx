import TopBox from "../../components/topbox/TopBox.jsx"
import ChartBox from "../../components/chartbox/ChartBox.jsx"
import "./home.scss"
import { 
    chartBoxUser,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxConversion,
    barChartBoxVisit,
    barChartBoxRevenue,
    pieChartBoxDevices,
    bigChartBoxAnalytics
 } from "../../data.js"
import BarChartBox from "../../components/barchartbox/BarChartBox.jsx"
import PieChartBox from "../../components/piechartbox/PieChartBox.jsx"
import BigChartBox from "../../components/bigchartbox/BigChartBox.jsx"

function Home() {
  return (
    <div className="home">
        <div className="box box1"><TopBox /></div>
        <div className="box box2"><ChartBox {...chartBoxUser} /></div>
        <div className="box box3"><ChartBox {...chartBoxProduct} /></div>
        <div className="box box4"><PieChartBox {...pieChartBoxDevices} /></div>
        <div className="box box5"><ChartBox {...chartBoxRevenue} /></div>
        <div className="box box6"><ChartBox {...chartBoxConversion} /></div>
        <div className="box box7"><BigChartBox {...bigChartBoxAnalytics} /></div>
        <div className="box box8"><BarChartBox {...barChartBoxVisit} /></div>
        <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Home
