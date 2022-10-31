import React, { useState } from "react";


const APIURL = "https://jsonplaceholder.typicode.com/users";
function App() {
 
   const [data, setData] = useState([])
   const [sorted, setSorted] = useState([])
   const [defaultdata, setDefaultData] = useState([])
   const [clicks, setClicks] = useState(1)



  const getUsers = () => {
    fetch(APIURL)
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
      setData(res)
      setSorted(res)
      setDefaultData(JSON.parse(JSON.stringify(res)))
    })
    .catch((err)=>{
      console.log("error",err)
    })
    //write code here
    //render the list of users
  }
  const sortList = () => {
   //ascending  
   if(clicks===1){
      data.sort((a,b)=>a.name.length-b.name.length)
      setSorted([...data])
      setClicks(2)
   }

   //descending
   if(clicks===2){
    data.sort((a,b)=>b.name.length-a.name.length)
    setSorted([...data])
    setClicks(3)
 }

 //normal data
 if(clicks===3){
  //we need normal default data
  setSorted([...defaultdata])
  setClicks(1)
}
      //write code here
      // sort the user list by name's length
      // on first click list will sorted in assending order
      // on second click list will be sorted in descending order
      // on third click default list will be rendered
      // on fourth click again start form step 1
  }
  
  return (
    <main>
      <h1>User List</h1>
      <div>
        <button onClick={getUsers}>Get Users</button>
        <button onClick={sortList}>Sort list by name's length</button>
      </div>
      <ul>
        {/*render the list of the users */}
        {
          sorted.map((el)=>{
            return(
              <li key={el.id}>
                {el.name}
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}

export default App;