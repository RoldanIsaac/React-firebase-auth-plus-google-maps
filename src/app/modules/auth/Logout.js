import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [countdown, setCountdown] = useState(10); // 10 segundos de espera
  const navigate = useNavigate();

  useEffect(() => {
    // Intervalo para actualizar el contador cada segundo
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          navigate('/login'); // Redirige al login cuando el contador llegue a 0
        }
        return prevCountdown - 1;
      });
    }, 1000); // Ejecutar cada 1 segundo

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h2>Sesión cerrada</h2>
      <p>Te hemos desconectado de tu cuenta.</p>
      <p>Redirigiendo al inicio de sesión en {countdown} segundos...</p>
      <div style={styles.countdown}>
        <span style={styles.countdownText}>{countdown}</span>
      </div>
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
  countdown: {
    marginTop: '20px',
    padding: '10px',
    fontSize: '40px',
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '8px',
  },
  countdownText: {
    fontSize: '30px',
  },
};

export default Logout;