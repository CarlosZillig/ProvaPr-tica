import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { VscGraphLine } from 'react-icons/vsc';
import { AiFillPieChart, AiOutlineUser } from 'react-icons/ai';
import './NavegationGeneral.scss'
import {useState} from 'react'
import INavegation from '../../../Interfaces/INavegation';

/*Apenas copiei e repliquei este pedaço de codigo para o NavegationManagement, 
tentei utilizar props para usar apenas 1 arquivo, porem ia 
ficar meio bagunçado, mas com certeza seria uma refatoração boa! e será aplicada.*/

const NavegationGeneral = () => {

  const [listNavegation, setListNavegation] = useState<INavegation[]>([
    {
      title: 'Overview',
      icon: <VscGraphLine />
    },
    {
      title: 'Analytics',
      icon: <AiFillPieChart />
    },
    {
      title: 'Finance',
      icon: <FaRegMoneyBillAlt />
    },
    {
      title: 'Account',
      icon: <AiOutlineUser />
    },
  ]);

  return (
    <nav className='navegation'>
      <h3 className='navegation-title'>GENERAL</h3>
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

export default NavegationGeneral;