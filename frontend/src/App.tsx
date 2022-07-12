import Header from "./componentes/Header"
import SalesCard from "./componentes/SalesCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="sales-analysis-container">
            <SalesCard />

          </div>
        </section>
      </main>

    </>
  )
}

export default App
