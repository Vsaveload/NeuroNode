import React from 'react';
import { Button } from 'reactstrap';
import './StatisticsPage.css';

export default function StatisticsPage() {
  return (
    <div className="but">
      <Button color="secondary" size="lg" block>Вперед</Button>
      <Button color="secondary" size="lg" block className="btn">Назад</Button>
    </div>
  );
}
