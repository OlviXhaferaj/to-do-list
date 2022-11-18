import React from 'react';
import { useState } from 'react';
const List = (props) => {
    const { i,liObject, li , setLi} =props;
    const [classn,setClassn]=useState('');
    const [checked, setChecked] = useState(false);
    console.log('checked', checked)
    const handleChange=(event) =>{

        setChecked({ [event.target.name] : event.target.checked})

        if(event.target.checked ===true){
            setClassn('line-through')
            console.log('true')
        }else{console.log('false')
    setClassn('')}
    }

    const handleButton = (ii)=>{
        const newArr = li.filter((theitem,i)=>{
            return i!==ii;
        });
        console.log(newArr)
        setLi(newArr)
    }
    return (
        <div className='list-div'>

            <label className={classn}>{liObject}</label>

            <input name={liObject} type={'checkbox'} value={checked.liObject} onChange={(e) => handleChange(e)}/>
            <button onClick={(e)=>handleButton(i)}>Delete</button>
        </div>
    )
}

export default List