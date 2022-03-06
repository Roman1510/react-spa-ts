import './App.css'
import Card, { CardVariant } from './components/Card/Card'

function App() {
  const arr = [
    { height: '30px', width: '30px', variant: CardVariant.primary },
    { height: '30px', width: '30px', variant: CardVariant.primary },
    { height: '30px', width: '30px', variant: CardVariant.primary },
    { height: '30px', width: '30px', variant: CardVariant.outlined },
    { height: '30px', width: '30px', variant: CardVariant.outlined },
    { height: '30px', width: '30px', variant: CardVariant.outlined },
    { height: '30px', width: '30px', variant: CardVariant.outlined },
    { height: '30px', width: '30px', variant: CardVariant.outlined },
    { height: '30px', width: '30px', variant: CardVariant.outlined },
  ]

  return (
    <div className="App">
      {arr.map((e, idx) => {
        return (
          <Card
            key={idx}
            width={e.width}
            height={e.height}
            variant={e.variant}
          ></Card>
        )
      })}
    </div>
  )
}

export default App
