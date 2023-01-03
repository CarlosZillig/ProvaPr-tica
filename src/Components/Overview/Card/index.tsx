import './Card.scss'
import {IoIosArrowDown} from 'react-icons/io'
import ICard from '../../../Interfaces/ICard';

const Card = (props: ICard) => {
  return (
    <article className="card">
      <div className="card-chart--container">
        <div className='card-chart'></div>
      </div>
      <div className="card-finance--container">
        <div>
          <p className="card-finance">{props.title}</p>
          <span className="card-weekly-earnings">{props.legend}</span>
        </div>
        <span className='card-expand'><IoIosArrowDown /></span>
      </div>
    </article>
  )
}

export default Card;