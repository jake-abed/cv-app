import '../App.css';

export default function Education({ educationData, onChange }) {
	return (
		<div className='card input-flex'>
			<label htmlFor='school'>
				School:
				<input name='school' type='text' onChange={onChange} />
			</label>
			<label htmlFor='degree'>
				Degree/Title of Study:
				<input name='degree' type='text' onChange={onChange} />
			</label>
			<label htmlFor='schoolStart'>
				Start (Month & Year):
				<input type='text' name='schoolStart' onChange={onChange} />
			</label>
			<label htmlFor='schoolEnd'>
				End (Month & Year):
				<input type='text' name='schoolEnd' onChange={onChange} />
			</label>
		</div>
	);
}
