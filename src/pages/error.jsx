import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4 ">
      <h1 className="text-6xl text-amber-500 font-bold">404</h1>
      <h3 className="text-3xl">Page not found</h3>
      <p>The URL of the page was not found . Please try again</p>
      <div className="flex space-x-2">
        <Link to="/">
          <button className="text-white bg-amber-400 p-2 rounded-md">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
