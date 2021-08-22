import React from 'react'
import {SiWhatsapp} from 'react-icons/si'


const SupportButton = ({}) => {


  function startSupport(){
    window.open('https://www.convertte.com.br/gerador-link-whatsapp/')
  }


  return (
    <div>
      <button 
      onClick={() => startSupport()}
      style={BtnStyles}
      >
        <SiWhatsapp size={24}/>
      </button>
    </div>
  )
}

SupportButton.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

const BtnStyles = {
  background: '#009e00',
  color: '#fff',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  margin: 12,
  width: 96,
  borderRadius: 4,
  padding: 2
}

export default SupportButton