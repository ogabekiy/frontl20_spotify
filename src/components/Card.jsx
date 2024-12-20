import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { set_action, set_audio, set_currentTime } from "../slices/songSlice"
import { useDispatch, useSelector } from 'react-redux'

const Card = ({ card, circle }) => {
  const state = useSelector(state => state.song)
  const dispatch = useDispatch()

  const [play, setPlay] = useState(false)

  const playHandler = () => {
    const randomMusic = state.musics[Math.random() * state.musics.length | 0]
    const ownMusic = state.musics.filter(m => m.id == card.id)
    const randomOwn = ownMusic[Math.random() * ownMusic.length | 0]
    if (play) {
      if (state.audio_id == card.id) {
        dispatch(set_action("pause"))
      } else {
        dispatch(set_audio({ id: card.id, audio: randomOwn || randomMusic }))
        dispatch(set_action("play"))
      }
    } else {
      if (state.audio_id != card.id) {
        dispatch(set_currentTime(0))
      }
      dispatch(set_audio({ id: card.id, audio: randomOwn || randomMusic }))
      dispatch(set_action("play"))
    }
  }
  useEffect(() => {
    if (state.action == "play") {
      setPlay(true)
    } else {
      setPlay(false)
    }
  }, [state.action])

  return (
    <div className='w-full card relative text-white hover:bg-gradient-to-t mt-2 p-3 rounded-lg from-[#2d2d2d] to-transparent'>
      <button onClick={playHandler} className={`bg-[#1ED760] hover:bg-[#3BE477] hover:!scale-[105%] transform card-play w-12 rounded-full text-lg absolute top-1/2 end-4 h-12 justify-center items-center ${play && state.audio_id == card.id ? "flex" : "hidden"}`}>
        {play && state.audio_id == card.id ? <i className='fa fa-pause text-xl text-black'></i> : <i className='fa fa-play text-black'></i>}
      </button>
      <Link to={"/"} className={`w-full overflow-hidden`}>
        <img className={`aspect-square ${circle ? "rounded-full" : "rounded-lg"} shadow-xl shadow-[#00000050] w-full object-cover`} src={card.images[0].url} alt={card.title} />
      </Link>
      <Link to={'/'} className='font-semibold mt-2 block hover:underline'>
        {card.name}
      </Link>
      <p className='text-gray-400 text-sm capitalize'>{card.type}</p>
    </div>
  )
}

export default Card