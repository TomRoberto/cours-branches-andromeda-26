import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <h2 style={{ backgroundColor: "gold" }}>Hello tout le monde</h2>
        <section>
          <h3>La section de Tom</h3>
          <p>J'ai bien travaillé ajd</p>
        </section>
        <section style={{ backgroundColor: "greenyellow" }}>
          <h3>La deuxième section de Tom</h3>
          <p>J'ai bien travaillé ajd</p>
        </section>
        <p>Hello</p>
      </main>
      <div style={{ backgroundColor: "pink" }}>
        Ceci est un footer qui est plus beau que celui de Tom !
      </div>
    </>
  );
}

export default App;
