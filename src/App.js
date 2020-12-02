import { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Crop from './components/Crop';
import { Header, CropImageViewer, ObjectBar, ObjectList } from './components/styledComponent';
import Toolbar from './components/panelbar';

import './App.css';
import Theme from './style/Theme';
import AppContext from './helper/context';

function App() {
  const [src, setSrc] = useState([]);
  const [cropEnable, setEnable] = useState(false);

  return (
    <AppContext.Provider value={{src, cropEnable, setSrc, setEnable}}>
      <ThemeProvider theme={Theme}>
        <Header>
          <span>REMO</span>
        </Header>
        <div className="body">

          <Toolbar />
          <div className="crop-wrapper">
            <Crop />
            <CropImageViewer>
              {src.map((item, index) => (
                <img src={item} key={index} alt="crop" />
              ))}
            </CropImageViewer>
          </div>
          <ObjectBar>
            {src.map((item, index) => (
              <div key={index}>
                <ObjectList>{`Object${index}`}</ObjectList>
              </div>
            ))}
          </ObjectBar>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
