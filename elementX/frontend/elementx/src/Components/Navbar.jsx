import { useState } from 'react';
import './../Css/Navbar.css';
import {MdKeyboardArrowDown,MdOutlineSmartButton} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { SiGoogleforms } from 'react-icons/si';
import {PiCardsLight} from 'react-icons/pi';
import {BsUiRadiosGrid , BsToggle2Off} from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';
import { TbInputAi , TbLoader3 } from 'react-icons/tb';
const Navbar = (props) => {
  const [model,setModel] = useState(false);
  const username = localStorage.getItem('username');
  let firstLetter = '';
  if(username) firstLetter = username.charAt(0).toUpperCase();
  const navigateTo = useNavigate();
  const handleContinueRequest = ()=>{
    setModel(false);
    props.login ? navigateTo('/create') : navigateTo('/login') ;
  }
  const handleCreateRequest = ()=>{
    setModel(true);
  }
  return (
    <>
    <div>
    { 
    model ? <>
      <div className='model-background' onClick={()=>setModel(false) `${navigateTo('/')}`}></div>
      <div className='model-frame'>
          <h1>What are you Making?</h1>
          <div className='create-item'>
            <div onClick={()=>props.setElement("Buttons")}>
              {
                props.element === "Buttons" ? 
                <div className='selected-item'>
                  <MdOutlineSmartButton style={{
                    fontSize : "50px",
                  }}/>
                  <label>Button</label>
                </div>                
                :
                <div className='item'>
                  <MdOutlineSmartButton style={{
                    fontSize : "50px",
                  }}/>
                  <label>Button</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("Forms")}>
              {
                props.element === "Forms" ? 
                <div className='selected-item'>
                  <SiGoogleforms style={{
                    fontSize : "50px",
                  }}/>
                  <label>Forms</label>
                </div>                
                :
                <div className='item'>
                  <SiGoogleforms style={{
                    fontSize : "50px",
                  }}/>
                  <label>Forms</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("Cards")}>
              {
                props.element === "Cards" ? 
                <div className='selected-item'>
                  <PiCardsLight style={{
                    fontSize : "50px",
                    }}/>
                  <label>Cards</label>
                </div>                
                :
                <div className='item'>
                  <PiCardsLight style={{
                    fontSize : "50px",
                    }}/>
                  <label>Cards</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("RadioButtons")}>
              {
                props.element === "RadioButtons" ? 
                <div className='selected-item'>
                  <BsUiRadiosGrid style={{
                    fontSize : "40px",
                      }}/>
                  <label>Radio Button</label>
                </div>                
                :
                <div className='item'>
                  <BsUiRadiosGrid style={{
                  fontSize : "40px",
                    }}/>
                  <label>Radio Button</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("CheckBoxes")}>
              {
                props.element === "CheckBoxes" ? 
                <div className='selected-item'>
                  <FiCheckCircle style={{
                  fontSize : "40px"
                }}/>
                <label>Check Box</label>
                </div>                
                :
                <div className='item'>
                  <FiCheckCircle style={{
                  fontSize : "40px"
                }}/>
                <label>Check Box</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("Inputs")}>
              {
                props.element === "Inputs" ? 
                <div className='selected-item'>
                  <TbInputAi style={{
                  fontSize : "40px"
                }}/>
                <label>Input</label>
                </div>                
                :
                <div className='item'>
                  <TbInputAi style={{
                  fontSize : "40px"
                }}/>
                <label>Input</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("ToggleSwitches")}>
              {
                props.element === "ToggleSwitches" ? 
                <div className='selected-item'>
                  <BsToggle2Off style={{
                  fontSize : "40px"
                }}/>
                <label>Toggle switche</label>
                </div>                
                :
                <div className='item'>
                  <BsToggle2Off style={{
                  fontSize : "40px"
                }}/>
                <label>Toggle switche</label>
                </div>
              }
            </div>
            <div onClick={()=>props.setElement("Loaders")}>
              {
                props.element === "Loaders" ? 
                <div className='selected-item'>
                  <TbLoader3 style={{
                  fontSize : "40px"
                }}/>
                <label>Loaders</label>
                </div>                
                :
                <div className='item'>
                  <TbLoader3 style={{
                  fontSize : "40px"
                }}/>
                <label>Loaders</label>
                </div>
              }
            </div>
            <button onClick={handleContinueRequest}>Continue</button>
          </div>
        </div>
    </>
     : <div></div>}

    </div>
    <div className='navbar'>
      <div className='navbar-right'>
        <img src='./src/Components/logo.png' alt='nahi mili' className='logo-image' />
        <button className='element-button' onClick={()=>navigateTo('/elements')}>Elements&nbsp;<MdKeyboardArrowDown /></button>
      </div>
      <div className='navbar-left'>
          <button onClick={handleCreateRequest}>Create</button>
        {
          props.login ? <>
          <div className='profile-icon' title="Profile" onClick={()=>navigateTo('/profile')}>
            <div className='profile-letter'>
                {firstLetter}
            </div>
          </div>
          </> : <>
            <button onClick={()=>navigateTo('/login')}>Log in</button>
            <button onClick={()=>navigateTo('/register')}>Sign up</button> 
          </>
        }
      </div>
    </div>
    </>
  )
}

export default Navbar