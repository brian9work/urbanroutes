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
            return `${originStatic}/nearby?latitude=${latitude}&longitude=${longitude}&distance=${distance}`;
        },
        selectedStop: (idStop) => {
            return `${originStatic}/nearby/${idStop}`;
        }
    },
    transport: {
        getTransport : (idTransport) => {
            return `${originStatic}/transport/${idTransport}`;
        }
    },
    catalogs: {
        getFaculties: () => {
            return `${originStatic}/cat/faculty`;
        }
    }
}
export default Api;