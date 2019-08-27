import _ from 'lodash'
import Tigger, { NAME } from './utilities'

console.log(Tigger.say());
console.log(NAME);

function component() {
  const element = document.createElement('div');

  const array = ['Hello', 'Webpack', '!!'];
  element.innerHTML = _.join(array, ' ');

  return element;
}

document.body.appendChild(component());
