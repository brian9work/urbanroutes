import { useContext, useState } from "react";
import ContextAuth from "./Context";

export default function Provider({ children }) {
   const authState = useState("NearbyStops");

   return (
      <ContextAuth.Provider value={{
         authState,
      }}>
         {children}
      </ContextAuth.Provider>
   );
};