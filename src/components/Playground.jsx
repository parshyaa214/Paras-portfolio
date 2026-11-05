import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ArrowUpDown, Layers, Share2, Sparkles } from 'lucide-react';
import Searching from './playground/Searching';
import Sorting from './playground/Sorting';
import StackQueue from './playground/StackQueue';
import GraphTraversal from './playground/GraphTraversal';
import './Playground.css';

const TABS = [
  { id: 'searching', label: 'Searching', icon: Search, desc: 'Linear & Binary Search' },
  { id: 'sorting', label: 'Sorting', icon: ArrowUpDown, desc: 'Bubble, Selection & Insertion' },
  { id: 'stackqueue', label: 'Stack & Queue', icon: Layers, desc: 'LIFO & FIFO Mechanics' },
  { id: 'graph', label: 'Graph Algorithms', icon: Share2, desc: 'BFS & DFS Traversal' },
];

export default function Playground() {
  const [activeTab, setActiveTab] = useState('sorting');

  return (
    <section id="playground" className="section-wrapper editorial-playground">
      <div className="container">
        {/* Section Header */}
        <div className="editorial-playground__header">
          <p className="section-label">Interactive Computer Science</p>
          <div className="editorial-playground__header-row">
            <h2 className="section-heading">
              Let's explore how logic works.
            </h2>
            <p className="editorial-playground__intro font-body">
              A hands-on, live interactive sandbox where algorithmic concepts come alive.
              Experiment with array mutations, data structures, and graph traversals in real-time.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="editorial-playground__tabs" role="tablist" aria-label="Algorithms Tabs">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`editorial-playground__tab ${isActive ? 'is-active' : ''}`}
              >
                <div className="editorial-playground__tab-icon">
                  <Icon size={18} />
                </div>
                <div className="editorial-playground__tab-text">
                  <span className="editorial-playground__tab-label font-heading">{tab.label}</span>
                  <span className="editorial-playground__tab-desc font-body">{tab.desc}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Sandbox Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="editorial-playground__content"
        >
          {activeTab === 'searching' && <Searching />}
          {activeTab === 'sorting' && <Sorting />}
          {activeTab === 'stackqueue' && <StackQueue />}
          {activeTab === 'graph' && <GraphTraversal />}
        </motion.div>
      </div>
    </section>
  );
}
