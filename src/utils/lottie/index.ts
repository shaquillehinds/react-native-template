import lottieHouse from '@assets/lottie/house.json';

import keyPathsExtractor from './keyPathsExtractor';

const house = { json: lottieHouse, keypaths: keyPathsExtractor(lottieHouse) };

export { house };
