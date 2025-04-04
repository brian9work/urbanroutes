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
        stops: (originStatic, latitude, longitude, distance) => {
            return `${originStatic}/nearby?latitude=${latitude}&longitude=${longitude}&distance=${distance}`;
        },
        selectedStop: (originStatic, idStop) => {
            return `${originStatic}/nearby/${idStop}`;
        }
    },
    transport: {
        getTransport : (originStatic, idTransport) => {
            return `${originStatic}/transport/${idTransport}`;
        },
        getTransportBeetwenTwoStops : (originStatic, idTransport, originStop, destinationStop) => {
            return `${originStatic}/transport?idTransport=${idTransport}&originStop=${originStop}&destinationStop=${destinationStop}`;
        }
    },
    catalogs: {
        getFaculties: (originStatic, ) => {
            return `${originStatic}/cat/faculty`;
        }
    },
    stopRoutes: {
        getStopRouteFromAndTo: (originStatic, stopFrom, stopTo) => {
            return `${originStatic}/sr?stopFrom=${stopFrom}&stopTo=${stopTo}`;
        }
    },
}
export default Api;