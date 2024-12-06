import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchedTokenSuccess, fetchedTokenFail } from "../store/tokenSlice";
const Login = ()=>{
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: '',
		password: ''
	  });
	
	  // Step 2: Handle input changes
	  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		  ...formData,
		  [name]: value, // Dynamically update the corresponding field in state
		});
	  };
	
	  // Step 3: Handle form submission
	  const handleLoginSubmit = (e) => {
		e.preventDefault(); // Prevent the default form submit behavior
		console.log('Form data submitted:', formData);
		
		// Here you can send the form data to an API or perform other actions
		fetch('http://localhost:7001/auth/login', {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        return response.json(); // Parse JSON response from the server
      })
      .then((data) => {
        console.log('Success:', data);
		dispatch(fetchedTokenSuccess(data.token));
        setSuccess(true); // Set success state
        setIsSubmitting(false); // Reset loading state
      })
      .catch((err) => {
        console.error('Error:', err);
        setError('Failed to submit the form'); // Set error state
        setIsSubmitting(false); // Reset loading state
      });
   
	  };
	
	return <>
	<form onSubmit={ handleLoginSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
	<input
          type="text"
          name="email"
          value={formData.name}
          onChange={handleChange}
          placeholder="email"
          required
        />
		    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
	<input
          type="text"
          name="password"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
	</>
}
export default Login;