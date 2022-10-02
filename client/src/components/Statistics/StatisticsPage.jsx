import React, { PureComponent, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
  {
    name: 'Page A',
    female: 2400,
    male: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    female: 1398,
    male: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    female: 9800,
    male: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    female: 3908,
    male: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    female: 4800,
    male: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    female: 3800,
    male: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    female: 4300,
    male: 2100,
  },
];

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

function TriangleBar(props) {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
}

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default function StatisticsPage() {
  const [projectStat, setProjectStat] = useState([]);
  const { staticId } = useParams();
  console.log(staticId);
  useEffect(() => {
    axios(`http://localhost:3001/getstat/${staticId}`)
      .then((res) => {
        setProjectStat(res.data.Statistics);
        console.log(res.data.Statistics);
      });
  }, []);
  const tempArr = [];
  const countObj = {};
  if (projectStat) {
    projectStat.forEach((el) => tempArr.push(`${el.Connection.from}-${el.Connection.to}`));
  }
  console.log(tempArr);
  if (tempArr) {
    for (let i = 0; i < tempArr.length; i++) {
      if (!countObj[tempArr[i]])countObj[tempArr[i]] = 1;
      else countObj[tempArr[i]] += 1;
    }
  }
  const newData = [];
  console.log(countObj);

  for (const key in countObj) {
    newData.push({
      name: key,
      female: countObj[key],
      male: countObj[key],
    });
  }
  console.log(newData);
  return (
      <ResponsiveContainer width="50%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={newData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
  );
}
