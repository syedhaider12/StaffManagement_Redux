import { createReducer } from "@reduxjs/toolkit";




const intialState =[{
  uemail:"haniabbass44@yahoo.com",
  upassword:"123123123",
  
 
  
  
  
  
 
 }]
 const authUser = createReducer(intialState,{
  login:(state,action)=>{
    const{email,password}=action.payload;
    if(email&&password){
      const existingUser = state.find((user) => user.uemail === email&&user.upassword===password );
    if(existingUser){
      localStorage.setItem('email', existingUser.uemail);
     
    }else{
      
      console.log("wrong email or password")
    }
   
    }
   
    
  }
 
})

export default authUser
