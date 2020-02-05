import _ from 'lodash';

  function component() {
    const element = document.createElement('div');
   const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

     btn.innerHTML = 'and check the console!';
     btn.onclick = printMe;

     element.appendChild(btn);

    return element;
  }

  let element = component(); // Store the element to re-render on print.js changes
  document.body.appendChild(element);
