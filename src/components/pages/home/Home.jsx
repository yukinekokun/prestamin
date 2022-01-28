import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./home.css";
import {ActiveLoans} from "../../../dummyData"
import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";

export default function Home() {
  return (
  <div className="home">
      <FeaturedInfo/>
      <Chart data={ActiveLoans} title="Prestamos activos" grid dataKey="ActiveLoans"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
  </div>
  );
}
