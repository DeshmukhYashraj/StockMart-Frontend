const Footer = () => {
  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: "#1f2937",
      color: "#fff",
      padding: "1rem",
      textAlign: "center"
    }}>
      &copy; {new Date().getFullYear()} SmartMart. All rights reserved.
    </footer>
  );
};

export default Footer;