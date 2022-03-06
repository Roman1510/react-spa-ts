import './App.css'
import Card, { CardVariant } from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <Card width="300px" height="300px" variant={CardVariant.outlined}></Card>
      <Card width="300px" height="300px" variant={CardVariant.primary}>
        <button>press</button>
      </Card>
    </div>
  )
}

export default App
