import { createRoot } from 'react-dom/client';
import '@pages/popup/index.css';
import Popup from '@pages/popup/Popup';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { attachTwindStyle } from '@src/shared/style/twind';

refreshOnUpdate('pages/popup');

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  // attachTwindStyle(appContainer, document);
  // const root = createRoot(appContainer);
  // root.render(<Popup />);
  var tts = {
    settings: {
      lastSpeed: 1.0, // default 1x
      enabled: true, // default enabled
      speeds: {}, // empty object to hold speed for each source

      displayKeyCode: 86, // default: V
      rememberSpeed: false, // default: false
      forceLastSavedSpeed: false, //default: false
      audioBoolean: false, // default: false
      startHidden: true, // default: false
      keyBindings: [],
    },

    // Holds a reference to all of the AUDIO/VIDEO DOM elements we've attached to
    mediaElements: []
  };
}

init();
