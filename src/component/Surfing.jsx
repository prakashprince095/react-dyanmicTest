import { Link } from 'react-router-dom';

const Surfing = ()=>{
	return<>
	<div>
	<Link to="/get">Get</Link>
    <Link to="/post">Post</Link>
    <Link to="/put">Put</Link>
	<Link to="/delete">Delete</Link>
	<Link to="/login">Login</Link>


	</div>
	</>
}
export default Surfing;