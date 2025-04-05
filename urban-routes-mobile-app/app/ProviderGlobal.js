import { useState } from "react";
import { ContextGlobal } from "./ContextGlobal";

export default function ProviderGlobal ({ children }) {
   const endPoint = useState("http://3.144.96.83/api");

   return (
      <ContextGlobal.Provider value={{
         endPoint
      }}>
         {children}
      </ContextGlobal.Provider>
   );
};