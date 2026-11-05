import { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

// Pre-defined simple interconnected graph
// A -> B, C
// B -> D, E
// C -> F
// E -> F
const GRAPH_NODES = [
  { id: 'A', x: 200, y: 40, label: 'A (Root)' },
  { id: 'B', x: 100, y: 120, label: 'B' },
  { id: 'C', x: 300, y: 120, label: 'C' },
  { id: 'D', x: 50,  y: 200, label: 'D' },
  { id: 'E', x: 150, y: 200, label: 'E' },
  { id: 'F', x: 300, y: 200, label: 'F' },
];

const ADJ_LIST = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

const EDGES = [
  { from: 'A', to: 'B' },
  { from: 'A', to: 'C' },
  { from: 'B', to: 'D' },
  { from: 'B', to: 'E' },
  { from: 'C', to: 'F' },
  { from: 'E', to: 'F' },
];

export default function GraphTraversal() {
  const [mode, setMode] = useState('bfs'); // 'bfs' or 'dfs'
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [activeNode, setActiveNode] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [order, setOrder] = useState([]);
  const [message, setMessage] = useState('Select BFS or DFS and click Start Traversal.');

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const runBFS = async () => {
    setIsRunning(true);
    setVisitedNodes([]);
    setOrder([]);
    const queue = ['A'];
    const visited = new Set(['A']);
    const traversalOrder = [];

    setMessage('Starting Breadth-First Search (Level-by-Level exploration using Queue).');
    await sleep(600);

    while (queue.length > 0) {
      const current = queue.shift();
      setActiveNode(current);
      traversalOrder.push(current);
      setOrder([...traversalOrder]);
      setVisitedNodes(Array.from(visited));
      setMessage(`Visiting node ${current}. Current level processed.`);
      await sleep(750);

      const neighbors = ADJ_LIST[current] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
          setMessage(`Discovered neighbor ${neighbor}. Added to FIFO queue.`);
          await sleep(450);
        }
      }
    }

    setActiveNode(null);
    setMessage(`BFS Traversal Complete! Exploration order: ${traversalOrder.join(' ➔ ')}`);
    setIsRunning(false);
  };

  const runDFS = async () => {
    setIsRunning(true);
    setVisitedNodes([]);
    setOrder([]);
    const traversalOrder = [];
    const visited = new Set();

    setMessage('Starting Depth-First Search (Deep branch exploration using Call Stack / Recursion).');
    await sleep(600);

    const dfsRecursive = async (node) => {
      visited.add(node);
      setActiveNode(node);
      traversalOrder.push(node);
      setOrder([...traversalOrder]);
      setVisitedNodes(Array.from(visited));
      setMessage(`Deep-diving into node ${node}...`);
      await sleep(750);

      const neighbors = ADJ_LIST[node] || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          await dfsRecursive(neighbor);
        }
      }
    };

    await dfsRecursive('A');

    setActiveNode(null);
    setMessage(`DFS Traversal Complete! Exploration order: ${traversalOrder.join(' ➔ ')}`);
    setIsRunning(false);
  };

  const handleStart = () => {
    if (isRunning) return;
    if (mode === 'bfs') runBFS();
    else runDFS();
  };

  const handleReset = () => {
    setVisitedNodes([]);
    setActiveNode(null);
    setOrder([]);
    setIsRunning(false);
    setMessage('Graph reset. Ready for next exploration.');
  };

  return (
    <div className="pg-card">
      <div className="pg-controls">
        <div className="pg-ctrl-group">
          <label className="pg-label font-heading">Traversal Strategy</label>
          <div className="pg-btn-toggle">
            <button
              className={`pg-toggle-btn ${mode === 'bfs' ? 'is-active' : ''}`}
              onClick={() => { setMode('bfs'); handleReset(); }}
              disabled={isRunning}
            >
              BFS (Breadth-First / Queue)
            </button>
            <button
              className={`pg-toggle-btn ${mode === 'dfs' ? 'is-active' : ''}`}
              onClick={() => { setMode('dfs'); handleReset(); }}
              disabled={isRunning}
            >
              DFS (Depth-First / Stack)
            </button>
          </div>
        </div>

        <div className="pg-actions">
          <button onClick={handleStart} disabled={isRunning} className="btn btn-primary pg-btn">
            <Play size={15} />
            <span>{isRunning ? 'Traversing...' : 'Start Traversal'}</span>
          </button>
          <button onClick={handleReset} disabled={isRunning} className="btn btn-secondary pg-btn">
            <RotateCcw size={15} />
            <span>Reset</span>
          </button>
          {order.length > 0 && (
            <div className="pg-order-badge font-heading">
              Visited Order: {order.join(' → ')}
            </div>
          )}
        </div>
      </div>

      {/* SVG Interactive Graph Canvas */}
      <div className="pg-visual">
        <div className="pg-graph-wrapper">
          <svg className="pg-graph-svg" viewBox="0 0 400 240">
            {/* Edges */}
            {EDGES.map((edge, idx) => {
              const fromNode = GRAPH_NODES.find((n) => n.id === edge.from);
              const toNode = GRAPH_NODES.find((n) => n.id === edge.to);
              return (
                <line
                  key={idx}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="rgba(36, 41, 35, 0.15)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              );
            })}

            {/* Nodes */}
            {GRAPH_NODES.map((node) => {
              const isActive = activeNode === node.id;
              const isVisited = visitedNodes.includes(node.id);

              let fillColor = '#FFFFFF';
              let strokeColor = 'var(--border)';
              if (isActive) {
                fillColor = '#EBC6AE'; // Peach highlight
                strokeColor = '#C79373';
              } else if (isVisited) {
                fillColor = '#DCE8DC'; // Sage green
                strokeColor = '#5E8B75';
              }

              return (
                <g key={node.id} className="pg-node-group">
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={20}
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth="2.5"
                    className="pg-node-circle"
                  />
                  <text
                    x={node.x}
                    y={node.y + 5}
                    textAnchor="middle"
                    className="pg-node-text font-heading"
                  >
                    {node.id}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="pg-message font-body">
          <span className="pg-message-icon">✦</span>
          <span>{message}</span>
        </div>
      </div>

      {/* Conceptual Explanations */}
      <div className="pg-explainer font-body">
        <h4 className="font-heading">
          {mode === 'bfs' ? 'Breadth-First Search (BFS)' : 'Depth-First Search (DFS)'} Traversal:
        </h4>
        <p>
          {mode === 'bfs'
            ? 'BFS explores all neighboring nodes at the present depth before moving on to nodes at the next depth level. It utilizes a FIFO Queue and is optimal for shortest-path calculations in unweighted graphs. Time: O(V + E).'
            : 'DFS progresses by expanding the first child node of the search tree that appears and thus going deeper until a goal node is found or a node with no untraversed neighbors is reached. It uses a LIFO Stack or recursion. Time: O(V + E).'}
        </p>
      </div>
    </div>
  );
}
