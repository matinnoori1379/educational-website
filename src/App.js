import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/home.js/Home";
import About from "./pages/about.js/About";
import Course from "./pages/course/Course";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Article from "./pages/article/article";
import Privateroutes from "./components/privateroutes";

function App() {
  
  let router=useRoutes([
    {path:"/" , element:<Home />},
    {path:"/about" , element:<About />},

    {path:"/article/*" , element:<Article /> , children:[
      {path:"pm" , element:<h2>آیا طب سنتی بهتر است؟ </h2>},
      {path:"nm" , element:<h2>آیا طب مدرن بهتر است؟</h2>},
      {path:"belive" , element:<h2>باور مردم چیست؟</h2>},
    ]},

    {path:"/course/:extra" , element:<Course />},
    {path:"/login" , element:<Login />},
    {path:"/panel" , element: <Privateroutes> <Panel /> </Privateroutes>},

  ])
  

  return router
}
export default App;
