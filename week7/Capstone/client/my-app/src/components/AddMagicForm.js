import React, { useState } from 'react'


function AddMagicForm(props) {
    const initInputs = { spellName: props.spellName || "", element: props.element || "", spellCost: "" }
    const [inputs, setInputs] = useState(initInputs)



    function handleChange(e) {
        const { name, value, type, checked } = e.target
        if (type === "checkbox") {
            checked ? setInputs(prevInputs => ({ ...prevInputs, [name]: true })) : setInputs(prevInputs => ({ ...prevInputs, [name]: false }))
        } else {
            setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }
    return (
        <form onSubmit={handleSubmit}>
            SpellName: <input
                className="color"
                type="text"
                name="spellName"
                value={inputs.spellName}
                onChange={handleChange}
                placeholder="Spell Name" />
                <br />
            Element: <input
                className="color"
                type="text"
                name="element"
                value={inputs.element}
                onChange={handleChange}
                placeholder="Element" />
                <br />
            Continual Damage:<input
                className="color"
                type="checkbox"
                name="continualDamage"
                value={inputs.continualDamage}
                onChange={handleChange}
                placeholder="Continual Damage" />
                <br />
            Spell Cost: <input
                className="color"
                type="number"
                name="spellCost"
                value={inputs.spellCost}
                onChange={handleChange}
                placeholder="Spell Cost" />
            <button className="btnColor">{props.btnText}</button>
        </form>
    )
}

export default AddMagicForm