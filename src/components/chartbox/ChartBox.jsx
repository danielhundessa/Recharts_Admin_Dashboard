import { Link } from "react-router-dom"
import { 
    LineChart, 
    Line, 
    Tooltip, 
    ResponsiveContainer 
} from 'recharts';
import "./chartbox.scss"
import PropTypes from "prop-types"

function ChartBox(props) {
    ChartBox.propTypes = {
        color: PropTypes.string,
        icon: PropTypes.string,
        title: PropTypes.string,
        dataKey: PropTypes.string,
        number: (PropTypes.number || PropTypes.string),
        percentage: PropTypes.number,
        chartData: PropTypes.arrayOf(PropTypes.object)
    }

    return (
        <div className="chartbox">
            <div className="box-info">
                <div className="title">
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <h1>{props.number}</h1>
                <Link to="/" style={{ color: props.color }} className="link">View All</Link>
            </div>
            <div className="chart-info">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 60 }} />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="chart-text">
                    <span
                        className="percentage"
                        style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>
                        {props.percentage}%
                    </span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox