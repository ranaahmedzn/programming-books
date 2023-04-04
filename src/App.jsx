import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <div className='App container mx-auto'>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      
    </div>
  )
}

export default App
