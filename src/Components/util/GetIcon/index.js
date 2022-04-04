import icon1 from './assets/icon1.png';
import icon1b from './assets/icon1@2x.png';
import icon2 from './assets/icon2.png';
import icon2b from './assets/icon2@2x.png';
import icon3 from './assets/icon3.png';
import icon3b from './assets/icon3@2x.png';
import icon4 from './assets/icon4.png';
import icon4b from './assets/icon4@2x.png';
import icon5 from './assets/icon5.png';
import icon5b from './assets/icon5@2x.png';
import icon6 from './assets/icon6.png';
import icon6b from './assets/icon6@2x.png';
import icon7 from './assets/icon7.png';
import icon7b from './assets/icon7@2x.png';
import icon8 from './assets/icon8.png';
import icon8b from './assets/icon8@2x.png';
import icon9 from './assets/icon9.png';
import icon9b from './assets/icon9@2x.png';
import icon10 from './assets/icon10.png';
import icon10b from './assets/icon10@2x.png';
import icon11 from './assets/icon11.png';
import icon11b from './assets/icon11@2x.png';
import icon12 from './assets/icon12.png';
import icon12b from './assets/icon12@2x.png';

// Check if screen is retina
function isHighRes() {
  return window.devicePixelRatio > 1;
}

// Based on Open Weather API forecast,
// assign an icon from the assets
const iconLookup = {
  '01d': icon1,
  '01n': icon7,
  '02d': icon2,
  '02n': icon8,
  '03d': icon3,
  '03n': icon9,
  '04d': icon3,
  '04n': icon9,
  '09d': icon4,
  '09n': icon10,
  '10d': icon4,
  '10n': icon10,
  '11d': icon6,
  '11n': icon12,
  '13d': icon5,
  '13n': icon11,
  '50d': icon3,
  '50n': icon9,
};

const iconLookupRetina = {
  '01d': icon1b,
  '01n': icon7b,
  '02d': icon2b,
  '02n': icon8b,
  '03d': icon3b,
  '03n': icon9b,
  '04d': icon3b,
  '04n': icon9b,
  '09d': icon4b,
  '09n': icon10b,
  '10d': icon4b,
  '10n': icon10b,
  '11d': icon6b,
  '11n': icon12b,
  '13d': icon5b,
  '13n': icon11b,
  '50d': icon3b,
  '50n': icon9b,
};

export const getIcon = (id) => {
  const result = iconLookup[id];
  const retinaResult = iconLookupRetina[id];

  if (!result) throw new Error('something went wrong');
  return isHighRes ? retinaResult : result;
}