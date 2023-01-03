import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header';
import Deshboard from './Pages/Deshboard';

const AppRouter = () => {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Deshboard />}/>
      </Routes>
    </Router>
  )
}

export default AppRouter;