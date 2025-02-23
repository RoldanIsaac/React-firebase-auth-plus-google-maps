import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationCode = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleVerificationCode = (e) => {
    e.preventDefault();
    console.log('Código ingresado:', code);
    navigate('/change-password'); // Redirigir a cambio de contraseña
  };

  return (
    <div style={styles.container}>
      <h2>Ingrese el Código de Verificación</h2>
      <form onSubmit={handleVerificationCode} style={styles.form}>
        <input
          type="text"
          placeholder="Código de verificación"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Verificar código</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: '0 auto',
    padding: '20px',
    background: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default VerificationCode;