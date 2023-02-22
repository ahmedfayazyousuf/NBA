import tick from '../images/tick.png'
import basketball from '../images/basketball.jpg'

const Success = () => {
    return(
        <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>
            
            <div style={{display:"flex", flexDirection:"column", width:"100%", height: "75vh", justifyContent:"center", alignItems:"center", flexWrap: 'wrap', textAlign: 'center'}}>
                <img style={{minWidth: '100px', maxWidth: '300px',}} src={tick} alt="tick"/>
                <h1 style-={{paddinRight: '50px', paddingLeft: '50px', marginBottom: '100px'}}>Your response has been recorded</h1>
                <h1 style-={{paddinRight: '50px', paddingLeft: '50px', marginTop: '-200px'}}>Thank You!</h1>
            </div>

            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "25vh", justifyContent:"center", alignItems:"center"}}>
                <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end', alignItems: 'end'}}>
                    <img style={{width: '110px', marginRight: '30px'}} src={basketball} alt="basketball"/>
                </div>
            </div>
        
        </div>
    )
}

export default Success;