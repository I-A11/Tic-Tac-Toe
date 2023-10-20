function App() {
  return (
    <div className="app">
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square last">3</button>
      </div>
      <div className="board-row">
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square last">6</button>
      </div>
      <div className="board-row">
        <button className="square bottom">7</button>
        <button className="square bottom">8</button>
        <button className="square last bottom">9</button>
      </div>
    </div>
  );
}

export default App;
