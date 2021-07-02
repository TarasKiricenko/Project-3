import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactMapGL, { Marker } from 'react-map-gl'

const Maptwo = () => {

  const [myData, setMyData] = useState([])
  const [popup, setPopup] = useState(null)
  console.log(popup)
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/workspaces')
      setMyData(data)
    }
    getData()
  }, [])
  console.log(myData)

  const [viewport, setViewport] = useState({
    latitude: 52.515,
    longitude: -0.078,
    zoom: 4,
  })

  return (
    <>
      <div className="map-container"> 
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          height='100%'
          width='100%'
          mapStyle='mapbox://styles/mapbox/streets-v11'
          {...viewport}
          //   latitude={-51.550320}
          //   longitude={-0.108110}
          //   zoom={10}
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {myData.map(iter => {
            return (<Marker key={iter._id} latitude={parseFloat(iter.lat)} longitude={parseFloat(iter.long)}>
              <span onClick={() => setPopup(location)}>
                {'😜'}
              </span>
                
                
            </Marker>)
          })}
          {/* <Marker latitude={-51.550320} longitude={-0.108110}>
        
          </Marker> */}
        </ReactMapGL>
        {/* {myData.map(iter => <h1 key={iter._id}>{(parseFloat(iter.long))}& {iter.lat}</h1>)} */}
      </div>
    </>
  )
}
export default Maptwo