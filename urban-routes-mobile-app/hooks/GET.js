export default async function GET (url, type = "text") {
    if (!url) return console.error("URL no válida")

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            mode: 'cors',
        })
            .catch(error => {
                console.warn("Error de conexión: No se pudo establecer conexión con el servidor.")
                console.error(error)
            }
            )

        if (!response.ok) {
            console.warn(`HTTP error! status: ${response.status}\n${response.text()}`)

            if (response.status === 400)
                console.error("400 - Bad Request: Verifica los datos enviados.");
            if (response.status === 401)
                console.error("401 - Unauthorized: No tienes permisos.");
            if (response.status === 403)
                console.error("403 - Forbidden: Acceso denegado.");
            if (response.status === 404)
                console.error("404 - Not Found: El recurso no existe.");
            if (response.status === 500)
                console.error("500 - Internal Server Error: Problema en el servidor.");
            else console.error("Error desconocido.")
            return false
        }

        if (type === "text") {
            return await response.text()
        }
        if (type === "json") {
            const res = await response.json()

            if (res.length === 0) {
                return []
            }

            return res
        }

        return response

    } catch (error) {
        const message = error.message
        if (message.includes("Failed to fetch")) {
            console.warn("Error de conexión: No se pudo establecer conexión con el servidor.")
        }
        if (message.includes("ERR_CONNECTION_REFUSED")) {
            console.warn("Error de conexión: El servidor no está disponible.")
        }
        if (message.includes("NetworkError")) {
            console.warn("Error de red: Verifica tu conexión a internet.")
        }
        if (message.includes("SyntaxError")) {
            console.warn("Error de sintaxis: Verifica la respuesta del servidor.")
        }
        if (message.includes("CORS")) {
            console.warn("Error de conexión o de CORS. Verifica la configuración del servidor.")
        }
        if (message.includes("Unexpected token")) {
            console.warn("Error de sintaxis: Verifica la respuesta del servidor.")
        }

        console.error(message)

    }

}