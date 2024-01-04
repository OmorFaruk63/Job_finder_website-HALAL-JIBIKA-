import "./NetworkError.css";

const NetworkErrorPage = () => {
  const handleReload = () => {
    // Implement your reload logic here
    window.location.reload();
  };

  return (
    <div className="network-error-page">
      <div className="error-message">Network Error</div>
      <button className="reload-button" onClick={handleReload}>
        Reload
      </button>
    </div>
  );
};

export default NetworkErrorPage;
