import React from 'react';

import Axios from 'axios';

class App extends React.Component {
  constructor(){
    super()
    this.state={bountyArray:[]}
}
componentDidMount(){
  Axios.get("/bounties").then(res => {console.log(res)
  this.setState({bountyArray:res.data})})
}

render(){return (
  <div className="App">
    {this.state.bountyArray.map(bounty => {
      
      return (
        <div>
          <h1>
          {bounty.type}
        </h1>
          <h1>
          {bounty.firstName}
        </h1>
        <h1>
          {bounty.Living?"true":"false"}
        </h1>
        
        <h1>
          {bounty.lastName}
        </h1>
        </div>
      )
    })}

  </div>
)}
}

export default App;