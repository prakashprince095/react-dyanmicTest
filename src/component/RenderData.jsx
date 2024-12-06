import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
let RenderData=()=>{
	const token = useSelector(state => state.token.value); // 'state.token.value' is the path to your token in the state
	// const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXRlcjFAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzM0NzE1NTcsImV4cCI6MTczMzUwNzU1N30.wvaIs5RCdRMrujDzwYxpsLiqZK6WakoioqVhFqn3PYc'; // Replace this with your actual token
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	// const responseData={
	// 	'id': data.response.id,
	// 	'name':data.response.name,
	// 	'batch':data.response.batch
	// }
  
	useEffect(() => {
	  // Making the API call
	  fetch('http://localhost:7001/api/test/demo',{
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`, // Send the token in the Authorization header
			'Content-Type': 'application/json' // Optional: Add content type if needed
		} 
	  
	  }) // Replace with your API URL
		.then(response => {
		  if (!response.ok) {
			throw new Error('Network response was not ok');
		  }
		  return response.json();
		})
		.then(data => {
			console.log("the recieved data is ",data)
		  setData(data); // Store the data in state
		  setLoading(false); // Set loading to false when data is fetched
		})
		.catch(error => {
		  setError(error); // Set error in case of failure
		  setLoading(false);
		});
	}, []); // Empty array means this effect runs once, similar to componentDidMount
  
	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
     return <>
 
    <div>
      <h3>Batch Details</h3>
      {data.response && data.response.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Batch</th>
            </tr>
          </thead>
          <tbody>
            {data.response.map((item) => (
              <tr key={item.id}>
                <td scope="row">{item.id}</td>
                <td scope="row">{item.name}</td>
                <td scope="row">{item.batch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>





	 </>
}
export default RenderData