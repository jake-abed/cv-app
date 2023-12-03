import '../App.css';

export default function GeneralInfo({ generalData, onChange }) {
	return (
		<div className='card input-flex'>
			<label htmlFor='firstName'>
				First Name:
				<input name='firstName' type='text' onChange={onChange} />
			</label>
			<label htmlFor='lastName'>
				Last Name:
				<input name='lastName' type='text' onChange={onChange} />
			</label>
			<label htmlFor='email'>
				Email:
				<input type='text' name='email' onChange={onChange} />
			</label>
			<label htmlFor='phone'>
				Phone:
				<input type='tel' name='phone' onChange={onChange} />
			</label>
		</div>
	);
}
