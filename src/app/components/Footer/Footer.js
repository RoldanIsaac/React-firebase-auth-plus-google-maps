import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p style={styles.text}>© {new Date().getFullYear()} Mi Aplicación</p>
        <div style={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    width: '100%',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  text: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Footer;