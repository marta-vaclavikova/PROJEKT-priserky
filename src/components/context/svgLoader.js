import axios from 'axios';

export const loadSvgData = (setSvgData) => {
  axios.get('assets/svg/torso.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, torso: response.data }));
    });
  axios.get('assets/svg/clothes.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, clothes: response.data }));
    });

  axios.get('assets/svg/arms.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, arms: response.data }));
    });

  axios.get('assets/svg/legs.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, legs: response.data }));
    });

  axios.get('assets/svg/head.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, head: response.data }));
    });

  axios.get('assets/svg/mouth.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, mouth: response.data }));
    });

  axios.get('assets/svg/eyes.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, eyes: response.data }));
    });
  axios.get('assets/svg/shoes.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, shoes: response.data }));
    });
};
