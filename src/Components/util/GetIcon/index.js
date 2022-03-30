import icon1 from './assets/icon1.png'
import icon1b from './assets/icon1@2x.png'
import icon2 from './assets/icon2.png'
import icon2b from './assets/icon2@2x.png'
import icon3 from './assets/icon3.png'
import icon3b from './assets/icon3@2x.png'
import icon4 from './assets/icon4.png'
import icon4b from './assets/icon4@2x.png'
import icon5 from './assets/icon5.png'
import icon5b from './assets/icon5@2x.png'
import icon6 from './assets/icon6.png'
import icon6b from './assets/icon6@2x.png'
import icon7 from './assets/icon7.png'
import icon7b from './assets/icon7@2x.png'
import icon8 from './assets/icon8.png'
import icon8b from './assets/icon8@2x.png'
import icon9 from './assets/icon9.png'
import icon9b from './assets/icon9@2x.png'
import icon10 from './assets/icon10.png'
import icon10b from './assets/icon10@2x.png'
import icon11 from './assets/icon11.png'
import icon11b from './assets/icon11@2x.png'
import icon12 from './assets/icon12.png'
import icon12b from './assets/icon12@2x.png'
import iconEmpty from './assets/iconEmpty.png'
import iconEmptyb from './assets/iconEmpty@2x.png'

// Check if screen is retina
function isHighRes() {
    return window.devicePixelRatio > 1;
}

// Based on Open Weather API forecast,
// assign an icon from the assets

export function getIcon(iconId) {
    if (isHighRes) {
        switch (iconId) {
            case '01d': return icon1b;
                break;
            case '01n': return icon7b;
                break;
            case '02d': return icon2b;
                break;
            case '02n': return icon8b;
                break;
            case '03d': return icon3b;
                break;
            case '03n': return icon9b;
                break;
            case '04d': return icon3b;
                break;
            case '04n': return icon9b;
                break;
            case '09d': return icon4b;
                break;
            case '09n': return icon10b;
                break;
            case '10d': return icon4b;
                break;
            case '10n': return icon10b;
                break;
            case '11d': return icon6b;
                break;
            case '11n': return icon12b;
                break;
            case '13d': return icon5b;
                break;
            case '13n': return icon11b;
                break;
            case '50d': return icon3b;
                break;
            case '50n': return icon9b;
                break;
            case 'empty': return iconEmptyb;
                break;
            default:
                console.log('Something weird happened.');
        }
    }

    if (!isHighRes) {
        switch (iconId) {
            case '01d': return icon1;
                break;
            case '01n': return icon7;
                break;
            case '02d': return icon2;
                break;
            case '02n': return icon8;
                break;
            case '03d': return icon3;
                break;
            case '03n': return icon9;
                break;
            case '04d': return icon3;
                break;
            case '04n': return icon9;
                break;
            case '09d': return icon4;
                break;
            case '09n': return icon10;
                break;
            case '10d': return icon4;
                break;
            case '10n': return icon10;
                break;
            case '11d': return icon6;
                break;
            case '11n': return icon12
                break;
            case '13d': return icon5;
                break;
            case '13n': return icon11;
                break;
            case '50d': return icon3;
                break;
            case '50n': return icon9;
                break;
            case 'empty': return iconEmpty;
                break;
            default:
                console.log('Something weird happened.');
        }
    }
}
