const prices = {
  p_95: 6.35,
  p_98: 6.88,
  p_on: 6.54,
  p_onp: 6.85,
  p_lpg: 2.96,
};

const btn = document.querySelector('button');
var type;
var amount;

btn.addEventListener('click', () => {
  type = document.querySelector('select').value;
  amount = document.querySelector('input').value;

  if (amount > 0 && amount <= 145) {
    if (type.toLowerCase() == 'on+') {
      type = prices['p_onp'];
    } else {
      type = prices['p_' + type.toLowerCase()];
    }

    var output = type * parseInt(amount);
    output = output.toFixed(2);

    const formattedOutput = output
      .split('.')
      .map((part, index) => {
        if (index === 0) {
          return part.length === 1 ? '00' + part : part.length === 2 ? '0' + part : part;
        } else {
          return part.padEnd(2, '0');
        }
      })
      .join('');

    formattedOutput.split();

    const [num1, num2, num3, num4, num5] = formattedOutput.slice(0, 5);

    document.querySelector('.n1').style.transform = `translateY(${-6 * parseInt(num1)}rem)`;
    document.querySelector('.n2').style.transform = `translateY(${-6 * parseInt(num2)}rem)`;
    document.querySelector('.n3').style.transform = `translateY(${-6 * parseInt(num3)}rem)`;
    document.querySelector('.n4').style.transform = `translateY(${-6 * parseInt(num4)}rem)`;
    document.querySelector('.n5').style.transform = `translateY(${-6 * parseInt(num5)}rem)`;
  } else {
    alert('Za duża lub za mała ilość paliwa!\nPodaj ilość w zakresie od 1 do 145.');
  }
});
