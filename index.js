const Button = ({ bgColor, textColor, text }) => (
  <button
    style={{
      backgroundColor: bgColor,
      color: textColor,
      fontFamily: 'Roboto',
      fontSize: '16px',
      padding: '10px 20px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      margin: '10px',
    }}
  >
    {text}
  </button>
);

const element = (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundImage: `url('https://assets.ccbp.in/frontend/react-js/social-buttons-bg.png')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: '100vh',
    }}
  >
    <h1 style={{ fontFamily: 'Bree Serif', color: '#ffffff' }}>Social Buttons</h1>
    <Button bgColor="#eab308" textColor="#323f4b" text="Like" />
    <Button bgColor="#1d4ed8" textColor="#ffffff" text="Comment" />
    <Button bgColor="#ffffff" textColor="#323f4b" text="Share" />
  </div>
);

ReactDOM.render(element, document.getElementById('root'));
