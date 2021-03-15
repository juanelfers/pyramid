import { useEffect, useState } from 'react';
import './App.css';
import { getFastest } from './services/pyramid';

const p = `
1
5 3
1 4 9
7 8 5 1
6 4 2 1 8
7 1 7 9 2 4
5 3 4 1 8 6 9
9 7 1 2 5 7 6 5
4 7 5 2 8 3 6 9 1
8 2 3 7 9 2 1 5 4 3
7 5 8 9 3 4 1 5 7 4 2
9 9 7 6 8 1 2 7 6 9 4 3
2 4 9 7 5 3 7 8 1 5 4 3 1
7 6 8 5 4 8 9 3 2 1 4 7 8 9
9 7 3 8 7 5 1 2 6 5 6 4 3 3 1
`.trim().split('\n');

function App() {
  const [input, setInput] = useState('');
  const [pyramid, setPyramid] = useState(null);
  const [pos, setPos] = useState(0);
  const [intv, setIntv] = useState(null);

  const parse = () => {
    setPyramid(getFastest(input));
  };

  const click = () => {
    if (intv) {
      clearInterval(intv);
      setIntv(null);
    } else {
      timer(pos);
    }
  };

  const timer = (pos) => {
    let newPos = pos;

    setIntv(setInterval(() => {
      newPos++;
      if (newPos === p.length) {
        newPos = 1;
      }
      setPos(newPos);

      const input = p.slice(0, newPos).join('\n');
      console.log('input', input)
      setPyramid(getFastest(input));
    }, 500));

    return () => clearInterval(intv);
  };

  useEffect(() => timer(pos), []);

  let position = 0;

  return (
    <div className="App">
      {/*<textarea value={input} onChange={event => setInput(event.target.value)}></textarea>
      <button onClick={parse}>Parse</button>*/}

      {pyramid && (
        <>
          <button onClick={click}>{intv ? 'Pause' : 'Play'}</button>
          <h1>{pyramid.min}</h1>
          {pyramid.input.map((row, index) => {
            if (index && pyramid.path[index - 1] === 'right') {
              position++;
            }

            return (
              <div className="row">
                {row.map((number, index) => {
                  const selected = position === index;
                  const style = { 
                    color: selected && 'blue',
                    fontWeight: selected && 'bold'
                  }
                  return (
                    <div className="number" style={style}>
                      {number}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </>
      )}

    </div>
  );
}







export default App;
