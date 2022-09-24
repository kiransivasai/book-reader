import "./App.scss";
import BookRead from "./components/book-read/BookRead";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <BookRead />
      </div>
    </div>
  );
}

export default App;
