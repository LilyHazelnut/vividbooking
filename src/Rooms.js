import { useState } from 'react'
import NavBar from './NavBar'
import './Rooms.css'
import  roomImage from './Room1.jpg'
import  roomImage2 from './Room2.jpg'
import { useHistory } from 'react-router-dom'

import Modal from 'react-modal'

function Rooms (){

    const history = useHistory();
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    
    function inspectRoom(){
        setmodalIsOpen(true);
        <Modal isOpen = {modalIsOpen} onRequestClose = {() => setmodalIsOpen(false)} >
            
        </Modal>
    }
    
    return(
        <div>
            <NavBar />
            <div className ='show-rooms'>
                <img src = {roomImage} className = 'image-room'></img>
                <div className ='room-detail'>
                    <ul>
                        <li>
                            <p> Family Room</p>
                        </li>
                        <li>
                            <p> Living Room with city view</p>
                        </li>
                        <li>
                            <p> TV + Refrigerator</p>
                        </li>
                    </ul>
                    <div className = 'inspect-room' onClick = {inspectRoom}>
                        <p> Inspect </p>
                    </div>
                </div>
            </div>
            <div className ='show-rooms'>
                <img src = {roomImage2} className = 'image-room'></img>
                <div className ='room-detail'>
                    <ul>
                        <li>
                            <p> Couple Room</p>
                        </li>
                        <li>
                            <p> kitchen built-in</p>
                        </li>
                        <li>
                            <p> TV + Refrigerator</p>
                        </li>
                    </ul>
                    <div className = 'inspect-room' onClick = {inspectRoom}>
                        <p> Inspect </p>
                    </div>
                </div>
            </div>

            <div className = 'bottombar'>
            <h3>
              @VIVIDBOOKING co.ltd
            </h3>
          </div>
        </div>
    )
}

export default Rooms