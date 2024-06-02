import './Form2.css'
import './App.css';
import React, { useState } from 'react';
import Nmae from './Nmae';

function App() {
  const [isvisible,setIsvisible]=useState(false);
  const [datas,setDatas]=useState({});
  function validate(){
    if(/[a-zA-Z]{5}/.test(datas.firstname)){
      if(/^[a-zA-Z]+$/.test(datas.laststname)){
        if(/^[a-zA-Z]+$/.test(datas.middlename)){
          if(datas.choose=="ECE" || datas.choose=="EEE" || datas.choose=="CSE"){
            if(datas.gender=="male" || datas.gender=="female" || datas.gender=="others"){
              
                if(/^[6-9][0-9]{9}$/.test(datas.phone)){
                 
                    if(/[a-z0-9]+@[a-z0-9]+[.][com]{3}/.test(datas.mail)){
                      if(/[A-Z][a-z]+[@#$&]?[0-9]?/.test(datas.password)){
                        if(/[A-Z][a-z]+[@#$&]?[0-9]?/.test(datas.correct)){
                        if(datas.password===datas.correct){
                  return true;
      }
      else{
        alert("password did not match");

      }}
      else{
        alert("enter the retype password in correct method. it may contains atleast 1 upper case, 1 lower case, 1 symbol like @,$,&,# and 1 number");

      }}
      else{
        alert("enter the password in correct method.  it may contains atleast 1 upper case, 1 lower case, 1 symbol like @,$,&,# and 1 number");

      }}
      else{
        alert("enter the valid mail");
      } }
     
      else{
        alert("enter valid mobile number");
      }}
      else{
        alert("select gender");
      }}
    else{
      alert("choose any course");
    }}}}
   else{
      alert("name is invalid");
      return false;
    }
   
    
  }

const verifyData=(event)=>{
    const name=event.target.name;
   const value=event.target.value;
   setDatas(values=>({...values,[name]:value}));
 
   }

 const submitForm=(event)=>{
event.preventDefault();
if(validate(true)){
  alert("successfully registered");
setIsvisible(true);
}
 }
 

 
 
return (
    <div>
     {!isvisible?(
      <form onSubmit={submitForm}>
      <center><h1>REGISTERATION FORM</h1></center>
      First name:<br></br>  
      <input type="text" placeholder="First name" id="name" required name="firstname" value={datas.firstname} onChange={verifyData}></input><br></br>
      Middle name:<br></br>  
      <input type="text" placeholder="Middle name" id="name" required name="middlename" value={datas.middlename} onChange={verifyData}></input><br></br>
      Last name:<br></br>  
      <input type="text" placeholder="Last name" id="name"  required name="lastname" value={datas.lastname} onChange={verifyData}></input><br></br>
      course:
      <select id="name"  name="choose" required value={datas.choose} onChange={verifyData} >
        <option readonly>course</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
        <option value="CSE">CSE</option>
      </select><br></br>
      Gender: <br></br><br></br>
      <input type="radio" name="gender"  value="male" onChange={verifyData}></input>Male
      <input type="radio" name="gender" value="female" onChange={verifyData}></input>Female
      <input type="radio" name="gender" value="others" onChange={verifyData} ></input>Others<br></br><br></br>
      Phone no:<br></br>
      <input type="text" value="+91" id="name" readOnly name="code" onChange={verifyData}></input><br></br>
      <input type="text" placeholder="Mobile no" required id="name" name="phone" value={datas.phone} onChange={verifyData}></input><br></br>
      Address:<br></br>
      <input type="text" placeholder="enter address" required id="name1" name="address" value={datas.address} onChange={verifyData}></input><br></br>
      Email:<br></br>
      <input type="text" placeholder="mail id"  required id="name" name="mail" value={datas.mail} onChange={verifyData}></input><br></br>
      Password:<br></br>
      <input type="text" placeholder="password" required id="name"  name="password" value={datas.password} onChange={verifyData}></input><br></br>
     
      RE-Type password:<br></br>
      <input type="text" placeholder="retype password" required id="name"  name="correct" value={datas.correct} onChange={verifyData}></input><br></br>
      <input type="submit" id="name2"></input>


      

     

      </form>):(
      <div class="property">
        <h2>FORM DETAILS</h2>
      <Nmae datas={datas}/>
      </div>)}
    </div>
   
  );
}

export default App;
