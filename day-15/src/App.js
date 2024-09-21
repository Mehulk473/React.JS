import React, { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=10')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching data: ', error));
},[]);

return (
  <div style={styles.container}>
      <h1 style={styles.header}>Product List</h1>
      
      <div style={styles.productItem}>     
      {products.map((data)=>(
      <div>
         {/* <p><strong>Name:</strong> {data.id}</p> */}
       <p><strong>Name:</strong> {data.title}</p>
       <p><strong>Price:</strong> {data.price}</p>
       <p><strong>Description:</strong> {data.description}</p>
     </div>
        ))
      }
      </div>
     
      
    </div>
  );
};
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  productItem: {
    marginBottom: '12px',
  },
};
export default  App