import './App.css';
import Input from './Components/Input';
import { useState } from 'react';
import List from './Components/List';
import { useEffect } from 'react';

function App() {
  const data = JSON.parse(window.localStorage.getItem('list'))

  const [li, setLi] = useState(data)
  useEffect(()=>{

    window.localStorage.setItem('list',JSON.stringify(li))
    
  }, [li])
  return (
    <div className="App1">
      <div className="App">
      <Input li={li} setLi={setLi} />
      {
        li.map((item, index) => {
          return[<List key={index} i={index} liObject={item} li={li} setLi={setLi}/>
        ]
        })
      }
      </div>
    </div>
  );
}

export default App;
