import { config } from '../config'
const originStatic = config.SERVER_URL;

export const actualVersion = "0.1.0";

const Api ={
    control: {
        version: () =>  `${originStatic}/version`,
        verifyVersion: () =>  `${originStatic}/version/${actualVersion}`,
        verifyVersion: () =>  `https://brian9work.github.io/static/Api/version4.json`,
    },
    nearby: {
        stops: (latitude, longitude, distance) => {
            return `${originStatic}/nearby/v2?latitude=${latitude}&longitude=${longitude}&distance=${distance}`;
        },
        selectedStop: (idStop) => {
            return `${originStatic}/nearby/${idStop}`;
        }
    },
    transport: {
        getTransport : (idTransport) => {
            return `${originStatic}/transport/${idTransport}`;
        },
        getTransportBeetwenTwoStops : (idTransport, originStop, destinationStop) => {
            return `${originStatic}/transport?idTransport=${idTransport}&originStop=${originStop}&destinationStop=${destinationStop}`;
        },
        getRouteForFaculty: (originStop, destinationStop) => {
            return `${originStatic}/transport/routeForFaculty?originStop=${originStop}&destinationStop=${destinationStop}`;
        }
    },
    catalogs: {
        getFaculties: () => {
            return `${originStatic}/cat/faculty`;
        }
    },
    stopRoutes: {
        getStopRouteFromAndTo: (stopFrom, stopTo) => {
            return `${originStatic}/stoproute?stopFrom=${stopFrom}&stopTo=${stopTo}`;
        }
    },
}
export default Api;