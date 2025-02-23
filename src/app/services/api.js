const API_URL = "http://localhost:8000/api/posts";

export const getAll = async () => {
   try {
      const res = await fetch(API_URL);
      if (!res.ok) {
         throw new Error('Failed to fetch posts');
      }
      const data = await res.json();
      return data;
   } catch (error) {
      console.log('Error', error);
      throw error;
   }
}
 
export const getOne = async (id) => {
   try {
      const res = await fetch(`${API_URL}/${id}`);
      const data = await res.json();
      return data;
   } catch (error) {
      console.log('Error', error);
      throw error;
   }
}
 
export const createOne = async (data) => {
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
 
 
export const updateOne = async (data, id) => {
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
 
export const deleteOne = async (id) => {
   try {
      const res = await fetch(`${API_URL}/${id}`, {
         method: 'DELETE'
      });
   } catch (error) {
      console.log('Error', error);
      throw error;
   }
}

// export default {
//    getAll,
//    getOne,
//    createOne,
//    updateOne,
//    deleteOne,
// }