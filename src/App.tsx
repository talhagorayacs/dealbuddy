import { useState } from 'react'
import SignIn from './components/sign-up'
import './App.css'
import LoginComponent from './components/sign-in'
import Dashboard from './components/Dashboard'
import ExampleTable from './components/Table'
import NotificationPanel from './components/NotificationPanel'
function App() {
  const [count, setCount] = useState(0)
  
  const data = [
    { address: "123 Main St", dateTime: "2023-10-10 14:00", members: 3, amount: "$150" },
    { address: "456 Oak Ave", dateTime: "2023-10-11 16:00", members: 2, amount: "$200" },
    { address: "789 Pine Rd", dateTime: "2023-10-12 18:30", members: 5, amount: "$350" },
    { address: "101 Maple St", dateTime: "2023-10-13 12:00", members: 4, amount: "$250" },
    { address: "202 Birch Blvd", dateTime: "2023-10-14 09:30", members: 6, amount: "$400" },
    { address: "303 Cedar Ct", dateTime: "2023-10-15 15:00", members: 3, amount: "$180" },
    { address: "404 Elm St", dateTime: "2023-10-16 13:45", members: 7, amount: "$500" },
    { address: "505 Spruce St", dateTime: "2023-10-17 17:30", members: 2, amount: "$120" },
    { address: "606 Willow Way", dateTime: "2023-10-18 10:15", members: 5, amount: "$320" },
    { address: "707 Cherry Ln", dateTime: "2023-10-19 11:00", members: 4, amount: "$240" },
    { address: "808 Fir Ave", dateTime: "2023-10-20 14:20", members: 3, amount: "$150" },
    { address: "909 Poplar Rd", dateTime: "2023-10-21 09:00", members: 6, amount: "$360" },
    { address: "1010 Ash St", dateTime: "2023-10-22 12:00", members: 2, amount: "$200" },
    { address: "1111 Hickory Blvd", dateTime: "2023-10-23 13:30", members: 4, amount: "$220" },
    { address: "1212 Walnut Ct", dateTime: "2023-10-24 10:50", members: 5, amount: "$300" },



];

  return (
    <>
      {/* <SignIn/> */}
      {/* <LoginComponent/> */}
      <Dashboard/>
      {/* <ExampleTable data={data}/> */}
      {/* <NotificationPanel/> */}
    </>
  )
}

export default App
