import { useState } from "react";
import { ContextGlobal } from "./ContextGlobal";

export default function ProviderGlobal ({ children }) {
   const distance = useState("500");
   const endPoint = useState("https://api.urbanroutes.com.mx/api/");

   return (
      <ContextGlobal.Provider value={{
         distance, endPoint
      }}>
         {children}
      </ContextGlobal.Provider>
   );
};