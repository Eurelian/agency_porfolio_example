import home1 from "../img/home1.png";

const AboutSection = () => {
	return (
		<div>
			<div className='description'>
				<div className='title'>
					<div className='hide'>
						<h2>We thrive to make</h2>
					</div>
					<div className='hide'>
						<h2>
							your <span>dreams</span>{" "}
						</h2>
					</div>
					<div className='hide'>
						<h2>come true</h2>
					</div>
				</div>
				<p>
					Contact us for your next project. Let's make your next video look as
					you dream it.
				</p>
				<button>Book a Meeting</button>
			</div>
			<div className='image'>
				<img src={home1} alt='photographer holding a camera' />
			</div>
		</div>
	);
};

export default AboutSection;
