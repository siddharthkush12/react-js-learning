import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Method-1(Wrong Way)
const reactElement={          // Not allowed in react because of parameters name
  type:'a',
  props:{
      href:'https://www.google.com/',
      target:'_blank'
  },
  children:'click me to visit google'
}


//Method-2
const element1=(        //It converted into object but in correct syntax(name)
  <a href="https://google.com" target="_blank">Press me</a>
)

//Method-3(Use ReactDOM)              // ReactDOM.createRoot(document.getElementById('root')).render
const reactElement1 = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
    // element1
    reactElement1
    // <App />
  
)
