import React from 'react';
import { Graph } from 'react-d3-graph';

export default function GraphVizual() {
  // graph payload (with minimalist structure)
  const data = {
    nodes: [{ id: 'Harry' }, { id: 'Sally' }, { id: 'Alice' }],
    links: [
      { source: 'Harry', target: 'Sally' },
      { source: 'Harry', target: 'Alice' },
    ],
  };

  // the graph configuration, just override the ones you need
  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: 'lightgreen',
      size: 120,
      highlightStrokeColor: 'blue',
    },
    link: {
      highlightColor: 'lightblue',
    },
  };

  const onClickNode = (nodeId) => {
    console.log(`Clicked node ${nodeId}`);
  };

  const onClickLink = (source, target) => {
    console.log(`Clicked link between ${source} and ${target}`);
  };
  return (
    <div>

      <Graph
        id="graph-id" // id is mandatory
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />
      ;

    </div>
  );
}
