import React from 'react'
import "../../style/home/Home.scss"
import Navbar from '../../components/navbar/Navbar-screen'
import Sidebar_pannel from '../../components/sidebar/Sidebar_pannel'
const Home = () => {
  return (
    <div className='home-head'>
      <Sidebar_pannel/>
      <div className="homeContainer">Container</div>
    </div>
  )
}
export default Home
