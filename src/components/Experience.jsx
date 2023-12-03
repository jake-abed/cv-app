import '../App.css';

export default function Experience({ experienceData, onChange }) {
	return (
		<div className='card input-flex'>
			<label htmlFor='company'>
				Company:
				<input
					name='company'
					type='text'
					onChange={onChange}
					value={experienceData?.company}
				/>
			</label>
			<label htmlFor='position'>
				Position:
				<input
					name='position'
					type='text'
					onChange={onChange}
					value={experienceData?.position}
				/>
			</label>
			<label htmlFor='jobDescription'>
				Main Tasks:
				<input
					name='jobDescription'
					type='text'
					onChange={onChange}
					value={experienceData?.jobDescription}
				/>
			</label>
			<label htmlFor='experienceStart'>
				Start (Month & Year):
				<input
					type='text'
					name='experienceStart'
					onChange={onChange}
					value={experienceData?.experienceStart}
				/>
			</label>
			<label htmlFor='experienceEnd'>
				End (Month & Year):
				<input
					type='text'
					name='experienceEnd'
					onChange={onChange}
					value={experienceData?.experienceEnd}
				/>
			</label>
		</div>
	);
}
