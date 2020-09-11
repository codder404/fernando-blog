import React, { useState, useEffect } from 'react';

function DarkTheme () {
  const [darkTheme, setDarkTheme] = useState(getDefaulTheme);

  useState(() => {
    localStorage.setItem('dark', JSON.stringify(darkTheme));
  }, [darkTheme]);

  function getDefaulTheme() {
    const selectedTheme = JSON.parse(localStorage.getItem('dark'));
    return selectedTheme || false;
  }

  return (
    <section className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <nav>
        <div className="button">
          <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
            Mudar tema
          </button>
        </div>
      </nav>
    </section>
  )
}

export default DarkTheme;