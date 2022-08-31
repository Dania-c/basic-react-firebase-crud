
import './App.css';
import {useState,useEffect} from "react";
import {db} from "./firebase-config";
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from "firebase/firestore";
function App() {
  const [users,setUsers]= useState([])
  const usersCollectionRef =collection(db,"users")

  // table's fields : name - email , age
  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [age,setAge]= useState(0)

 const createUser =async()=>{
await addDoc(usersCollectionRef,{name: name,email:email,age : Number(age)})
 } 

 const updateUser =async(id,age)=>{
  const singleUser=doc(db,"users",id)
  const newAge ={age: age + 1}
  await updateDoc(singleUser,newAge)
   } 
const deleteUser = async(id) =>{
  const singleUser=doc(db,"users",id)
  await deleteDoc(singleUser)

}

  useEffect(()=>{
const getUsers=async()=>{
const data = await getDocs(usersCollectionRef);
// console.log("data",data)
setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}
getUsers();
  },[users,usersCollectionRef])
  return (
    <div className="App">
      <div>
        <input placeholder="name" onChange={(e)=>{setName(e.target.value)}}/>
        <input placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="number" placeholder="age" onChange={(e)=>{setAge(e.target.value)}}/>
        <button onClick={createUser}>Add USer</button>
      </div>
      {users.map((user)=>{
        return <>
        <h3>name : {user.name}</h3>
        <h3>email : {user.email}</h3>
        <h3>age : {user.age} <span><button onClick={()=>updateUser(user.id,user.age)}><strong>+1</strong></button></span></h3>
        <button onClick={()=>{deleteUser(user.id)}}>Del</button>
        
        </>
      })}
    </div>
  );
}

export default App;
