import Logo from './booking.jpg';
// import { Link } from "react-router-dom";
// import firebase from '../../firebase';
// import '../All.css'; 
// import { useEffect, useState } from 'react';
// import {useLocation} from 'react-router-dom';

const Success = () => {
    // const [Users, setUsers] = useState([]);
    // const [singleDoc, setSingleDoc] = useState({});
    // const location = useLocation();
    
    // useEffect(() => {
    //     firebase.firestore().collection("Users").doc("8Bz1aKrijtXJMdj7n1mO").get().then((snapshot) => {
    //         if(snapshot){
    //             setSingleDoc(snapshot.data());
    //         }   
    //     });
    //     console.log(singleDoc)
    // },[]);

    // var date = location.state.date.slice(0,2)
    // var time = location.state.time.slice(7)

    // if( location.state.date === "9feb"){
    //     date = location.state.date.slice(0,1)
    // }

    // var area = location.state.area

    // if(area === "areaone"){
    //     area = "Area 1"
    // }
    // else{
    //     area = "Area 2"
    // }


    return(
        <div style={{height: '100vh', width: '100vw', backgroundImage: `url("wallpaper4.jpg")`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', margin: '0', padding: '0'}}>
            
            <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
                
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50%', width: '100%'}}>
                    <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'   }}>
                        <img src= {Logo} alt="Logo" style={{width: '350px', marginTop: '20px', marginRight: '20px'}}/>
                    </div>
                </div>

                <div style={{display: 'flex', alignItems: 'center', textAlign: 'center', flexDirection: 'column', height: '50%', width: '100%', marginTop: '50px'}}>
                    <h1 style={{fontSize: '20px', color: '#54B2E9', fontWeight: '500', marginBottom: '20px'}}>BOOKING DETAILS</h1>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '250px'}}>

                        {/* <table>
                            <tbody>
                                <tr>
                                    <th style={{textAlign: 'left', color: '#54B2E9'}}>NAME</th>
                                    <th style={{width: '40px', color: '#54B2E9'}}>:</th>
                                    <th style={{textAlign: 'left', color: '#54B2E9'}}>{location.state.name}</th>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>LOCATION</td>
                                    <td style={{width: '40px', color: '#54B2E9'}}>:</td>
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>{area}</td>
                                </tr>
                                <tr>  
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>DATE</td>
                                    <td style={{width: '40px', color: '#54B2E9'}}>:</td>
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>{date} FEB</td>
                                </tr>
                                <tr>
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>TIME</td>
                                    <td style={{width: '40px', color: '#54B2E9'}}>:</td>
                                    <td style={{textAlign: 'left', color: '#54B2E9'}}>{location.state.time}<span> PM</span></td>
                                </tr>
                            </tbody>
                        </table> */}

                        {/* <Link to={{pathname:`/`}}>               */}
                            <button className="grab"  style={{cursor: 'grab', width: '250px', padding: '5px', border: 'none', borderRadius: '10px', backgroundColor: '#54B2E9', color: 'white', fontSize: '25px', marginTop: '40px'}} variant="contained">RETURN</button>
                        {/* </Link> */}
                    </div>

                    
                </div>
            </div>
           
        </div>
    )
}

export default Success;