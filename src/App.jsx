import { useState } from 'react';
import './App.css';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
	const [generalData, setGeneralData] = useState(null);
	const [experienceData, setExperienceData] = useState([
		{
			id: '',
			company: '',
			position: '',
			jobDescription: '',
			experienceStart: '',
			experienceEnd: '',
		},
	]);

	const updateGeneralData = (e) => {
		setGeneralData({
			...generalData,
			[e.target.name]: e.target.value,
		});
	};

	const updateExperienceData = (i) => (e) => {
		console.log(e);
		console.log(i);
		let experience = { ...experienceData[i] };
		experience[e.target.name] = e.target.value;
		let replacedExperiences = [...experienceData];
		replacedExperiences[i] = experience;
		setExperienceData(replacedExperiences);
	};

	const addExperience = () => {
		setExperienceData([
			...experienceData,
			{
				id: '',
				company: '',
				position: '',
				jobDescription: '',
				experienceStart: '',
				experienceEnd: '',
			},
		]);
	};

	return (
		<>
			<h1>CV/Resume Builder</h1>
			<div className='main card'>
				<p>
					Fill out the folllowing fields to generate a CV/Resume. What's the
					difference?
				</p>
				<h2>General Information</h2>
				<div className='card input-flex'>
					<label htmlFor='firstName'>
						First Name:
						<input name='firstName' type='text' onChange={updateGeneralData} />
					</label>
					<label htmlFor='lastName'>
						Last Name:
						<input name='lastName' type='text' onChange={updateGeneralData} />
					</label>
					<label htmlFor='email'>
						Email:
						<input type='text' name='email' onChange={updateGeneralData} />
					</label>
					<label htmlFor='phone'>
						Phone:
						<input type='tel' name='phone' onChange={updateGeneralData} />
					</label>
				</div>
				<h2>Education Info</h2>
				<Education educationData={generalData} onChange={updateGeneralData} />
				<h2>Experience</h2>
				{experienceData.map((experience, i) => (
					<Experience
						key={i}
						experienceData={experience}
						onChange={updateExperienceData(i)}
					/>
				))}
				<button onClick={addExperience}>Add Experience</button>
			</div>
			{generalData || experienceData ? (
				<div className='card'>
					<div className='cv-body'>
						<div className='contact-info'>
							<p className='name'>
								{(generalData?.firstName ? generalData.firstName : '') +
									' ' +
									(generalData?.lastName ? generalData.lastName : '')}
							</p>
							<p className='email'>{generalData?.email}</p>
							<p className='phone'>{generalData?.phone}</p>
						</div>
						<div className='education'>
							<h2>Education</h2>
							<p className='school'>{generalData?.school}</p>
							<p className='degree'>{generalData?.degree}</p>
							<p className='education-dates'>
								{generalData?.schoolStart} - {generalData?.schoolEnd}
							</p>
						</div>
						<div className='experience'>
							<h2>Experience</h2>
							{experienceData.map((experience, i) => (
								<div key={i} className='experience-card'>
									<p className='company'>{experience.company}</p>
									<p className='position'>{experience.position}</p>
									<p className='job-description'>{experience.jobDescription}</p>
									<p className='experience-dates'>
										{experience.experienceStart} - {experience.experienceEnd}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

export default App;
