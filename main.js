/*
/// lodash method : _.clonDeep()
import _ from 'lodash'
const user = {
    name:'A',
    age: 84,
    emails: ['the@gmail.com']
}
const copyUser = _.cloneDeep(user) // 깊은 복사
//const copyUser = {...user}       // 얕은 복사
console.log(copyUser === user)

user.age = 22
console.log('user',user)
console.log('copyUser',copyUser)

console.log('-----------')
console.log('-----------')

user.emails.push('ne@z.com')
console.log(user.emails === copyUser.emails)
console.log('user',user)
console.log('copyUser',copyUser)
///////////////////////////////////////////////////
/// < import  export >

import _ from 'lodash'
import checkType from './getType' //getType.js, 이름 자유롭게 해도 상관x
//import { random, user as name } from './getRandom' //getRandom.js 
// getRandom은 , default 아니므로 
// export 할 값들을 {} 안에 넣어줌.
// user 라는 이름 대신 name 으로 꺼내오고 싶으면, (인수) as를 붙여서 하면됨.
import * as R from './getRandom' // export 안의 모든 값을 가져오고 싶을때.      * = wild card
console.log(_.camelCase('the hello world'))
console.log(checkType([1,2,3]))
//console.log(random(), random())
console.log(R)

//////////////////////////////////////////////////////
//// lodash method : _.uniqBy()  _.unionBy()
import _ from 'lodash'

const usersA = [
    { userId: '1', name: 'A'},
    { userId: '2', name: 'B'}
]
const usersB = [
    { userId: '1', name: 'A'},
    { userId: '3', name: 'C'}
]

const usersC = usersA.concat(usersB)    //합친거..  

console.log('concat',usersC)
// concat [{1, A},{2, B},{1, A},{3, C}]

console.log('uniqBy',_.uniqBy(usersC, 'userId'))
// uniqBy [{1, A},{2, B},{3, C}] - 배열data가 1개 일 때 사용 (고유화처리)

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)
//틀림!!!!!!  - 배열data가 2개이상 일 때. 중복안되게 합쳐짐 (고유화처리)


///////////////////////////////////////////////////
/// lodash method: _.find()   _.findIndex()
import _ from 'lodash'

const users = [
    { userId: '1', name: 'A'},
    { userId: '2', name: 'B'},
    { userId: '3', name: 'C'},
    { userId: '4', name: 'D'},
    { userId: '5', name: 'E'}
]
const foundUser = _.find(users, { name: 'C'})
const foundUserIndex = _.findIndex(users, { name: 'C'})
console.log(foundUser)
//{ userId: '3', name: 'C'}
console.log(foundUserIndex)
// 2

_.remove(users, { name: 'A'})
console.log(users)
//{ userId: '2', name: 'B'},{ userId: '3', name: 'C'},{ userId: '4', name: 'D'},{ userId: '5', name: 'E'}]


//////////////////////////////////////////////////////
/// JSON (JavaScript Object Notation) - JS의 객체 표기법
import myData from './myData.json'
console.log(myData) // json 파일은 객체 X 그냥 단순히 문자데이터임!!
//json 파일은 내용을 넣었지만 가볍다.
const user = {
    name: 'A',        //속성값에 ' ' 붙여도 상관없음(예외로)
    age: 88,
    emails: ['theA@gmail.com','theB@gamil.com']
}
console.log('user', user)

const str = JSON.stringify(user)
//JSON.stringify() = JavaScript 값이나 객체를 JSON 문자열로 변환
console.log('str',str)
console.log(typeof str)

const obj = JSON.parse(str)
//JSON.parse() = JSON 문자열을 분석 후 JavaScript 값 or 객체를 생성
console.log('obj', obj)

const user = {
    name:'A',
    age: 29,
    emails: [
        'AA',
        'BB'
    ]
}

const str = localStorage.getItem('key')
const obj = JSON.parse(str)
obj.age = 1
console.log(obj)
const a=JSON.stringify(obj)
localStorage.setItem('change',a)
*/
/////////axios 사용
import axios from 'axios'
function fetchMovies() {
    axios
        .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
        .then(res => {
            console.log(res)
            const h1El = document.querySelector('h1')
            const imgEl = document.querySelector('img')
            h1El.textContent = res.data.Search[0].Title
            imgEl.src = res.data.Search[0].Poster
        })
}
fetchMovies()