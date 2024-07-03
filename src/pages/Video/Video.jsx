import { useParams } from 'react-router-dom'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import './Video.css'

const Video = () => {

  const {videoId, categoryId} = useParams()
  return (
    <div className='player-container'>
      <PlayVideo videoId={videoId} categoryId={categoryId} />
      <Recommended categoryId={categoryId} />
    </div>
  )
}

export default Video