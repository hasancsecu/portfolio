import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-950 px-4">
      <div className="text-center p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 max-w-md w-full">
        <h1 className="text-6xl font-extrabold mb-3 text-emerald-600 dark:text-emerald-400">
          404
        </h1>
        <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          Page Not Found
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          The link you followed might be broken or the page has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-all shadow-sm shadow-emerald-600/25"
        >
          Return to Portfolio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
