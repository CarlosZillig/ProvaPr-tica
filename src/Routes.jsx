import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Deshboard from './Pages/Deshboard';

const AppRouter = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Deshboard />}/>
      </Routes>
    </Router>
  )
}

export default AppRouter;