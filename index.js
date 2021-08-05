const { useState } = React
var first = ''
function App() {
  
  const [prevOperand, setprevOperand] = useState('');
  const [currentOperand, setcurrentOperand] = useState('0');
  const [operation, setOperation] = useState('');

  function clear() {
    setcurrentOperand('0');
    setprevOperand('');
    setOperation('')
  }

  function compute() {
    let prev = parseFloat(prevOperand);
    let current = parseFloat(currentOperand);
    //console.log(prevOperand);
    //console.log(currentOperand);
    if(isNaN(prev) || isNaN(current)) return; 
    let computation
    
    if(operation!=='-') {
      switch(operation) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '/':
          computation = prev / current;
          break;
        default: return
      }
    } else {
      current = 0 - parseFloat(currentOperand);
      if(isNaN(prev) || isNaN(current)) return;
      switch(first) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev + current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '/':
          computation = prev / current;
          break;
        default: return
      }
    }
    
    setcurrentOperand(computation);
    setprevOperand('');
  }

  function calc() {
    console.log(operation)
    
    let prev = parseFloat(prevOperand);
    let current = parseFloat(currentOperand);
    //console.log(prevOperand);
    //console.log(currentOperand);
    if(isNaN(prev) || isNaN(current)) return; 
    let computation
    switch(operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default: return
    }
    setprevOperand(computation);
    setcurrentOperand('');
  }

  function appendNumber(symbol) {
    if(symbol === '.' && currentOperand.includes('.')) return
    //currentOperand = currentOperand.replace(/^0+/, '');
    setcurrentOperand(prev => {
      prev =  prev + symbol;
      if(prev==='00') prev = prev.replace(/^0+/, '0');
      else prev = prev.replace(/^0+/, '')
      return prev;
    });
  }

  function chooseOperation(operation) {
    setOperation(operation);
    setprevOperand ( prev => {
      console.log(operation)
      return prev + operation
    } )
    if(currentOperand!=='') {
      setprevOperand(currentOperand);
      setprevOperand ( prev => {
        first = operation
        return prev + operation
      } )
      setcurrentOperand('');
    }
    if (prevOperand !== '' && currentOperand!=='') {
      calc();
    }
  }

  return (
    <div className="App">
      <div id="calculator">Calculator

        <div id="display" className="output">
          <div style={{color:"red"}} className="previous-operand">{prevOperand}</div>
          <div className="current-operand" >{currentOperand}</div>
        </div>

        <button id="clear" onClick={() => clear()} data-all-clear className="span-two">AC</button>
        <button id="divide" onClick={() => chooseOperation('/')} data-operation>/</button>
        <button id="one" onClick={() => appendNumber('1')} data-number>1</button>
        <button id="two" onClick={() => appendNumber('2')} data-number>2</button>
        <button id="three" onClick={() => appendNumber('3')} data-number>3</button>
        <button id="multiply" onClick={() => chooseOperation('*')} data-operation>*</button>
        <button id="four" onClick={() => appendNumber('4')} data-number>4</button>
        <button id="five" onClick={() => appendNumber('5')} data-number>5</button>
        <button id="six" onClick={() => appendNumber('6')} data-number>6</button>
        <button id="add" onClick={() => chooseOperation('+')} data-operation>+</button>
        <button id="seven" onClick={() => appendNumber('7')} data-number>7</button>
        <button id="eight" onClick={() => appendNumber('8')} data-number>8</button>
        <button id="nine" onClick={() => appendNumber('9')} data-number>9</button>
        <button id="subtract" onClick={() => chooseOperation('-')} data-operation>-</button>
        <button id="decimal" onClick={() => appendNumber('.')} data-number>.</button>
        <button id="zero" onClick={() => appendNumber('0')} data-number>0</button>
        <button id="equals" onClick={() => compute()} data-equals className="span-two">=</button>
      </div>
    </div>
  );
}

 
ReactDOM.render(<App/>, document.getElementById('root'));