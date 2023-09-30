import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";




export default function useDataContext() {
  const context = useContext(DataContext);
  if (!context) throw new Error("DataContext was used outside the CitiesProvider");

  return context
}

