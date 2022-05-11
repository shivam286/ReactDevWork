import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import MyOrder from './pages/MyOrders/myOrder';


export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                </Route>
                <Route path='MyOrder' element={<MyOrder/>}/>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));
