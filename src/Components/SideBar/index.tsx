import User from "../User";
import './SideBar.scss';

const SideBar = () => {
  return(
    <nav className="sidebar-nav">
      <div className="sidebar-container">
        <User />
      </div>
    </nav>
  )
}

export default SideBar;