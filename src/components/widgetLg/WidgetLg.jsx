import "./widgetLg.css";



export default function WidgetLg() {

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Ultimos movimientos</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Clientes</th>
          <th className="widgetLgTh">Dia</th>
          <th className="widgetLgTh">Monto</th>
          <th className="widgetLgTh">Estatus</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?cs=srgb&dl=pexels-ihsan-adityawarman-1056251.jpg&fm=jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">susan Lex</span>
          </td>
          <td className="widgetLgDate">3 Ene 2022</td>
          <td className="widgetLgAmount">$2,000</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
            </td>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Clientes</th>
          <th className="widgetLgTh">Dia</th>
          <th className="widgetLgTh">Monto</th>
          <th className="widgetLgTh">Estatus</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?cs=srgb&dl=pexels-ihsan-adityawarman-1056251.jpg&fm=jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">susan Lex</span>
          </td>
          <td className="widgetLgDate">3 Ene 2022</td>
          <td className="widgetLgAmount">$2,000</td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
            </td>
        </tr>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Clientes</th>
          <th className="widgetLgTh">Dia</th>
          <th className="widgetLgTh">Monto</th>
          <th className="widgetLgTh">Estatus</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?cs=srgb&dl=pexels-ihsan-adityawarman-1056251.jpg&fm=jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">susan Lex</span>
          </td>
          <td className="widgetLgDate">3 Ene 2022</td>
          <td className="widgetLgAmount">$2,000</td>
          <td className="widgetLgStatus">
            <Button type="Pending"/>
            </td>
        </tr>
      </table>
    </div>
  )
}
