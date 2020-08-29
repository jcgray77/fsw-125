import React, { useState } from 'react';
import './BountyList.css'
import AddBountyForm from '../AddBountyForm/AddBountyForm';

const BountyList = (props) => {
    const {firstName, lastName, bountyAmount, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div className="bounty-list">
            { !editToggle ?
                <>      
                    <h3>First Name: {firstName}</h3>
                    <h3>Last Name: {lastName}</h3>
                    <h4>Bounty: ${bountyAmount}.00</h4>
                    <h4>Type: {type}</h4>
                    <div className="button-container">
                    <button 
                        className="delete-btn"
                        onClick={() => props.deleteBounty(_id)}>
                    Delete
                    </button>
                    </div>
                    <div className="button-container">
                    <button
                        className="edit-btn"
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                    </button>
                    </div>
                </>
            :
                <>
                <AddBountyForm
                    firstName={firstName}
                    lastName={lastName}
                    bountyAmount={bountyAmount}
                    type={type}
                    btnText="Submit Edit"
                    _id={_id}
                    submit={props.editBounty}
                />
                <button 
                    className="close-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
                </button>
                </>
            }
        </div>
    )
}

export default BountyList