import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import './StatisticsPage.css';

const getIntroOfPage = (label, namesArr) => {
  let obj = {};
  for (let i = 0; i < namesArr.length; i++) {
    obj = { ...obj, ...namesArr[i] };
  }
  if (obj[label]) {
    return `From: ${obj[label]}`;
  }

  return 'There is no transition';
};

function CustomTooltip({
  active, payload, label, namesArr,
}) {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          marginTop: '50px',
          color: 'black',
          background: 'white',
          borderRadius: '10%',
          fontSize: '1.2em',
          fontFamily: 'Arial',
          letterSpacing: '2px',
          fontWeight: 'inherit',
        }}
      >
        <p className="label">{`${label} nodes: ${payload[0].value} times`}</p>
        <p className="intro">{getIntroOfPage(label, namesArr)}</p>
      </div>
    );
  }

  return null;
}

export default function StatisticsPage({ currStat }) {
  return (
    <>
      <ResponsiveContainer width="60%" aspect={2}>
        <BarChart
          width={300}
          height={300}
          data={currStat?.newData}
          margin={{
            top: 50,
            right: 50,
            left: 0,
            bottom: 0,
          }}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip namesArr={currStat?.namesArr} />} />
          <Legend />
          <Bar dataKey="Nodes" barSize={20} fill="#ffffff" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
