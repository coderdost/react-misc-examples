import {useState, useRef} from 'react';

const UnControlledForm = ()=>{

  const [name, setName] = useState('');
  const input = useRef(null);

  const handleClick = (e)=>{
        e.preventDefault();
        setName(input.current.value);
  }

    return (
        <div>
            <form>
                <input type="text" ref={input}></input>
                <br></br>
                <input type="submit" onClick={handleClick}></input>
            </form>
            <div>
                {name}
            </div>
        </div>
    )
}

const ControlledForm = ()=>{

    const [name, setName] = useState('');
  
    const handleClick = (e)=>{
          e.preventDefault();
    }
  
      return (
          <div>
              <form>
                  <input type="text" onChange={e=>setName(e.target.value)}
                  value={name}
                  ></input>
                  <br></br>
                  <input type="submit" onClick={handleClick}></input>
              </form>
              <div>
                  {name}
              </div>
          </div>
      )
  }

export {UnControlledForm,ControlledForm}