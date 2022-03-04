import './App.css'
import Card, { CardVariant } from './components/Card/Card'

function App() {
  const arr = [
    { height: '300px', width: '300px', variant: CardVariant.primary },
    { height: '300px', width: '300px', variant: CardVariant.primary },
    { height: '300px', width: '300px', variant: CardVariant.primary },
    { height: '300px', width: '300px', variant: CardVariant.outlined },
  ]

  return (
    <div className="App">
      {arr.map((e, idx) => {
        return (
          <Card key={idx} width={e.width} height={e.height} variant={e.variant}>
            asdfa
          </Card>
        )
      })}
    </div>
  )
}

export default App
