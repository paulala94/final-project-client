import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation/Navigation';
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div>
      <Navigation />
      <AppRoutes />
    </div>
    
  ),
}

export default App