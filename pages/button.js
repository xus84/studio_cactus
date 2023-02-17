import React from 'react';
import styles from './materials'

const Button = ({ name, previewUrl, onClick }) => {
  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={onClick}>
        <img src={previewUrl} alt="preview" style={styles.preview} />
        <span style={styles.name}>{name}</span>
      </button>
    </div>
  );
}

export default Button;


