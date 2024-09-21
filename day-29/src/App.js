import React, { useState } from 'react';
import './App.css'

function MissedGoal() {
  return <div className='missed'>Goal is Missed</div>;
}

function MadeGoal() {
  return <div className='made'>Goal is Done</div>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  return isGoal ? <MadeGoal /> : <MissedGoal />;
}

function App() {
  const [isGoal, setIsGoal] = useState(null);

  return (
    <div>
      <button onClick={() => setIsGoal(true)}>Made Goal</button>
      <button onClick={() => setIsGoal(false)}>Missed Goal</button>
      {isGoal !== null && <Goal isGoal={isGoal} />}
    </div>
  );
}

export default App;