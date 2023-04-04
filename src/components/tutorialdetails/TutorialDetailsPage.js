import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {detailedTutorial} from '../../states/actions/tutorialActions';


const TutorialDetailsPage = () => {
    const tutorialDetails = useSelector(state => state.tutorial);
    const { loading, error, tutorial } = tutorialDetails;
  console.log(tutorial);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
 
  return (
    <div>TutorialDetailsPage</div>
  )
}

export default TutorialDetailsPage
