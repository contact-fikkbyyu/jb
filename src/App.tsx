import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PlantPage } from "./pages/PlantPage";
import { CollectionPage } from "./pages/CollectionPage";
import { MapPage } from "./pages/MapPage";
import { CollectionProvider } from "./context/CollectionContext";

function App() {
  return (
    <CollectionProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="plante/:plantId" element={<PlantPage />} />
            <Route path="carte" element={<MapPage />} />
            <Route path="collection" element={<CollectionPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </CollectionProvider>
  );
}

export default App;
