import "./NetworkError.css";

const NetworkErrorPage = ({ error }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="network-error-page">
      <div className="error-message">
        <h2>Network Error</h2>
        <p>{error.message}</p>
      </div>

      <button className="reload-button" onClick={handleReload}>
        Reload
      </button>
    </div>
  );
};

export default NetworkErrorPage;
