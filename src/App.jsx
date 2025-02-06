// import InlineComponent from './components/InlineComponent'
// import OutlineComponent from './components/OutlineComponent'
// import Form from './components/Form'
import Header from './components/Header'
import Todo from './components/Todo'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='App'>
      <Header/>
      <Todo />
      {/* <Form /> */}
      {/* <InlineComponent />
      <OutlineComponent /> */}
      </div>
  )
}

export default App
