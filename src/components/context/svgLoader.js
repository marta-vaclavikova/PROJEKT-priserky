export const loadSvgData = (setSvgData) => {
  fetch('assets/svg/torso.json')
    .then((response) => response.json())
    .then((json) => {
      setSvgData((previous) => ({ ...previous, torso: json }));
    });
  fetch('assets/svg/clothes.json')
    .then((response) => response.json())
    .then((json) => {
      setSvgData((previous) => ({ ...previous, clothes: json }));
    });

  fetch('assets/svg/arms.json')
    .then((response) => response.json())
    .then((json) => {
      setSvgData((previous) => ({ ...previous, arms: json }));
    });

  fetch('assets/svg/legs.json')
    .then((response) => response.json())
    .then((json) => {
      setSvgData((previous) => ({ ...previous, legs: json }));
    });

  fetch('assets/svg/head.json')
    .then((response) => response.json())
    .then((json) => {
      setSvgData((previous) => ({ ...previous, head: json }));
    });

  fetch('assets/svg/mouth.json')
    .then((response) => response.json())
    .then((json) => {
      setSvgData((previous) => ({ ...previous, mouth: json }));
    });

  fetch('assets/svg/eyes.json')
    .then((response) => response.json())
    .then((json) => {
      setSvgData((previous) => ({ ...previous, eyes: json }));
    });
  fetch('assets/svg/shoes.json')
    .then((response) => response.json())
    .then((json) => {
      setSvgData((previous) => ({ ...previous, shoes: json }));
    });
};
