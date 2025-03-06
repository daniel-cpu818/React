import getRandomFromArr from '../services/getRandomFromArr';
import phrases from '../utils/phrases.json';
import bgArr from '../utils/bgArr.json';
import gsap from "gsap";
import PropTypes from 'prop-types';

const ButtonPhrase = ({ setPhraseRandom, setBgApp }) => {
	const handleChangePhrase = () => {
		// GSAP Animation for button click
		gsap.to('.app__btn', {
			scale: 1.1,
			duration: 0.2,
			yoyo: true,
			repeat: 1,
		});

		const quote = getRandomFromArr(phrases);
		setPhraseRandom(quote);
		setBgApp(getRandomFromArr(bgArr));
	};

	return (
		<button className="app__btn" onClick={handleChangePhrase}>
			Ver otro
		</button>
	);
};
ButtonPhrase.propTypes = {
	setPhraseRandom: PropTypes.func.isRequired,
	setBgApp: PropTypes.func.isRequired,
};

export default ButtonPhrase;
