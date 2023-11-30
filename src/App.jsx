import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>CV/Resume Builder</h1>
			<div className='card'>
				<p>
					Fill out the folllowing fields to generate a CV/Resume. What's the
					difference?
				</p>
				<h2>General Information</h2>
				<div className='card input-flex'>
					<label htmlFor='firstName'>
						First Name:
						<input name='firstName' type='text' />
					</label>
					<label htmlFor='lastName'>
						Last Name:
						<input name='lastName' type='text' />
					</label>
					<label htmlFor='email'>
						Email:
						<input type='text' name='email' />
					</label>
					<label htmlFor='phone'>
						Phone:
						<input type='tel' name='phone' />
					</label>
				</div>
				<h2>Education Info</h2>
				<div className='card input-flex'>
					<label htmlFor='school'>
						School:
						<input name='school' type='text' />
					</label>
					<label htmlFor='degree'>
						Degree/Title of Study:
						<input name='degree' type='text' />
					</label>
					<label htmlFor='schoolStart'>
						Start (Month & Year):
						<input type='text' name='schoolStart' />
					</label>
					<label htmlFor='schoolEnd'>
						End (Month & Year):
						<input type='text' name='schoolEnd' />
					</label>
				</div>
			</div>
		</>
	);
}

export default App;
