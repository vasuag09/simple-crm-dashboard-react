import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import { CrmContext } from './store/crm-context.jsx'
import ClientList from './components/ClientList.jsx'
function App() {
  const [clientsList, setClientsList] = useState([])
  function addClient(client){
    setClientsList(prevStateValue=>{
      return [...prevStateValue, client]
    })
  }
  function deleteClient(index){
    setClientsList(prevStateValue=>{
      return prevStateValue.filter((client, i)=> i !== index)
    })
  }
  function editClient(updatedValue, index){
    setClientsList(prevStateValue=>{
      return prevStateValue.map((client,i)=>{
        return (i === index ? {...client,...updatedValue} : client)
      })
    })
  }
  const crmCtxValue = {
    clients: clientsList,
    addClient: addClient,
    deleteClient: deleteClient,
    editClient: editClient
  }
  return(
    <CrmContext value={crmCtxValue}>
      <Header />
      <ClientList />
    </CrmContext>
  )
}
export default App
