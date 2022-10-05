import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardBody, CardTitle, CardText, Button, CardSubtitle,
} from 'reactstrap';
import { deleteProjectAsync } from '../../redux/action/projectActions';
import { setStatisticsAsync } from '../../redux/action/statActions';
import StatisticsPage from '../Statistics/StatisticsPage';
import './CardProjectPage.css';

export default function CardEditorPage({ project, index }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const stat = useSelector((state) => state.stat);
  const [currStat, setCurrStat] = useState([]);

  const toFirstNode = (ProjectId) => {
    const path = `/nodeviewer/${ProjectId}`;
    navigate(path);
  };
  const toEdit = (id) => {
    const path = `/myprojects/${id}`;
    navigate(path);
  };

  useEffect(() => {
    dispatch(setStatisticsAsync(project.id));
  }, []);
  useEffect(() => { setCurrStat(stat[index]); }, [stat]);
  return (
    <>
    {currStat && (
      <div className="cardPage">
  {console.log('staaaat', index)}
    <Card className="card">
  {console.log(currStat)}
      <img
        className="img"
        src={project.img}
        alt="Not provided"
      />
      <CardBody className="card-body">
        <CardTitle className="name">
          <h1>{project.name}</h1>
        </CardTitle>
        <CardSubtitle
          className="title"
        >
          <strong>Card description:</strong>
        </CardSubtitle>
        <CardText className="desc">
          {project.desc}
        </CardText>

        {user ? (
          <>
            <Button onClick={() => toFirstNode(project.id)} className="btn">Explore project</Button>
            <Button onClick={() => toEdit(project.id)} type="submit" className="btn">Edit</Button>
            <Button
              onClick={() => dispatch(deleteProjectAsync(project.id))}
              className="del"
            >
              Delete

            </Button>
          </>
        ) : (
          <Button onClick={() => toFirstNode(project.id)}>Explore project</Button>
        )}

      </CardBody>

    </Card>

    <StatisticsPage currStat={currStat} />
      </div>
    )}
    </>
  );
}
