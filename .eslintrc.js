// .eslintrc

module.exports = {
  extends: ['react-app', 'eslint:recommended'],
  rules: {
    'no-var': 'error', // var 금지
    'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }], // console.log() 금지
    eqeqeq: 'error', // 일치 연산자 사용 필수
    'dot-notation': 'error', // 가능하다면 dot notation 사용
    'no-unused-vars': 'error', // 사용하지 않는 변수 금지
  },
};

// "env":{
//   "es2020":true
// },
// "extends": ["airbnb","airbnb/hooks"],
// "rules":{
//   "react/jsx-filename-extension":[1,{"extensions":["js",'jsx']}],
// },
// "settings":{
//   "import/resolver":{
//     "node":{
//       "moduleDirectory": ["node_modules","."]
//     }
//   }
// }
