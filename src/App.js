import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';
import store from './Redux/store';
import { Provider } from "react-redux";


function App() {

  return (
    <div className="font-serif ">
       <Provider store={store}>
   <RouterProvider router={router}></RouterProvider>
   </Provider>
    </div>
  );
}

export default App;
