import './App.css'
import Accordion from './components/Accordion'
function App () {
  const items = [
    {
      title: 'JavaScript Basics',
      content: 'Learn variables, functions, and loops.'
    },
    {
      title: 'DOM Manipulation',
      content: 'Interact with web pages using JavaScript.'
    },
    {
      title: 'ES6 Features',
      content: 'Explore new syntax and features in ES6.'
    },
    {
      title: 'Asynchronous JavaScript',
      content: 'Understand callbacks, promises, and async/await.'
    },
    {
      title: 'JavaScript Frameworks',
      content:
        'Get an overview of popular frameworks like React, Vue, and Angular.Get an overview of popular frameworks like React, Vue, and Angular.Get an overview of popular frameworks like React, Vue, and Angular.Get an overview of popular frameworks like React, Vue, and Angular.Get an overview of popular frameworks like React, Vue, and Angular.Get an overview of popular frameworks like React, Vue, and Angular.'
    }
  ]

  return <Accordion items={items} />
}

export default App
