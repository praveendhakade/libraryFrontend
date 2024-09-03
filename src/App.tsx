import { Outlet } from "react-router-dom";
import "./assets/scss/App.css";
import NavHeader from "./components/nav/NavHeader";
import { Footer } from "./components/shared/homepage/Footer";

function App() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <NavHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
