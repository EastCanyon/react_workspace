import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <h3>NoMatch</h3>
      <Link to='/'>go to home</Link>
    </div>
  );
};

export default NoMatch;
