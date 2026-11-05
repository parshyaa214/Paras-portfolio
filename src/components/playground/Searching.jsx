import { useState } from 'react';
import { Play, RotateCcw, Search, CheckCircle } from 'lucide-react';

const INITIAL_ARRAY = [12, 28, 35, 47, 59, 68, 74, 83, 91, 99];

export default function Searching() {
  const [arrayStr, setArrayStr] = useState(INITIAL_ARRAY.join(', '));
  const [target, setTarget] = useState(68);
  const [algorithm, setAlgorithm] = useState('linear');
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [lowIdx, setLowIdx] = useState(-1);
  const [highIdx, setHighIdx] = useState(-1);
  const [foundIndex, setFoundIndex] = useState(-1);
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState('Enter a target number and press Start Search.');
  const [comparisonCount, setComparisonCount] = useState(0);

  const getArray = () => {
    return arrayStr
      .split(',')
      .map((n) => parseInt(n.trim(), 10))
      .filter((n) => !isNaN(n));
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const runLinearSearch = async () => {
    const arr = getArray();
    setSearching(true);
    setFoundIndex(-1);
    setLowIdx(-1);
    setHighIdx(-1);
    let comps = 0;

    for (let i = 0; i < arr.length; i++) {
      comps++;
      setComparisonCount(comps);
      setCurrentIndex(i);
      setMessage(`Step ${i + 1}: Checking element at index ${i} (${arr[i]})...`);
      await sleep(550);

      if (arr[i] === target) {
        setFoundIndex(i);
        setMessage(`Success! Found target ${target} at index ${i} in ${comps} comparisons.`);
        setSearching(false);
        return;
      }
    }

    setMessage(`Target ${target} was not found in the array after ${comps} comparisons.`);
    setSearching(false);
  };

  const runBinarySearch = async () => {
    const raw = getArray();
    // Binary search requires a sorted array
    const arr = [...raw].sort((a, b) => a - b);
    setArrayStr(arr.join(', '));

    setSearching(true);
    setFoundIndex(-1);
    let low = 0;
    let high = arr.length - 1;
    let comps = 0;

    while (low <= high) {
      comps++;
      setComparisonCount(comps);
      setLowIdx(low);
      setHighIdx(high);

      const mid = Math.floor((low + high) / 2);
      setCurrentIndex(mid);
      setMessage(`Low=${low}, High=${high}. Checking middle index ${mid} (${arr[mid]})...`);
      await sleep(650);

      if (arr[mid] === target) {
        setFoundIndex(mid);
        setMessage(`Success! Target ${target} found at sorted index ${mid} in only ${comps} comparisons.`);
        setSearching(false);
        return;
      }

      if (arr[mid] < target) {
        setMessage(`${arr[mid]} is less than ${target}. Eliminating left half (moving low to ${mid + 1}).`);
        low = mid + 1;
      } else {
        setMessage(`${arr[mid]} is greater than ${target}. Eliminating right half (moving high to ${mid - 1}).`);
        high = mid - 1;
      }
      await sleep(500);
    }

    setMessage(`Target ${target} was not found within the search bounds.`);
    setSearching(false);
  };

  const handleStart = () => {
    if (searching) return;
    setComparisonCount(0);
    if (algorithm === 'linear') {
      runLinearSearch();
    } else {
      runBinarySearch();
    }
  };

  const handleReset = () => {
    setCurrentIndex(-1);
    setLowIdx(-1);
    setHighIdx(-1);
    setFoundIndex(-1);
    setSearching(false);
    setComparisonCount(0);
    setMessage('Playground reset. Ready to search.');
  };

  const currentArray = getArray();

  return (
    <div className="pg-card">
      <div className="pg-controls">
        <div className="pg-ctrl-group">
          <label className="pg-label font-heading">Search Algorithm</label>
          <div className="pg-btn-toggle">
            <button
              className={`pg-toggle-btn ${algorithm === 'linear' ? 'is-active' : ''}`}
              onClick={() => { setAlgorithm('linear'); handleReset(); }}
              disabled={searching}
            >
              Linear Search (O(n))
            </button>
            <button
              className={`pg-toggle-btn ${algorithm === 'binary' ? 'is-active' : ''}`}
              onClick={() => { setAlgorithm('binary'); handleReset(); }}
              disabled={searching}
            >
              Binary Search (O(log n))
            </button>
          </div>
        </div>

        <div className="pg-ctrl-row">
          <div className="pg-ctrl-group" style={{ flex: 1 }}>
            <label className="pg-label font-heading">Search Array</label>
            <input
              type="text"
              value={arrayStr}
              onChange={(e) => setArrayStr(e.target.value)}
              disabled={searching}
              className="pg-input font-body"
            />
          </div>

          <div className="pg-ctrl-group" style={{ width: 130 }}>
            <label className="pg-label font-heading">Target Number</label>
            <input
              type="number"
              value={target}
              onChange={(e) => setTarget(parseInt(e.target.value, 10) || 0)}
              disabled={searching}
              className="pg-input font-body"
            />
          </div>
        </div>

        <div className="pg-actions">
          <button
            onClick={handleStart}
            disabled={searching}
            className="btn btn-primary pg-btn"
          >
            <Play size={15} />
            <span>{searching ? 'Searching...' : 'Start Search'}</span>
          </button>
          <button
            onClick={handleReset}
            disabled={searching}
            className="btn btn-secondary pg-btn"
          >
            <RotateCcw size={15} />
            <span>Reset</span>
          </button>
          {comparisonCount > 0 && (
            <span className="pg-badge font-heading">
              {comparisonCount} Comparison{comparisonCount > 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>

      {/* Array Visual Display */}
      <div className="pg-visual">
        <div className="pg-boxes-row">
          {currentArray.map((val, idx) => {
            let stateClass = '';
            if (idx === foundIndex) stateClass = 'is-found';
            else if (idx === currentIndex) stateClass = 'is-active';
            else if (algorithm === 'binary' && (idx < lowIdx || (highIdx !== -1 && idx > highIdx))) {
              stateClass = 'is-dimmed';
            }

            return (
              <div key={idx} className={`pg-box ${stateClass}`}>
                <span className="pg-box-val font-heading">{val}</span>
                <span className="pg-box-idx font-body">[{idx}]</span>
              </div>
            );
          })}
        </div>

        {/* Narrative Live Status Message */}
        <div className="pg-message font-body">
          <span className="pg-message-icon">✦</span>
          <span>{message}</span>
        </div>
      </div>

      {/* Conceptual Explanation */}
      <div className="pg-explainer font-body">
        <h4 className="font-heading">How {algorithm === 'linear' ? 'Linear' : 'Binary'} Search Works:</h4>
        <p>
          {algorithm === 'linear'
            ? 'Linear Search checks every single item in the array sequentially from left to right until the target is found or the end is reached. Best case: O(1), Worst case: O(n).'
            : 'Binary Search repeatedly divides a sorted search interval in half. By comparing the target with the middle element, it eliminates 50% of the remaining elements in each step, achieving rapid O(log n) performance.'}
        </p>
      </div>
    </div>
  );
}
