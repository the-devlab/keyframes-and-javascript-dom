// can use either getElementById or querySelector for id
const charge = document.getElementById('chargeBattery');
const drain = document.querySelector('#drainBattery');
const batteryText = document.querySelector('.battery-text');
const fillBattery = document.querySelector('.battery-fill');

const fullBattery = () => {
  batteryText.innerHTML = 'FULL';
};

const emptyBattery = () => {
  batteryText.innerHTML = 'EMPTY';
};

const chargeBattery = () => {
  fillBattery.style.animationName = 'increase';
  fillBattery.style.animationFillMode = 'forwards';
  drain.disabled = false; // button disabled by default in index.html
  setTimeout(fullBattery, 4000); // text changes after 4 seconds
};

const drainBattery = () => {
  fillBattery.style.animationName = 'decrease';
  fillBattery.style.animationFillMode = 'backwards';
  setTimeout(emptyBattery, 4000);
};

charge.addEventListener('click', chargeBattery);
drain.addEventListener('click', drainBattery);
