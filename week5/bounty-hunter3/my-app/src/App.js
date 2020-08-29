import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import BountyList from './components/BountyList/BountyList';
import AddBountyForm from './components/AddBountyForm/AddBountyForm'

function App() {
  const [bounties, setBounties] = useState([])

  const getBounties = () => {
    axios.get("/bounties")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  }

  const addBounty = (newBounty) => {
    axios.post("/bounties", newBounty)
    .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data])
    })
    .catch(err => console.log(err))
  }

  const deleteBounty = (bountyId) => {
    axios.delete(`/bounties/${bountyId}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.log(err))
  }

  const editBounty = (updates, bountyId) => {
    axios.put(`/bounties/${bountyId}`, updates)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
      getBounties()
  }, [])

  return (
    <div className="App">
      <h4>Bounty Hunter</h4>
      <AddBountyForm
        submit={addBounty}
        btnText="Add Bounty"
      />
      { 
      bounties.map(bounty => 
      <BountyList 
      {...bounty} 
      key={bounty._id}
      deleteBounty={deleteBounty}
      editBounty={editBounty}
      />)
      }
    </div>
  );
}

export default App;