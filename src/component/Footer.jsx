import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

let Footer = () =>{
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
        <div>
          <a href="#" className="text-white me-3">Privacy Policy</a>
          <a href="#" className="text-white me-3">Terms of Service</a>
          <a href="#" className="text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
