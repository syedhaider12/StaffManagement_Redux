import { createReducer } from "@reduxjs/toolkit";

const intialState =[{
  id:'1',
  firstName:"Syed",
  lastName:"ali",
  userName:"shah",
  email:"Haider@gmail.com",
  password:"132Asss",


}]

const users = createReducer(intialState,{

  addUser:(state,action)=>{

    const{firstName,lastName,userName,email,password}=action.payload
    if(firstName&&lastName&&userName&&email&&password){
      if(password.length>6){
        const existUser = state.find((user) => user.userName===userName||user.email===email );
        if(!existUser){

          state =state.push(action.payload);
        }else{
          console.log("username or email already exist");
        }
      }else{
        console.log("Password must b greater than 6 digits");
      }

    }else{
      console.log('all field required')
    }
  
  },
  deleteUse:(state,action)=>{
    const{id}=action.payload;
    const findId=state.find(value=>value.id===id

    );
    if(findId){
      return state.filter(value=>value.id !==id

      );
    }
   
  },
  editUser:(state,action)=>{
    const{id,firstName,lastName,userName,email,password}=action.payload
    const existingUser = state.find((user) => user.id === id);
    if(existingUser){
      if(firstName&&lastName&&userName&&email&&password){
        existingUser.firstName=firstName;
        existingUser.lastName=lastName;
        existingUser.userName=userName;
        existingUser.email=email;
        existingUser.password=password;

      }
    }
    

  }


});



export default  users