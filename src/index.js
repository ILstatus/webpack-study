// 入口文件
import _ from 'lodash';
import './css/index.css'

function createElement() {
    let div = document.createElement('div');
    div.innerHTML = _.join(['my', 'name', 'is', 'leo'], '');
    div.className = 'box';
    return div;
}
document.body.appendChild(createElement());

const  name = 'John';
console.log(name);