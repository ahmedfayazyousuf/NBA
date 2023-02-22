import tick from '../images/tick.png'
import basketball from '../images/basketball.jpg'

const Success = () => {
    return(
        <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>
            
            <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100%", justifyContent:"center", alignItems:"center", flexWrap: 'wrap', textAlign: 'center'}}>
                <img style={{minWidth: '100px', maxWidth: '300px'}} src={tick} alt="tick"/>
                <h1 style={{paddingRight: '50px', paddingLeft: '50px', marginBottom: '-10px', color: 'white'}}>Your response has been recorded</h1>
                <h1 style={{paddingRight: '50px', paddingLeft: '50px', color: 'red'}}>Thank You!</h1>
            </div>
        
        </div>
    )
}

export default Success;