import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import DataProvider from "./context/DataProvider";

const App = () => {
  
  return (
    <DataProvider>
      <RouterProvider router={routes} />
    </DataProvider>
  );
};


export default App;
