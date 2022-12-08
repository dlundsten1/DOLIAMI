import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import boredApi from "../boredApi"
import Image from "./Image"

const Activity = () => {
  const { isLoading, error, data } = useQuery("activity", () =>
    boredApi.getActivity(), { refetchOnWindowFocus: false }
  )
  
if(data?.activity)
  return (
    <div>
      <h1>DOLIAMI</h1>
      <h2>{data?.activity}</h2>
      <Image activity={data?.activity}/>
      {/* <img className='App-logo'  src='https://i.imgur.com/4Q4Q4Q4.png' alt='DOLIAMI' /> */}
    </div>
  )
  return null
}

export default Activity
