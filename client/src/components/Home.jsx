import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons' 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


function Home(){
    return <div className="mocha-homepage">
    <div className ="mocha-title">
        <h1 className="mocha-big">MOCHA</h1>
    </div>
    <div className="mocha-start-options">
        <h3 className="mocha-start-div-space">ALSO AVAILABLE ON</h3>
        <button className="btn btn-dark mocha-start-div-space">Google Play <FontAwesomeIcon icon={["fab", "google-play"]} /></button>
        <h2 className="mocha-start-div-space">SCHEDULING HAS NEVER BEEN THIS EASY</h2>
        <a href="/addlist"><button className="mocha-start-div-space mocha-start-buttons btn btn-light">ADD USERS</button></a>
        <a href="/lists"><button className="mocha-start-div-space mocha-start-buttons btn btn-light">MAKE SCHEDULES</button></a>
    </div>
    <div className="mocha-bottom-section"><h1 >READY?</h1>
    <a href="/lists"><button type="button" className="mocha-start-div-space btn btn-outline-light absolutely-button">ABSOLUTELY</button></a></div>
    <div className="mocha-ending">
        <h2>Any questions?</h2>
        <p>Forward any inquiries to our website</p>
    </div>
    </div>
}

export default Home; 