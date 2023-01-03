import Card from './Card';
import Orders from './Orders';
import './Overview.scss';

const Overview = () => {
  return (
    <section className="overview">
      <span className="overview-tag">Overview</span>
      <div className="overview-today">
        <p className="overview-today--hi">Good morning, Jane</p>
        <span className="overview-today--projects">Here's what's happening with your projects today</span>
      </div>
      <div className='overview-container'>
        <Card title='0.299 BTC' legend='Weekly earnings' />
        <Card title='$2,150,000.00' legend='Your private wallet' />
      </div>
      <div className='overview-container'>
        <Orders />
      </div>
    </section>
  )
}

export default Overview;