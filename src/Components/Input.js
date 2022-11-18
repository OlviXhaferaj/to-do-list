import React, { useState } from 'react'

const Input = (props) => {
    const [ todo, setToDO] = useState('');
    const {li, setLi} = props;
    const submitHandle = (e)=>{
        e.preventDefault();
        const newLi = todo;
        if(newLi.length===0){
            return;
        }
        setLi([...li, newLi]);
        console.log(li);
        
    }
    return (
        <div>
            <form onSubmit={submitHandle}>
                <input 
                className='inp'
                type={'text'}
                onChange={(e) => setToDO(e.target.value)}
                /><br/>
                <input className='in-submit'
                type={'submit'}
                value={'Add'}
                />
            </form>
        </div>
    )
}

export default Input