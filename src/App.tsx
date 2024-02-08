import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./route/Routes";

const App: React.FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
