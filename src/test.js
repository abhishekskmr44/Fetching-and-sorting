import React, { useState } from "react";




const APIURL = "https://jsonplaceholder.typicode.com/users";
function App() {

const[data,setData] = useState([])
const[sortdata,setSortData] = useState([])
const[usualdata,setUsualData] = useState([])
const[count,setCount] = useState(1)

  const getUsers = () => {
    fetch(APIURL)
    .then((res)=>res.json())
    .then((res)=>{
      setData(res)
      setSortData(res)
      setUsualData(JSON.parse(JSON.stringify(res)))
    })
    //write code here
    //render the list of users
  }
  const sortList = () => {

    if(count===1){
        data.sort((a,b)=>a.name.length-b.name.length)
        setSortData([...data]) 
        setCount(2)
    }
    if(count===2){
      data.sort((a,b)=>b.name.length-a.name.length)
      setSortData([...data]) 
      setCount(3)
  }
  if(count===3){
    data.sort((a,b)=>a.name.length-b.name.length)
    setSortData([...usualdata])
    setCount(1) 
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
        sortdata.map((el)=>{
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