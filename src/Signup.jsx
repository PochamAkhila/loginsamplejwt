// import { useState } from 'react';
// import { React} from 'react';
// // import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('https://loacalhost:3009/jwtlogin', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ name, email, password }),
//         });
//         if (response.ok) {
//             const data = await response.json();
//             localStorage.setItem('token', data.token);
//             // Redirect to protected route
//         } else {
//             // Handle error
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} style={{textAlign:"center"}}  className="mt-5">
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder ="Enter Username" className="mb-3"/>
//             <br/>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" className="mb-3"/>
//             <br/>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="mb-3"/>
//             <br/>
//             <button type="submit" className='btn btn-info'>Signup</button>
//         </form>
//     );
// };

// export default Signup;