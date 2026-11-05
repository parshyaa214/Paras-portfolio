import { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw, Shuffle, Sparkles } from 'lucide-react';

const ARRAY_SIZE = 14;

export default function Sorting() {
  const [array, setArray] = useState([45, 12, 85, 32, 89, 21, 67, 95, 38, 54, 18, 76, 61, 29]);
  const [algorithm, setAlgorithm] = useState('bubble');
  const [activeIndices, setActiveIndices] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(250);
  const [message, setMessage] = useState('Select an algorithm and click Start Sorting.');
  const isPausedRef = useRef(false);
  const stopRef = useRef(false);

  const generateRandomArray = () => {
    if (isSorting) return;
    const newArr = Array.from({ length: ARRAY_SIZE }, () => Math.floor(Math.random() * 85) + 12);
    setArray(newArr);
    setActiveIndices([]);
    setSortedIndices([]);
    setMessage('Generated new random array. Ready to sort.');
  };

  const sleep = (ms) => {
    return new Promise((resolve) => {
      const check = () => {
        if (stopRef.current) {
          resolve(false);
          return;
        }
        if (!isPausedRef.current) {
          setTimeout(() => resolve(true), ms);
        } else {
          setTimeout(check, 100);
        }
      };
      check();
    });
  };

  const bubbleSort = async () => {
    const arr = [...array];
    const n = arr.length;
    const sorted = [];

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (stopRef.current) return;
        setActiveIndices([j, j + 1]);
        setMessage(`Comparing ${arr[j]} and ${arr[j + 1]}...`);
        const cont = await sleep(speed);
        if (!cont) return;

        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          setMessage(`Swapped ${arr[j + 1]} with ${arr[j]}.`);
          const cont2 = await sleep(speed);
          if (!cont2) return;
        }
      }
      sorted.push(n - i - 1);
      setSortedIndices([...sorted]);
    }
    sorted.push(0);
    setSortedIndices([...sorted]);
    setActiveIndices([]);
    setMessage('Bubble sort complete! All values sorted in ascending order.');
    setIsSorting(false);
  };

  const selectionSort = async () => {
    const arr = [...array];
    const n = arr.length;
    const sorted = [];

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (stopRef.current) return;
        setActiveIndices([minIdx, j]);
        setMessage(`Scanning index ${j} (${arr[j]}). Current minimum is at ${minIdx} (${arr[minIdx]}).`);
        const cont = await sleep(speed);
        if (!cont) return;

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
          setActiveIndices([minIdx, j]);
        }
      }

      if (minIdx !== i) {
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        setArray([...arr]);
        setMessage(`Placed smallest found element (${arr[i]}) at position ${i}.`);
        const cont2 = await sleep(speed);
        if (!cont2) return;
      }
      sorted.push(i);
      setSortedIndices([...sorted]);
    }
    sorted.push(n - 1);
    setSortedIndices([...sorted]);
    setActiveIndices([]);
    setMessage('Selection sort complete! Array fully organized.');
    setIsSorting(false);
  };

  const insertionSort = async () => {
    const arr = [...array];
    const n = arr.length;
    const sorted = [0];
    setSortedIndices([...sorted]);

    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      setActiveIndices([i]);
      setMessage(`Picking element ${key} at index ${i} to insert into sorted sub-array.`);
      const cont = await sleep(speed);
      if (!cont) return;

      while (j >= 0 && arr[j] > key) {
        if (stopRef.current) return;
        setActiveIndices([j, j + 1]);
        arr[j + 1] = arr[j];
        setArray([...arr]);
        setMessage(`Shifted ${arr[j]} right.`);
        j--;
        const cont2 = await sleep(speed);
        if (!cont2) return;
      }

      arr[j + 1] = key;
      setArray([...arr]);
      sorted.push(i);
      setSortedIndices([...sorted]);
      setMessage(`Inserted ${key} at index ${j + 1}.`);
      const cont3 = await sleep(speed);
      if (!cont3) return;
    }

    setActiveIndices([]);
    setMessage('Insertion sort complete!');
    setIsSorting(false);
  };

  const handleStart = () => {
    if (isSorting) return;
    stopRef.current = false;
    isPausedRef.current = false;
    setIsSorting(true);
    setSortedIndices([]);

    if (algorithm === 'bubble') bubbleSort();
    else if (algorithm === 'selection') selectionSort();
    else if (algorithm === 'insertion') insertionSort();
  };

  const handlePauseResume = () => {
    isPausedRef.current = !isPausedRef.current;
    setMessage(isPausedRef.current ? 'Sorting paused. Press resume to continue.' : 'Resuming sort execution...');
  };

  const handleReset = () => {
    stopRef.current = true;
    isPausedRef.current = false;
    setIsSorting(false);
    setActiveIndices([]);
    setSortedIndices([]);
    generateRandomArray();
  };

  return (
    <div className="pg-card">
      <div className="pg-controls">
        <div className="pg-ctrl-group">
          <label className="pg-label font-heading">Sorting Algorithm</label>
          <div className="pg-btn-toggle">
            <button
              className={`pg-toggle-btn ${algorithm === 'bubble' ? 'is-active' : ''}`}
              onClick={() => { setAlgorithm('bubble'); handleReset(); }}
              disabled={isSorting}
            >
              Bubble Sort
            </button>
            <button
              className={`pg-toggle-btn ${algorithm === 'selection' ? 'is-active' : ''}`}
              onClick={() => { setAlgorithm('selection'); handleReset(); }}
              disabled={isSorting}
            >
              Selection Sort
            </button>
            <button
              className={`pg-toggle-btn ${algorithm === 'insertion' ? 'is-active' : ''}`}
              onClick={() => { setAlgorithm('insertion'); handleReset(); }}
              disabled={isSorting}
            >
              Insertion Sort
            </button>
          </div>
        </div>

        <div className="pg-ctrl-row">
          <div className="pg-actions" style={{ flex: 1 }}>
            {!isSorting ? (
              <button onClick={handleStart} className="btn btn-primary pg-btn">
                <Play size={15} />
                <span>Start Sorting</span>
              </button>
            ) : (
              <button onClick={handlePauseResume} className="btn btn-primary pg-btn">
                <Pause size={15} />
                <span>{isPausedRef.current ? 'Resume' : 'Pause'}</span>
              </button>
            )}

            <button onClick={generateRandomArray} disabled={isSorting} className="btn btn-secondary pg-btn">
              <Shuffle size={15} />
              <span>Randomize</span>
            </button>

            <button onClick={handleReset} className="btn btn-secondary pg-btn">
              <RotateCcw size={15} />
              <span>Reset</span>
            </button>
          </div>

          <div className="pg-ctrl-group" style={{ width: 170 }}>
            <label className="pg-label font-heading">Speed: {speed}ms</label>
            <input
              type="range"
              min="60"
              max="500"
              step="30"
              value={speed}
              onChange={(e) => setSpeed(parseInt(e.target.value, 10))}
              className="pg-slider"
            />
          </div>
        </div>
      </div>

      {/* Animated Array Bars Display */}
      <div className="pg-visual">
        <div className="pg-bars-container">
          {array.map((val, idx) => {
            const isActive = activeIndices.includes(idx);
            const isSorted = sortedIndices.includes(idx);

            let barColor = 'var(--sage)';
            if (isActive) barColor = 'var(--peach)';
            else if (isSorted) barColor = '#4E735B';

            return (
              <div key={idx} className="pg-bar-col">
                <span className="pg-bar-val font-heading">{val}</span>
                <div
                  className={`pg-bar ${isActive ? 'is-active' : ''} ${isSorted ? 'is-sorted' : ''}`}
                  style={{
                    height: `${val * 2.2}px`,
                    backgroundColor: barColor,
                  }}
                />
                <span className="pg-bar-idx font-body">{idx}</span>
              </div>
            );
          })}
        </div>

        <div className="pg-message font-body">
          <span className="pg-message-icon">✦</span>
          <span>{message}</span>
        </div>
      </div>

      {/* Conceptual Explanations */}
      <div className="pg-explainer font-body">
        <h4 className="font-heading">
          Understanding {algorithm.charAt(0).toUpperCase() + algorithm.slice(1)} Sort:
        </h4>
        <p>
          {algorithm === 'bubble' &&
            'Bubble Sort compares adjacent elements and swaps them if they are in the wrong order. With each pass, the largest unsorted element "bubbles" to its final position at the end. Time: O(n²), Space: O(1).'}
          {algorithm === 'selection' &&
            'Selection Sort scans the unsorted section of the array to find the minimum value, then swaps it into the beginning of the list. Time: O(n²), Space: O(1).'}
          {algorithm === 'insertion' &&
            'Insertion Sort builds the final sorted array one item at a time, picking the next element and shifting existing sorted items right until the correct placement spot is found. Time: O(n²), Space: O(1).'}
        </p>
      </div>
    </div>
  );
}
