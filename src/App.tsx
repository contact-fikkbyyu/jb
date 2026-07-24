import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { GardenPage } from "./pages/GardenPage";
import { ZonePage } from "./pages/ZonePage";
import { PlantPage } from "./pages/PlantPage";
import { CollectionPage } from "./pages/CollectionPage";
import { CollectionProvider } from "./context/CollectionContext";

function App() {
  return (
    <CollectionProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="jardin/:gardenId" element={<GardenPage />} />
            <Route
              path="jardin/:gardenId/espace/:zoneId"
              element={<ZonePage />}
            />
            <Route path="plante/:plantId" element={<PlantPage />} />
            <Route path="collection" element={<CollectionPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </CollectionProvider>
  );
}

export default App;
