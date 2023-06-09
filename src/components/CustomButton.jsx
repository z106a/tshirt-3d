import React from 'react';
import state from '../store';
import { useSnapshot } from 'valtio';



const CustomButton = ({title, customStyles, type, handleClick}) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    switch (type) {
      case 'filled':
        return {
          backgroundColor: snap.color,
          color: '#fff'
        }

      default:
        return {}
    }
  }

  return (
    <button
    className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)}
    onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton;