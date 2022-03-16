import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

/* Routes */
import { HOME_ROUTE, CREATE_PROJECT_ROUTE } from "./routes";

import HomePage from "./components/homePage/HomePage";
import CreateProjectPage from "./components/createPage/CreateProjectPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          {/* <Route path={CREATE_PROJECT_ROUTE} element={<CreateProjectPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
