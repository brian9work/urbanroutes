import { config } from '../config'
// const originStatic = config.SERVER_URL;

export const actualVersion = "0.1.0";

const Api ={
    control: {
        version: () =>  `${originStatic}/version`,
        verifyVersion: () =>  `${originStatic}/version/${actualVersion}`,
        verifyVersion: () =>  `https://brian9work.github.io/static/Api/version4.json`,
    },
    nearby: {
        stops: (originStatic="https://a417-3-144-96-83.ngrok-free.app/api", latitude, longitude, distance) => {
            return `${originStatic}/nearby?latitude=${latitude}&longitude=${longitude}&distance=${distance}`;
        },
        selectedStop: (originStatic="https://a417-3-144-96-83.ngrok-free.app/api", idStop) => {
            return `${originStatic}/nearby/${idStop}`;
        }
    },
    transport: {
        getTransport : (originStatic="https://a417-3-144-96-83.ngrok-free.app/api", idTransport) => {
            return `${originStatic}/transport/${idTransport}`;
        },
        getTransportBeetwenTwoStops : (originStatic="https://a417-3-144-96-83.ngrok-free.app/api", idTransport, originStop, destinationStop) => {
            return `${originStatic}/transport?idTransport=${idTransport}&originStop=${originStop}&destinationStop=${destinationStop}`;
        }
    },
    catalogs: {
        getFaculties: (originStatic="https://a417-3-144-96-83.ngrok-free.app/api", ) => {
            return `${originStatic}/cat/faculty`;
        }
    },
    stopRoutes: {
        getStopRouteFromAndTo: (originStatic="https://a417-3-144-96-83.ngrok-free.app/api", stopFrom, stopTo) => {
            return `${originStatic}/sr?stopFrom=${stopFrom}&stopTo=${stopTo}`;
        }
    },
}
export default Api;