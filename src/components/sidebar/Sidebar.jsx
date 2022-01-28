import "./sidebar.css";
import {LineStyle, Paid, Groups, Settings} from '@mui/icons-material';

export default function Sidebar() {
  return( 
  <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
            <LineStyle className="sidebarIcon"/>
            Inicio
            </li>
            <li className="sidebarListItem">
            <Groups className="sidebarIcon"/>
            Clientes
            </li>
            <li className="sidebarListItem">
            <Paid className="sidebarIcon"/>
            Monedas
            </li>
            <li className="sidebarListItem">
            <Paid className="sidebarIcon"/>
            Prestamos
            </li>
            <li className="sidebarListItem">
            <Paid className="sidebarIcon"/>
            Cobranzas
            </li>
            <li className="sidebarListItem">
            <Settings className="sidebarIcon"/>
            configuracion
            </li>
          </ul>
        </div>
      </div>
  </div>
  )
}
