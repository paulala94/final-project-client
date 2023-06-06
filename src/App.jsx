import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation/Navigation';
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer';
// import { Viewport } from 'react-responsive';

function App() {

  return (
    <div className='App'>
      {/* <Viewport mobile> */}
      <Navigation />
      <AppRoutes />
      <Footer />
      {/* </Viewport> */}
    </div>

  )
}

export default App