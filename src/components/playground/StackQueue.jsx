import { useState } from 'react';
import { Plus, Minus, RotateCcw, ArrowDown, ArrowUp } from 'lucide-react';

export default function StackQueue() {
  const [mode, setMode] = useState('stack'); // 'stack' or 'queue'
  const [items, setItems] = useState([24, 56, 89]);
  const [inputValue, setInputValue] = useState(42);
  const [message, setMessage] = useState('Stack uses LIFO (Last In, First Out). Queue uses FIFO (First In, First Out).');

  const handlePushEnqueue = () => {
    if (items.length >= 7) {
      setMessage('Maximum demo capacity reached (7 items). Pop or dequeue an item first.');
      return;
    }
    const val = inputValue;
    if (mode === 'stack') {
      setItems([...items, val]);
      setMessage(`Pushed ${val} onto top of Stack.`);
    } else {
      setItems([...items, val]);
      setMessage(`Enqueued ${val} at the rear of Queue.`);
    }
    setInputValue(Math.floor(Math.random() * 80) + 10);
  };

  const handlePopDequeue = () => {
    if (items.length === 0) {
      setMessage(`Cannot remove from an empty ${mode === 'stack' ? 'Stack (Stack Underflow)' : 'Queue (Queue Underflow)'}.`);
      return;
    }

    if (mode === 'stack') {
      const removed = items[items.length - 1];
      setItems(items.slice(0, -1));
      setMessage(`Popped ${removed} from top of Stack (LIFO).`);
    } else {
      const removed = items[0];
      setItems(items.slice(1));
      setMessage(`Dequeued ${removed} from front of Queue (FIFO).`);
    }
  };

  const handleClear = () => {
    setItems([]);
    setMessage(`Cleared all items from ${mode}.`);
  };

  return (
    <div className="pg-card">
      <div className="pg-controls">
        <div className="pg-ctrl-group">
          <label className="pg-label font-heading">Data Structure Mode</label>
          <div className="pg-btn-toggle">
            <button
              className={`pg-toggle-btn ${mode === 'stack' ? 'is-active' : ''}`}
              onClick={() => { setMode('stack'); setMessage('Switched to Stack (LIFO). Push & Pop operate at the TOP.'); }}
            >
              Stack (LIFO)
            </button>
            <button
              className={`pg-toggle-btn ${mode === 'queue' ? 'is-active' : ''}`}
              onClick={() => { setMode('queue'); setMessage('Switched to Queue (FIFO). Enqueue at Rear, Dequeue from Front.'); }}
            >
              Queue (FIFO)
            </button>
          </div>
        </div>

        <div className="pg-ctrl-row">
          <div className="pg-actions" style={{ flex: 1 }}>
            <div className="pg-inline-input">
              <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(parseInt(e.target.value, 10) || 0)}
                className="pg-input font-body"
                style={{ width: 90 }}
              />
              <button onClick={handlePushEnqueue} className="btn btn-primary pg-btn">
                <Plus size={15} />
                <span>{mode === 'stack' ? 'Push (Top)' : 'Enqueue (Rear)'}</span>
              </button>
            </div>

            <button onClick={handlePopDequeue} className="btn btn-secondary pg-btn">
              <Minus size={15} />
              <span>{mode === 'stack' ? 'Pop (Top)' : 'Dequeue (Front)'}</span>
            </button>

            <button onClick={handleClear} className="btn btn-secondary pg-btn">
              <RotateCcw size={15} />
              <span>Clear</span>
            </button>
          </div>
        </div>
      </div>

      {/* Visual Canvas */}
      <div className="pg-visual">
        {mode === 'stack' ? (
          /* Vertical Stack Visual */
          <div className="pg-stack-container">
            <div className="pg-stack-label-top font-heading">
              <span>▲ TOP</span>
            </div>
            <div className="pg-stack-bucket">
              {items.length === 0 ? (
                <div className="pg-empty-state font-body">Stack is Empty</div>
              ) : (
                [...items].reverse().map((val, idx) => (
                  <div key={idx} className="pg-stack-plate">
                    <span className="font-heading">{val}</span>
                    {idx === 0 && <span className="pg-pill font-heading">TOP</span>}
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          /* Horizontal Queue Visual */
          <div className="pg-queue-container">
            <div className="pg-queue-endpoint font-heading">
              <span className="pg-queue-tag">FRONT</span>
              <span className="pg-queue-arrow">◀ Dequeue</span>
            </div>

            <div className="pg-queue-track">
              {items.length === 0 ? (
                <div className="pg-empty-state font-body">Queue is Empty</div>
              ) : (
                items.map((val, idx) => (
                  <div key={idx} className="pg-queue-item">
                    <span className="font-heading">{val}</span>
                    <span className="pg-queue-sub font-body">[{idx}]</span>
                  </div>
                ))
              )}
            </div>

            <div className="pg-queue-endpoint font-heading">
              <span className="pg-queue-tag">REAR</span>
              <span className="pg-queue-arrow">Enqueue ▶</span>
            </div>
          </div>
        )}

        <div className="pg-message font-body">
          <span className="pg-message-icon">✦</span>
          <span>{message}</span>
        </div>
      </div>

      {/* Conceptual Explanations */}
      <div className="pg-explainer font-body">
        <h4 className="font-heading">
          {mode === 'stack' ? 'Stack (Last In, First Out)' : 'Queue (First In, First Out)'}
        </h4>
        <p>
          {mode === 'stack'
            ? 'A Stack operates like a stack of plates. Items are pushed and popped exclusively from the top. Used extensively in call stack execution, undo mechanisms, and depth-first traversals. All operations are O(1).'
            : 'A Queue functions like a ticket counter queue where the first person in line is served first. Items enter at the rear and exit from the front. Essential for task scheduling, breadth-first search, and asynchronous event loops. All operations are O(1).'}
        </p>
      </div>
    </div>
  );
}
