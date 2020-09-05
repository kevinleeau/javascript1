// create current year and store to current
let current = new Date().getFullYear();
function ageInDays(){
    let birthYear = prompt('what year were you born?');
    let days = (current-birthYear) * 365;
    // create h1 element in html
    let h1 = document.createElement('h1');
    // create textnote and store to textAnswer
    let textAnswer = document.createTextNode('You are '+ days +' days old!');
    // set h1 connect to html id and from function
    h1.setAttribute('id', 'ageInDays');
    // appendChild: 在指定元素节点的最后一个子节点之后添加节点。
    h1.appendChild(textAnswer);
    // id must in html but why can't use class?????
    document.getElementById('result').appendChild(h1);
    // document.getElementsByClassName('result').appendChild(h1);
   
}
function reset(){
    // id must in html but why can't use class?????
    document.getElementById('ageInDays').remove();
}
