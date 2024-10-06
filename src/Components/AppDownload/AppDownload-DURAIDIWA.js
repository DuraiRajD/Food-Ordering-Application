import React from "react"
import './AppDownload.css'
import { assets } from "../../assets/assets"

const AppDownload=()=>{
    return(
<div className="app-Download" id="app-Download">
<p>For Better Experience Download <br/> Tomato App</p> 
<div className="app-Download-platforms">
    <img src={assets.play_store} alt=""></img>
    <img src={assets.app_store} alt=""></img>
</div>
</div>

    )
}
export default AppDownload
