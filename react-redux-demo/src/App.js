import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IcecreamContainer from "./components/IcecreamContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import ChocolateContainer from "./components/ChocoloateContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksIcecreamContainer from "./components/HooksIcecreamContainer";
import HooksChocolateContainer from "./components/HooksChocolateContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake /> */}
        {/* <ItemContainer />
        <CakeContainer /> */}
        <HooksCakeContainer />
        {/* <IcecreamContainer /> */}
        <HooksIcecreamContainer />
        {/* <ChocolateContainer /> */}
        <HooksChocolateContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
