import { Route, Routes } from "react-router-dom";
import { Default } from "./components/layouts/Default";
import { routes } from "./utils/routes";
import { NotFound } from "./pages/NotFound";

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
        <Route path='*' element={<Default><NotFound /></Default>}/>
      </Routes>
    </>
  );
}

export default App;
