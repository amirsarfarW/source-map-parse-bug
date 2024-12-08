import './App.css';

const App = () => {
  const p = {};
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      {p.map((i) => (
        <div key={i}>test</div>
      ))}
    </div>
  );
};

export default App;
