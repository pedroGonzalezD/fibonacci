import { useState } from 'react';
import styles from './FibonacciGenerator.module.scss';

const FibonacciGenerator = () => {
  const [count, setCount] = useState(10);
  const [sequence, setSequence] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const fibonacciRecursive = (n) => {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  };

  const generateFibonacci = () => {
    let n = parseInt(count);
    if (isNaN(n) || n <= 0) {
      setSequence(['Please enter a positive number']);
      return;
    }

    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(fibonacciRecursive(i));
    }
    setSequence(result);
  };

  return (
    <div className={styles.container}>
      <h2>Fibonacci Sequence Generator</h2>
      <div className={styles.inputWrapper}>
        <input
          type="number"
          value={count}
          onChange={handleChange}
          className={styles.input}
        />
        <button onClick={generateFibonacci} className={styles.button}>
          Generate
        </button>
      </div>
      <div className={styles.result}>
        <strong>Fibonacci Sequence:</strong>
        <p>{sequence.join(', ')}</p>
      </div>
    </div>
  );
};

export default FibonacciGenerator;