import {AiOutlineUser} from 'react-icons/ai'
import './User.scss'

const User = () => {
  return(
    <div className='user'>
      <div className='user-image'><AiOutlineUser /></div>
      <div className='user-container'>
        <p>Jane Rotanson</p>
        <span className='user-plan'>Your plan: <b>Premium</b></span>
      </div>
    </div>
  )
}

export default User;