import { FaFlagUsa } from 'react-icons/fa'
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { HiOutlineUsers } from 'react-icons/hi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import './Header.scss'

const Header = () => {
  return(
    <nav className="header-nav">
      <div className="header-container">
        Logo
      </div>
      <div className="header-container"> 
        <ul className="header-list">
          <li className="header-item"><FaFlagUsa /></li>
          <li className="header-item"><AiOutlineSearch /></li>
          <li className="header-item"><HiOutlineUsers /></li>
          <li className="header-item"><IoMdNotificationsOutline /></li>
          <li className="header-item"><AiOutlineUser /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;