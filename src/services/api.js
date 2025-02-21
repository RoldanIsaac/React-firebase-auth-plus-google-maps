const API_URL = 'http://localhost:8080/api/posts';

const getAll = async () => {
   try {
      const res = await fetch(API_URL);
      const data = await res.json();
      return data;
   } catch (error) {
      console.log('Error', error);
      throw error;
   }
}
 
const getOne = async (id) => {
   try {
      const res = await fetch(`${API_URL}/${id}`);
      const data = await res.json();
      return data;
   } catch (error) {
      console.log('Error', error);
      throw error;
   }
}
 
const createOne = async (data) => {
   try {
      const res = await fetch(API_URL, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(data),
      });
   
      const data = await res.json();
      return data;
   } catch (error) {
      console.log('Error', error);
      throw error;
   }
}
 
 
const updateOne = async (data, id) => {
   try {
      const res = await fetch(`${API_URL}/${id}`, {
         method: 'PUT',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(data)
      });
   
      const data = await res.json();
      return data;
   } catch (error) {
      console.log('Error', error);
      throw error;
   }
}
 
const deleteOne = async (id) => {
   try {
      const res = await fetch(`${API_URL}/${id}`, {
         method: 'DELETE'
      });
   } catch (error) {
      console.log('Error', error);
      throw error;
   }
}
 
export default {
   getAll,
   getOne,
   createOne,
   updateOne,
   deleteOne,
}