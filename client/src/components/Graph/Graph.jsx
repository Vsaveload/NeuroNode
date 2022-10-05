import React from 'react';
import { Graph } from 'react-d3-graph';
import './Graph.css';

export default function GraphVizual({ data }) {
  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: 'black',
      fontColor: 'black',
      fontSize: 25,
      size: 200,
      highlightStrokeColor: 'black',
      highlightFontSize: 30,
      mouseCursor: 'crosshair',
    },
    link: {
      highlightColor: 'black',
    },
  };

  const onClickNode = (nodeId) => {
    console.log(`Clicked node ${nodeId}`);
  };

  const onClickLink = (source, target) => {
    console.log(`Clicked link between ${source} and ${target}`);
  };
  return (
<div className="graph">
    <Graph
      id="graph-id" // id is mandatory
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      onClickLink={onClickLink}
    />
</div>
  );
}
