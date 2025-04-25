import { useState } from "react";
import { ContextGlobal } from "./ContextGlobal";

export default function ProviderGlobal ({ children }) {
   const globalState = useState("");

   return (
      <ContextGlobal.Provider value={{
         globalState
      }}>
         {children}
      </ContextGlobal.Provider>
   );
};