import Header from "./header/header";
import Home from "./home/home";
import Service from "./service/service";
import Footer from "./footer/footer";
import './app.scss'
import Security from "./security/security";

function App(){
  return (
    <div className="App">
          <Header />
          <Home />
          <Service />
          <Security />
          <Footer />
    </div>
  );
}

export default App;
