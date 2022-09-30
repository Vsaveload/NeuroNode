import { Link } from 'react-router-dom';

function NoPage() {
  return (
      <>
         <h1>Page Not Found</h1>
         <h2>We could not find what you were looking for.</h2>
         <p>
            <Link to="/">Go to the home page</Link>
         </p>
      </>
  );
}

export default NoPage;
