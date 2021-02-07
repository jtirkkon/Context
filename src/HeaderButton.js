import React from 'react';
import ThemeContext from './ThemeContext'

function HeaderButton(props) {
  const themeContext = React.useContext(ThemeContext);
  //console.log(themeContext);
  const [buttonStyle, setButtonStyle] = React.useState(themeContext.black);

  const changeStyle = () => {
    buttonStyle === themeContext.black ? setButtonStyle(themeContext.blue) : setButtonStyle(themeContext.black);
  }
  return (
    <div>
      <button onClick={changeStyle} style={buttonStyle}>Press me</button>
    </div>
  );
}

export default HeaderButton;