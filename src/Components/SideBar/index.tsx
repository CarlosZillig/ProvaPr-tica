import User from "../User";
import NavegationGeneral from "./NavegationGeneral";
import NavegationManagement from "./NavegationManagement";
import './SideBar.scss';

const SideBar = () => {
  return(
    <nav className="sidebar-nav">
      <div className="sidebar-container">
        <User />
      </div>
      <div>
        <NavegationGeneral/>
      </div>
      <div>
        <NavegationManagement/>
      </div>
    </nav>
  )
}

export default SideBar;