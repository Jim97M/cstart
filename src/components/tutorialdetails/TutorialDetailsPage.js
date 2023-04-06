import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {detailedTutorial} from '../../states/actions/tutorialActions';


const TutorialDetailsPage = () => {
    const tutorialDetails  = useSelector((state) => state.tutorialDetails);
   const { loading, error, tutorial } =  tutorialDetails;
  console.log("Tutorial Details Is",  tutorialDetails);
 
  // const {loading, error, tutorial} = detailedTutorial();
 
  return (
    <div>
      <div>
        <Link to="/moduleshomepage">Back to Homepage</Link>
      </div>
      {loading ? (
        <div> Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) :  ( 
      <div>
        <h2>{tutorial.tutorial_name} </h2>
        <p>{tutorial.tutorial_description} </p>
        <p> {tutorial.tutorial_duration} </p>
      </div>
      )}
    </div>
  )
}

export default TutorialDetailsPage
