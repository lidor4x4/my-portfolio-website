import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate()
  const routeChange = () => {
    const path = "/noya-photos/design-sticker";
    navigate(path);
  }

  return (
    <div className='noya-photos-home-con'>
        <h1 className='noya-photos-home-page-title'><span className='noya-photos-page-title-con'>ל-מדבקה</span> להפוך כל תמונה </h1>
        <img className='noya-photos-home-page-img' src={require("../assets/noyaPhotosHomePagePhoto.png")} alt="Home Page"  />
        <button className='noya-photos-home-CTA-button' onClick={routeChange}>!בואו נתחיל</button>
    </div>
  )
}
