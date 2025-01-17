const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 text-center">
      <div>
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="text-muted mb-4">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <a
          href="https://ecsaio.in/internship"
          className="btn btn-sm btn-primary btn-lg"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
