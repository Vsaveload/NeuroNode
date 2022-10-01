import axios from 'axios';
import React, { useEffect } from 'react';

export default function StatisticsPage() {
  useEffect(() => {
    axios('http://localhost:3001/getstat')
      .then((data) => console.log(data.data));
  });
  return (
    <div>StatisticsPage</div>
  );
}
