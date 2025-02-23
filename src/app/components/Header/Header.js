import { useState } from "react";

export const Header = ({username}) => { 

   // const [searchQuery, setSearchQuery] = useState[''];

   // const handleSearchChange = (e) => {
   //    setSearchQuery(e.target.value);
   // }

   // const handleSearchSubmit = (e) => {
   //    e.preventDefault();
   //    console.log('Searching', searchQuery)
   // }
 
   // 
   return (
      <header style={styles.header}>
         <div style={styles.usernameContainer}>
            <h1>User: {username}</h1>
         </div>
         {/* <form onSubmit={handleSearchSubmit} style={styles.searchForm}>
            <input
               type="text"
               value={searchQuery}
               onChange={handleSearchChange}
               placeholder="Buscar..."
               style={styles.searchInput}
            />
            <button type="submit" style={styles.searchButton}>Buscar</button>
         </form> */}
      </header>
   )
};


const styles = {
   header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #ddd',
   },
   usernameContainer: {
      fontSize: '18px',
      fontWeight: 'bold',
   },
   searchForm: {
      display: 'flex',
      alignItems: 'center',
   },
   searchInput: {
      padding: '8px',
      fontSize: '14px',
      marginRight: '10px',
      borderRadius: '4px',
      border: '1px solid #ccc',
   },
   searchButton: {
      padding: '8px 12px',
      fontSize: '14px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
   },
};

export default Header;