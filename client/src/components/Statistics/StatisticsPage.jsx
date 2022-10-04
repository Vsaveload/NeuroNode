import axios from 'axios';
import React, { PureComponent, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
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

export default function StatisticsPage({ projectStat, projectStatName }) {
  const navigate = useNavigate();
  const toProject = () => {
    const path = '/myprojects/';
    navigate(path);
  };
  return (
    <>
      <ResponsiveContainer width="60%" aspect={2}>
        <BarChart
          width={300}
          height={300}
          data={projectStat}
          margin={{
            top: 5,
            right: 50,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip namesArr={projectStatName} />} />
          <Legend />
          <Bar dataKey="Nodes" barSize={20} fill="#ffffff" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
