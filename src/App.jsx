import React, { useEffect, useRef } from 'react'
import { Home, Login, Navbar, Player } from './components'
import { Route, Routes } from 'react-router-dom'
import useFetch from './hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { set_artists } from './slices/songSlice'


const App = () => {
  const musicRef = useRef(null)
  const state = useSelector(state => state.song)
  const dispatch = useDispatch()

  useEffect(() => {
    if (state.audio) {
      musicRef.current.src = state.audio.src
      musicRef.current.play()
    } else {
      musicRef.current.src = ""
    }
  }, [state.audio_id])

  useEffect(() => {
    switch (state.action) {
      case "play":
        musicRef.current.play()
        break;
      case "pause":
        musicRef.current.pause()
        break;
    }
  }, [state.action])
  useEffect(() => {
    musicRef.current.volume = state.audio_volume / 100
  }, [state.audio_volume])

  // const artists = ["1Xyo4u8uXC1ZmMpatF05PJ", "6qqNVTkY8uBg9cP3Jd7DAH", "774od4b04zDMQMGxrJDeuB", "1HY2Jd0NmPuamShAr6KMms", "0hmUwzWBrPHpGWGrYH05c3", "2ISiyx4DLCMAMBCvPesCoq", "7as5DY4Rz9jac9tgoTrj9H", "3eVa5w3URK5duf6eyVDbu9", "6OTMjaRQ9kxdwoPRYTmyOM", "7dGJo4pcD2V6oG8kP0tJRR", "5VKufGMVAZ6fs111xYNKnU", "00FQb4jTyendYWaN8pK0wa", "4dpARuHxo51G3z768sgnrY", "1ZwdS5xdxEREPySFridCfh", "3YQKmKGau1PzlVlkL1iodx"]
  const artists = ["0Y5tJX1MQlPlqiwlOH1tJY", "6qqNVTkY8uBg9cP3Jd7DAH","6l3HvQ5sa6mXTsMTB19rO5", "3TVXtAsR1Inumwj472S9r4", "2YZyLoL8N0Wb9xBt1NhZWg", "699OTQXzgjhIYAHMy9RyPD", "1URnnhqYAYcrqrcwql10ft", "1RyvyyTE3xzB2ZywiAwp0i", "3qiHUAX7zY4Qnjx8TNUzVx", "0iEtIxbK0KxaSlF7G42ZOp", "2hlmm7s2ICUX0LVIhVFlZQ", "3gBZUcNeVumkeeJ19CY2sX", "00FQb4jTyendYWaN8pK0wa", "1ZwdS5xdxEREPySFridCfh", "5H4yInM5zmHqpKIoMNAx4r"]

  const token = import.meta.env.VITE_TOKEN;
  const { data } = useFetch(`https://api.spotify.com/v1/artists?ids=${artists.join(",")}`, { "Authorization": `Bearer ${token}` })

  useEffect(() => {
    dispatch(set_artists(data?.artists || []))
  }, [data])

  useEffect(() => {
    musicRef.current.currentTime = state.currentTime
  }, [state.currentTime])

  return (
    <>
      <audio controls ref={musicRef} src={""} className='absolute w-0 h-0 opacity-0'></audio>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Login />} path='/login' />
      </Routes>
      <Player />
    </>
  )
}

export default App