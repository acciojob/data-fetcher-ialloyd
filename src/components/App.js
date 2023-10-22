import React, { useEffect, useState } from "react";
import './../styles/App.css';
import axios from 'axios'

const App = () => {

  const [obj, setData] = useState({})

  useEffect(() => {

    axios.get('https://dummyjson.com/products')
      .then(data => setData({ ...data.data }))
      .catch(err => console.log(err))

  }, [])


  return (
    (!Object.keys(obj).length && <p>Loading.....</p>) || (Object.keys(obj).length && <div>
      <h1>Data Fetched from API</h1>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
    </div>)
  )
}

export default App;
