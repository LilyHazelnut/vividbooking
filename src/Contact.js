import NavBar from './NavBar'
import './Contact.css'

function Contact (){
    return(
        <div>
            <NavBar />
            <div>
                <h2 className ='ofcontact'>
                    Treebongkot Daengkla 6022790172 ( SIIT Bangkadi Branch )
                </h2>
                <h2 className ='ofcontact'>
                    Chayin Srisuk 6022771156 ( SIIT Bangkadi Branch )
                </h2>
                <h2 className = 'last-h2'>
                    Chaiwut Pokhakul 6022792392 ( SIIT Bangkadi Branch )
                </h2>
            </div>
            
            <div className = 'bottombar-contact'>
                <h3> @VIVIDBOOKING co.ltd </h3>
            </div>
        </div>
    )
}

export default Contact