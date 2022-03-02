import './App.css'
import Card, { CardVariant } from './components/Card'

function App() {
  return (
    <div className="App">
      <Card width="200px" height="100px" variant={CardVariant.outlined}>
        asdf
      </Card>
    </div>
  )
}

export default App
