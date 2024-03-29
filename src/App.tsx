import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import DataProvider from "./context/DataProvider";
import { Toaster } from "react-hot-toast";

const App = () => {
  
  return (
    <DataProvider>
      <RouterProvider router={routes} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration:5000
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor:"#fff",
            color:"#333",
          }
        }}
      />
    </DataProvider>
  );
};


export default App;
