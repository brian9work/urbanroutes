import { useState } from "react";
import { ContextHome } from "./Context";

export default function Provider ({ children }) {
   const selectedMain = useState("NearbyStops");
   const nearbyStopsData = useState([]);
   const transportsForStopData = useState([]);
   const selectedIdStop = useState(0);
   const selectedIdtransport = useState(0);
   const infoOfTransport = useState({route:[]});
   const activeMenu = useState(true);
   const activeMenuSearch = useState(false);
   const selectedDestination = useState(0);

   return (
      <ContextHome.Provider value={{
         selectedMain,
         nearbyStopsData,
         transportsForStopData,
         selectedIdStop,
         selectedIdtransport,
         infoOfTransport,
         activeMenu,
         activeMenuSearch,
         selectedDestination,
      }}>
         {children}
      </ContextHome.Provider>
   );
};