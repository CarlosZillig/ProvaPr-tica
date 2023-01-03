import Overview from "../../Components/Overview";
import SideBar from "../../Components/SideBar";
import './Deshboard.scss'

const Deshboard = () => {
  return(
    <main>
      <aside>
        <SideBar />
      </aside>
      <section>
        <Overview />
      </section>
    </main>
  )
}

export default Deshboard;