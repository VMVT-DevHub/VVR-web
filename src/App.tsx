import { Route, Routes } from "react-router-dom";
import { Default } from "./components/layouts/Default";
import { routes } from "./utils/routes";

function App() {
 
  return (
    <>
      <Routes>
        {(routes || []).map((route, index) => (
          <Route
            key={`route-${index}`}
            path={route.path}
            element={<Default>{route.element}</Default>}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
