import './App.css'
import Card, { CardVariant } from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <Card
        onClick={() => console.log('asdfa')}
        width="300px"
        height="300px"
        variant={CardVariant.outlined}
      ></Card>
      <Card
        onClick={() => console.log('asdfa')}
        width="300px"
        height="300px"
        variant={CardVariant.primary}
      >
        <button
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          press
        </button>
        <div>asldkfjalkf</div>
      </Card>
    </div>
  )
}

export default App
