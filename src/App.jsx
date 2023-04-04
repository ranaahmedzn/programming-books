import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";

function App() {
  const navigation = useNavigation()

  return (
    <div className="App container mx-auto">
      <Header></Header>
      {navigation.state === "loading" ? <LoadingPage /> : ""}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
