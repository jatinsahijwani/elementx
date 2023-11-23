import './../Css/Create.css';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import './../Css/GetCode.css';
import { MdKeyboardBackspace } from "react-icons/md";
const Create = (props) => {
  const navigateTo = useNavigate();
  const token = localStorage.getItem("token");
  const category = props.element;
  const username = localStorage.getItem('username');
  const [textField,setTextField] = useState('css');

  const handleContinueRequest = async ()=>{
    
    const response = await fetch('http://localhost:4040/create',{
      method : 'POST',
      body : JSON.stringify({html,css,category,username}),
      headers : {
        'Content-Type' : "application/json",
        "authorization" : `Bearer ${token}`
      }
    });
    const data = await response.json();
    if(data.message === "your creation saved successfully")
    {
      console.log("done");
    }
    else{
      console.log("not done");
    }
  }
  const [html,setHtml] = useState("");
  const [css,setCss] = useState("");
  const Container = styled.div`${css}`;
  return (
    // <>
    // <textarea value={html} onChange={(e)=>setHtml(e.target.value)} placeholder='html'/>
    // <textarea value={css} onChange={(e)=>setCss(e.target.value)} placeholder='css'/>
    // <Container dangerouslySetInnerHTML={{ __html: html}} />
    // <button onClick={handleContinueRequest}>Continue</button>
    // </>
    <>
    <div className='getCode-background'>

      <div className='getCode-back-button' onClick={()=>navigateTo('/elements')}>
        <MdKeyboardBackspace style={
          {
            fontSize : "28px",
          }
        }/> 
        Go Back
      </div>
      <div className='getCode-container'>
        <div className='getCode-output-container'>
          <Container dangerouslySetInnerHTML={{__html : html}} />
        </div>
        <div className='getCode-input-container'>
        <div className='getCode-navbar'>
          {
            textField === 'html' ? 
            <button className='getCode-active-button' ><img src='./src/Components/html.png' style={{height : "20px"}}/>HTML</button> : 
            <button className='getCode-inActive-button' onClick={()=> setTextField('html')}><img src='./src/Components/html.png' style={{height : "20px"}}/>HTML</button>
          }
          {
            textField === 'css' ? 
            <button className='getCode-active-button'><img src='./src/Components/css.png' style={{height : "22px"}}/>CSS</button> : 
            <button className='getCode-inActive-button' onClick={()=> setTextField('css')}><img src='./src/Components/css.png' style={{height : "22px"}}/>CSS</button>
          }
        </div>
        {
          textField === 'html' ?
          <div className='getCode-input-textarea-container'>
            <textarea value={html} onChange={(e)=>setHtml(e.target.value)} placeholder='html'/>
          </div> : 
          <div className='getCode-input-textarea-container'>
            <textarea value={css} onChange={(e)=>setCss(e.target.value)} placeholder='css'/>
          </div>
          
        }
        
        
        </div>
      </div>
      <button className="create-continue-button" onClick={handleContinueRequest}>Continue</button>
    </div>
    </>
  )
}

export default Create
