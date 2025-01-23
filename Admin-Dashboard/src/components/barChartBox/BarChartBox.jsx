import "./barChartBox.scss";
import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";
import PropTypes from "prop-types";

const BarChartBox = (props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
BarChartBox.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  dataKey: PropTypes.string,
  chartData: PropTypes.arrayOf(PropTypes.object),
};

export default BarChartBox;
