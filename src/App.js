import { Provider } from "react-redux";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainWrapper from "./components/MainWrapper";
import Theme from "./components/Theme";
import store from "./store";

function App() {
  return (
    <>
    <Provider store={store}>
      <Theme>
        <MainWrapper>
          <Header/>
          <Body/>
          <Footer/>
        </MainWrapper>
      </Theme>
      </Provider>
    </>
  );
}

export default App;
