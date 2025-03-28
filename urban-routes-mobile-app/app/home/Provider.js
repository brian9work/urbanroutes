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

   const notificationValue= useState({
      value: false,
      type: "success",
      message : "Este es un texto de prueba de una notificacion"
   })

   const notificationValueChangue = (message="Esperando mensaje", type="") => {
      notificationValue[1]({ value: true, message : message, type: type })
      setTimeout(() => {
         notificationValue[1]({ value: false, message : message, type: type })
      }, 10000)
   }

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

         notificationValue,
         notificationValueChangue
      }}>
         {children}
      </ContextHome.Provider>
   );
};