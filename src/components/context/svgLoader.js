import axios from 'axios';

export const loadSvgData = (setSvgData) => {
  axios.get('/assets/svg/body.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, body: response.data }));
    });
  axios.get('/assets/svg/arms.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, arms: response.data }));
    });

  axios.get('/assets/svg/legs.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, legs: response.data }));
    });

  axios.get('/assets/svg/mouth.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, mouth: response.data }));
    });

  axios.get('/assets/svg/eyes.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, eyes: response.data }));
    });

  axios.get('/assets/svg/colors.json')
    .then((response) => {
      setSvgData((previous) => ({ ...previous, colors: response.data }));
    });
};
