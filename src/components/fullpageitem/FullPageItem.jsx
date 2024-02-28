/* eslint-disable react/jsx-key */
import { Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import "./fullpageitem.scss"
import { Tooltip } from "@mui/material"
import PropTypes from "prop-types"

function FullPageItem(props) {
    FullPageItem.propTypes = {
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        info: PropTypes.object,
        chart: PropTypes.shape({
            dataKeys: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            ),
            data: PropTypes.arrayOf(PropTypes.object)
        }),
        activities: PropTypes.arrayOf(
            PropTypes.shape({
                time: PropTypes.string,
                text: PropTypes.string,
            })
        )
    }

    return (
        <div className="full-page-item">
            <div className="view">
                <div className="info">
                    <div className="top-info">
                        {props.img &&
                            <img src={props.img} alt="" />
                        }
                        <h1>{props.title}</h1>
                    </div>
                    <div className="details">
                        {Object.entries(props.info).map((item) => (
                            <div className="item" key={item[0]}>
                                <span className="item-title">{item[0]}</span>
                                <span className="item-value">{item[1]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                {props.chart && <div className="chart">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={props.chart.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 60 }} />
                            <Legend />
                            {props.chart.dataKeys.map((dataKey) => (
                                <Line
                                    type="monotone"
                                    dataKey={dataKey.name}
                                    stroke={dataKey.color}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>}
            </div>
            <div className="activities">
                <h2>Latest Activities</h2>
                {props.activities && <ul>
                    {props.activities.map((activity) => (
                        <li key={activity.text}>
                            <div>
                                <p>{activity.text}</p>
                                <time>{activity.time}</time>
                            </div>
                        </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}

export default FullPageItem
