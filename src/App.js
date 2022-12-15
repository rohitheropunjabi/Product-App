
import ProductsHome from './components/Product Page/ProductsHome';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Loginapp from './components/Login Page/Loginapp';
import Create from './components/Product Page/Create';
import Edit from './components/Product Page/Edit';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Loginapp/>}/>
                    <Route path='/Products' element={<ProductsHome/>}/>
                    <Route path='/Create' element={<Create/>}/>
                    <Route path='/Edit' element={<Edit/>}/>
                </Routes>
            </Router>
        </div>
  );
}

export default App;
