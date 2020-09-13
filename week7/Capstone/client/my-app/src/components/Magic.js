import React, { useState } from 'react'
import AddMagicForm from './AddMagicForm'

function Magic(props) {
    const { spellName, element, _id, continualDamage, spellCost } = props
    const [editToggle, setEditToggle] = useState(false)
    console.log(editToggle)
    return (
        <div className="magic">
            {!editToggle ?
                <>
                <div className="magic-container">
                    <h1>Spell name:{spellName}</h1>
                    <p>Element: {element}</p>
                    <p>Continual Damage: {continualDamage ? document.textContent = "true" : "false"}</p>
                    <p>Spell Cost: {spellCost}</p>
                    <button className="delete-btn" onClick={() => props.deleteSpell(_id)}>Delete</button>
                    <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    </div>
                </>
                :
                <>
                    <AddMagicForm
                        spellName={spellName}
                        element={element}
                        continualDamage={continualDamage}
                        spellCost={spellCost}
                        _id={_id}
                        btnText="Update Spell"
                        submit={props.editSpell} />

                    <button className="btnColor" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}

export default Magic