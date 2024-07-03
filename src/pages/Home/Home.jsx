import { useState } from 'react'
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Home.css'

const Home = ({sideBar}) => {

  const [ category, setCategory] = useState(0)
  return (
    <>
      <Sidebar sideBar={sideBar} category={category} setCategory={setCategory} />
      <div className={`container ${sideBar? "":'large-container'}`}>
        <Feed category={category} />
      </div>
    </>
  )
}

export default Home