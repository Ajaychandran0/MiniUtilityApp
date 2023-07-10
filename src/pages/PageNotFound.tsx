
const NotFoundPage: React.FC = () => {
  const styles:React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "500px",
  }
  return (
    <div style={styles}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
