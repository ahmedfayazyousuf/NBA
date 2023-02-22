// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../../firebase';
import '../images/All.css';
import nbalogo from '../images/nba.png'
// import GetReady from '../getready.png';
// import { useParams } from "react-router-dom";
import {useRef} from 'react';
// import axios from "axios";
// import { Link } from "react-router-dom";
// import {useLocation} from 'react-router-dom';

const Registration = () =>{
    // const [numberr, setNumberr] = useState(false);
    const navigate = useNavigate();
    // const location = useLocation();
    const buttonRef = useRef(null);

    // const [count, setCount] = useState(0);
    // const [emailB, setEmailB] = useState(false);
    // const [select, setSelect] = useState('')

    // function onlyOnetwo(e) {
    //     var checkm = document.getElementById('checkmd');
    //     var checkf = document.getElementById('checkfd');
    //     // checkm.checked = !checkm.checked 
    //     // checkf.checked = !checkf.checked 
    //     // console.log(checkbox)

    //     if(e === 'm'){
    //         console.log("lol")
            
    //         checkf.checked = false
    //         setSelect("Yes")
            
    //         // setUser({...user, [firstname]:value})
    //     }

    //     if(e === 'f'){
    //         console.log("lil")
            
    //         checkm.checked = false
    //         setSelect("No")

    //         // setUser({...user, [firstname]:value})
    //     }
    // }
    // function HandleMap() {
    //     if(location.state.date === '9feb') {
    //         navigate(`/${location.state.date}`)
    //     }

    //     else{
    //         navigate(`/Date/${location.state.date}`)
    //     }
    // }

    function HandleSubmit(){
        console.log('2');

        // buttonRef.current.disabled = true;
        const Users = firebase.firestore().collection("Users");
        const Email = document.getElementById("email").value;
        const Number = document.getElementById("no").value;
        const Name = document.getElementById("Name").value;
        const Msg = document.getElementById("message").value;

       
        console.log(Email)

        if(Name === ''){
            // buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "PLEASE ENTER YOUR NAME"
            return;
        }

        if (document.getElementById("no").value === "" ||  document.getElementById("no").value.slice(0,3) != 971 ){
            console.log('Hello')
            // buttonRef.current.disabled = false;
            document.getElementById('error').innerHTML = "PLEASE ENTER A VALID PHONE NUMBER"
            return;
            
        }



        Users.add({
            Name:Name,
            Email:Email,
            Number:Number,
            Message: Msg,
            time: firebase.firestore.FieldValue.serverTimestamp()

        }).then(()=>{
            navigate('/Success')
        })
    }
    //         var area = location.state.time.slice(0,7)
    //         var time = location.state.time.slice(7)

    //         const kites = firebase.firestore().collection("Kites").doc(`${location.state.date}`);
    //         console.log(location.state.date, time)

    //         const name = document.getElementById("Name").value

    //         const number = document.getElementById("no").value

    //         var date = location.state.date;



    //         if(area === 'areaone'){

    //             if(select === "Yes"){
    //                 var timeslot = kites.collection("Areas").doc("Area1").collection('timeslots').doc(`${time} PM`)
    //                 if(time === '10:30' || time === '11:30'){
    //                     timeslot = kites.collection("Areas").doc("Area1").collection('timeslots').doc(`${time} AM`)
    //                 }

    //                 timeslot.get().then(async (doc)=>{
    //                     console.log(doc.data())
    //                     var data = doc.data() 
    
    //                     if(data.kites <= 0){
    //                         if(data.slots <=0){
    //                             return;
    //                         }
    //                     }
    
    //                     if(data.kites<=0){
    //                         await timeslot.update({
    //                             slots: firebase.firestore.FieldValue.increment(-1)
    //                         });
    //                         axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
    //                         name, date, time, number
    //                         })
    //                         return;
    //                     }
    
    //                     await timeslot.update({
    //                         kites: firebase.firestore.FieldValue.increment(-1),
    //                         slots: firebase.firestore.FieldValue.increment(-1)
    //                     });
    //                     axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
    //                         name, date, time, number
    //                         })
                        
    //                 })
    //             }else{
    //                 var timeslot = kites.collection("Areas").doc("Area1").collection('timeslots').doc(`${time} PM`)
    //                 if(time === '10:30' || time === '11:30'){
    //                     timeslot = kites.collection("Areas").doc("Area1").collection('timeslots').doc(`${time} AM`)
    //                 }
    //             timeslot.get().then(async (doc)=>{
    //                 console.log(doc.data())
    //                 var data = doc.data() 

    //                     if(data.slots <=0){
    //                         return;
    //                     }

    //                 await timeslot.update({
    //                     slots: firebase.firestore.FieldValue.increment(-1)
    //                 });
    //                 axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
    //                     name, date, time, number
    //                     })
                    
    //             })
    //             }
    //         }

    //         if(area === 'areatwo'){

    //             if(select === "Yes"){
    //                 var timeslot = kites.collection("Areas").doc("Area2").collection('timeslots').doc(`${time}:00 PM`)

    //                 if(time === '11'){
    //                     timeslot = kites.collection("Areas").doc("Area2").collection('timeslots').doc(`${time}:00 AM`)
    //                 }

    //                 timeslot.get().then(async (doc)=>{
    //                     console.log(doc.data())
    //                     var data = doc.data() 
    
    //                     if(data.kites <= 0){
    //                         if(data.slots <=0){
    //                             return;
    //                         }
    //                     }
    //                     if(data.kites<=0){
    //                         await timeslot.update({
    //                             slots: firebase.firestore.FieldValue.increment(-1)
    //                         });
    //                         axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
    //                         name, date, time, number
    //                         })
    //                         return;
    //                     }
    
    //                     await timeslot.update({
    //                         kites: firebase.firestore.FieldValue.increment(-1),
    //                         slots: firebase.firestore.FieldValue.increment(-1)
    //                     });
    //                     axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
    //                         name, date, time, number
    //                         })
                        
    //                 })
    //             }

                

    //             else{
    //                 var timeslot = kites.collection("Areas").doc("Area2").collection('timeslots').doc(`${time}:00 PM`)
    //                 if(time === '11'){
    //                     timeslot = kites.collection("Areas").doc("Area2").collection('timeslots').doc(`${time}:00 AM`)
    //                 }
    //             timeslot.get().then(async (doc)=>{
    //                 console.log(doc.data())
    //                 var data = doc.data() 

    //                     if(data.slots <=0){
    //                         return;
    //                     }


    //                 await timeslot.update({
    //                     slots: firebase.firestore.FieldValue.increment(-1)
    //                 });
    //                 axios.post("https://kitefestivalserver.azurewebsites.net/send_sms", {
    //                     name, date, time, number
    //                 })
                    
    //             })
    //             }
                
    //         }

            
    //         console.log("Document written with ID: ", docRef.id);
    //         navigate("/Success",{state:{uid:docRef.id,count:0, name:name, area:area, date:date, time:time}});
    //     })
    //     .catch(function(error) {
    //         console.error("Error adding document: ", error);
    //     });  


        
    // }
    
    // var date = location.state.date.slice(0,2)
    // var time = location.state.time.slice(7)

    // if( location.state.date === "9feb"){
    //     date = location.state.date.slice(0,1)
    // }


    
    return( 
            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', width: '50vw', gap:'10px', alignItems: 'center', justifyContent:'center'}}>

                    <div style={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <img style={{width: '60vw'}} src={nbalogo} alt="THHLogo"/>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%', marginTop: '20px'}}>
                        <input type="text" placeholder='NAME' id="Name" style={{background:"transparent", borderRadius: '10px', border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px'}}/> 
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%'}}>
                        <input type="email" placeholder='EMAIL' id='email' style={{background:"transparent", borderRadius: '10px', border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px' }} />
                    </div>


                    <div style={{width:"100%", display: 'flex', flexDirection: 'column'}}>
                        <div  style={{display: 'flex', flexDirection: 'column', justifyContent: 'right', width: '100%'}}>
                            <input type="number" placeholder='MOBILE (971 xx xxx xxxx)' id='no' style={{background:"transparent", borderRadius: '10px', border:"1px solid black", marginBottom:'15px', width:"100%", height:'27px', color:"black", paddingLeft: '10px', paddingRight: '10px' }} />
                        </div>
                    </div>

                    <div style={{width:"100%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <textarea className="form-control" type="textarea" name="message" id="message" rows='3' placeholder="For us, the answer is Yes. Now, what's your question?" required style={{height: '115px', marginBottom: '0px', width: '100%', border: '1px solid black', borderRadius: '10px', justifyContent: 'center', alignItems: 'center'}}/>
                    </div>

                    <div>
                        <p id='error' style={{color:"red", marginBottom: '5px'}}>  </p>
                    </div>


                    <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'center'}}>        
                        <button style={{}} variant="contained">SUBMIT</button>
                    </div>

                </div>
                
            </div>
    )
}

export default Registration;
