import React, { useState } from 'react'
import './Home.css'
import Header from '../components/Header/Header'
import Menu from '../components/exploremenu/menu'
import Fooddisplay from '../components/Fooddisplay/Fooddisplay'
import Appdownload from '../components/Appdownload/Appdownload'
const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <Fooddisplay category={category}></Fooddisplay>
      <Appdownload></Appdownload>
    </div>
  )
}

export default Home
