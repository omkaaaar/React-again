import Counter from './Components/Counter'
import ShowHide from './Components/ShowHide'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <section className="pane pane-counter">
        <Counter />
      </section>
      <section className="pane pane-showhide">
        <ShowHide />
      </section>
    </div>
  )
}

export default App
