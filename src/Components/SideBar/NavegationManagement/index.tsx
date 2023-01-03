import {HiOutlineUsers} from 'react-icons/hi';
import {AiOutlineShoppingCart, AiOutlineProfile} from 'react-icons/ai';
import { BsFiles } from 'react-icons/bs'
import {useState} from 'react'
import INavegation from '../../../Interfaces/INavegation';

/*Apenas copiei e repliquei este pedaço de codigo para o NavegationManagement, 
tentei utilizar props para usar apenas 1 arquivo, porem ia 
ficar meio bagunçado, mas com certeza seria uma refatoração boa! e será aplicada.*/

const NavegationManagement = () => {
  const [listNavegation, setListNavegation] = useState<INavegation[]>([
    {
      title: 'Costumers',
      icon: <HiOutlineUsers />
    },
    {
      title: 'Products',
      icon: <AiOutlineShoppingCart />
    },
    {
      title: 'Orders',
      icon: <BsFiles />
    },
    {
      title: 'Invoices',
      icon: <AiOutlineProfile />
    },
  ]);

  return(
    <nav className='navegation'>
    <h3 className='navegation-title'>MANAGEMENT</h3>
    <ul className='navegation-list'>
      {listNavegation.map(item => (
        <li className='navegation-item' key={item.title}>
          <span className='navegation-icon'>{item.icon}</span>
          <a href="#">{item.title}</a>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default NavegationManagement;