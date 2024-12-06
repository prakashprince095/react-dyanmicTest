import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = () => {
  const token = useSelector(state => state.token.value); // 'state.token.value' is the path to your token in the state
  // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwZXRlcjFAeW9wbWFpbC5jb20iLCJpYXQiOjE3MzM0NzE1NTcsImV4cCI6MTczMzUwNzU1N30.wvaIs5RCdRMrujDzwYxpsLiqZK6WakoioqVhFqn3PYc'; // Replace this with your actual token

  // Declare the state hooks outside of the handleSubmit function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading on form submission

    const dataToBeSubmitted = { email, password };

    setIsSubmitting(true); // Set loading state

    // Send POST request with the form data
    fetch('http://localhost:7001/api/test/submit', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`, // Send the token in the Authorization header

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToBeSubmitted),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        return response.json(); // Parse JSON response from the server
      })
      .then((data) => {
        console.log('Success:', data);
        setSuccess(true); // Set success state
        setIsSubmitting(false); // Reset loading state
      })
      .catch((err) => {
        console.error('Error:', err);
        setError('Failed to submit the form'); // Set error state
        setIsSubmitting(false); // Reset loading state
      });
   
    console.log("The form has been submitted");
	console.log("teh data that is being sen t i s",dataToBeSubmitted)
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {/* Error or success message */}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        {success && <div className="alert alert-success mt-3">Registration successful!</div>}
      </div>
    </>
  );
};

export default Registration;
