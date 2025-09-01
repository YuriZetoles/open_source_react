import "./App.css"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import projects from "./data/cards.json"


export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="cards-wrapper">
        <div className="cards-container">
          {projects.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}