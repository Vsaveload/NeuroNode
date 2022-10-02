import axios from 'axios';
import React, { PureComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const getIntroOfPage = (label, namesArr) => {
  let obj = {};
  for (let i = 0; i < namesArr.length; i++) {
    obj = { ...obj, ...namesArr[i] };
  }
  if (obj[label]) {
    return `Переходы из ноды: ${obj[label]}`;
  }

  return '';
};

function CustomTooltip({
  active, payload, label, namesArr,
}) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label, namesArr)}</p>
      </div>
    );
  }

  return null;
}

export default function StatisticsPage() {
  const [projectStat, setProjectStat] = useState([]);
  const [projectStatName, setProjectStatName] = useState([]);
  const { staticId } = useParams();
  console.log(staticId);
  useEffect(() => {
    axios(`http://localhost:3001/stat/byid/${staticId}`)
      .then((res) => {
        console.log('ПОСЛЕ ФЕЧА', res.data);
        setProjectStat(res.data.newData);
        setProjectStatName(res.data.namesArr);
      });
  }, []);

  return (
      <ResponsiveContainer width="40%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={projectStat}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip namesArr={projectStatName} />} />
          <Legend />
          <Bar dataKey="Nodes" barSize={10} fill="#000000" />
        </BarChart>
      </ResponsiveContainer>
  );
}
