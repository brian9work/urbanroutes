import { useContext, useState } from "react";
import ContextHome from "./Context";

export default function Provider({ children }) {
   const selectedMain = useState("NearbyStops");
   // const selectedMain = useState("RouteToFacilty");
   const nearbyStopsData = useState([]);
   const transportsForStopData = useState(["", ""]);
   const selectedStop = useState(
      {
         distance: 0,
         latitude: 19.41514082532041,
         longitude: -98.14024764753933,
         stopId: 1,
         stopImagen: "",
         stopName: "My location"
      }
   );

   const selectedStopSearchBeggin = useState({})
   const selectedStopSearchEnd = useState({})

   const selectedIdtransport = useState(0);
   const infoOfTransport = useState({ route: [] });
   const activeMenu = useState(true);
   const activeMenuSearch = useState(false);
   const selectedDestination = useState(0);
   const facultiesData = useState([]);

   const originLocation = useState({
      latitude: 19.41514082532041,
      longitude: -98.14024764753933,
      distance: 500,
      accuracy: 0,
   })

   const location = useState({
      latitude: 19.41514082532041,
      longitude: -98.14024764753933,
      distance: 500,
      accuracy: 0,
   })

   const facultySelected = useState({
      id: 0,
      name: "Seleccionar Facultad",
      latitude: 0,
      longitude: 0,
      distance: 0,
   })

   const notificationValue = useState({
      value: false,
      type: "success",
      message: "Este es un texto de prueba de una notificacion"
   })

   const notificationValueChangue = (message = "Esperando mensaje", type = "") => {
      notificationValue[1]({ value: true, message: message, type: type })
      setTimeout(() => {
         notificationValue[1]({ value: false, message: message, type: type })
      }, 10000)
   }

   return (
      <ContextHome.Provider value={{
         selectedMain,
         nearbyStopsData,
         transportsForStopData,
         selectedStop,
         selectedIdtransport,
         infoOfTransport,
         activeMenu,
         activeMenuSearch,
         selectedDestination,
         facultiesData,

         selectedStopSearchBeggin,
         selectedStopSearchEnd,
         
         originLocation,
         location,

         notificationValue,
         notificationValueChangue,

         facultySelected
      }}>
         {children}
      </ContextHome.Provider>
   );
};