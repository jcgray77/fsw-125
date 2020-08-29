import React, { useState } from 'react';
import './AddBountyForm.css';

const AddBountyForm = (props) => {
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", bountyAmount: props.bountyAmount || "", type: props.type || "" }
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = () => {
        props.submit(inputs, props._id)
        setInputs(initInputs)   
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <input
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="Last Name"
            />
            <input
                type="number"
                name="bountyAmount"
                value={inputs.bountyAmount}
                onChange={handleChange}
                placeholder="Bounty Amount"
            />
            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Type"
            />
            <div><button>{props.btnText}</button></div>
        </form>
    )
}

export default AddBountyForm