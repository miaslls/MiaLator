import './App.css';

function App() {
  return (
    <>
      <h1>MiaLator</h1>
      <div className='calculator'>
        <div className='display'>0</div>
        <div className='buttons'>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className='operator'>/</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className='operator'>*</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className='operator'>-</button>
          <button className='zero'>0</button>
          <button>C</button>
          <button className='operator'>+</button>
          <button className='equals'>=</button>
        </div>
      </div>
      <p style={{ textAlign: 'right', paddingRight: '10px' }}>0.1.0-alpha</p>
    </>
  );
}

export default App;
