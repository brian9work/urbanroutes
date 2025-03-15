import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Error from '../screens/version/Error';
import Version from '../screens/version/Version';
import Loading from '../screens/version/Loading';
import GET from '../hooks/GET';
import Api from '../services/api';

export default function index() {
  const [response , setResponse] = useState(null)
  const [loading , setLoading] = useState(true)

  const verifyVersion = async () => {
      const response = await GET(Api.control.verifyVersion(), "json")

      if (!response) {
          console.warn("Error al verificar la versión.")
          setResponse([])
          setLoading(true)
      }

      setResponse(response)
      setLoading(true)
  }

  useEffect(() => {
      verifyVersion()
  }, []);

  return (
  <View>
      { loading ? (
          !response ? (
              <Error />
            ) : (
                //   <Version res={response} />
                <Error />
            //   <Loading />
          )
      ) : (
          <Loading />
      )}
  </View>
)
}