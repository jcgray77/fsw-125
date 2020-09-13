import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Magic from './components/Magic'
import AddMagicForm from './components/AddMagicForm'
function App() {
    const [magic, setMagic] = useState([])
    function getMagic() {
        axios.get('/magic')
            .then(res => setMagic(res.data))
            .catch(err => console.log(err))
    }

    function addMagic(newSpell) {
        axios.post("/magic", newSpell)
            .then(res => {
                setMagic(prevMagic => [...prevMagic, res.data])
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteSpell(magicId) {
        axios.delete(`/magic/${magicId}`)
            .then(res => {
                setMagic(prevMagic => prevMagic.filter(spell => spell._id !== magicId))
            })
            .catch(err => console.log(err))
    }

    function editSpell(updates, magicId) {
        axios.put(`/magic/${magicId}`, updates)
            .then(res => {
                setMagic(prevMagic => prevMagic.map(spell => spell._id !== magicId ? spell : res.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMagic()
    }, [])
    return (
        <div className="background">
            <AddMagicForm
                submit={addMagic}
                btnText="Add Spell" />
            {magic.map((spell, index) => <Magic
                {...spell}
                key={index}
                deleteSpell={deleteSpell}
                editSpell={editSpell} />)}
        </div>
    )
}

export default App