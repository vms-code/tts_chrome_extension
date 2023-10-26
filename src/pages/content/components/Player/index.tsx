import { createRoot } from 'react-dom/client';
//import App from '@root/src/pages/content/components/Player/app';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { attachTwindStyle } from '@src/shared/style/twind';
import Playback from './Playback.jsx'

refreshOnUpdate('pages/content');

const root = document.createElement('div');
root.id = 'tts-content-view-root';

document.body.append(root);

const rootIntoShadow = document.createElement('div');
rootIntoShadow.id = 'shadow-root';

const shadowRoot = root.attachShadow({ mode: 'open' });
shadowRoot.appendChild(rootIntoShadow);
const top = 0;
const left = 0;
const tc = { settings: { controllerOpacity: 1 }}
const speed = 1;
/*
var shadowTemplate = `
        <style>
          @import "${chrome.runtime.getURL("shadow.css")}";
        </style>

        <div id="controller" style="top:${top}; left:${left}; opacity:${tc.settings.controllerOpacity}">
          <span data-action="drag" class="draggable">${speed}</span>
          <span id="controls">
            <button data-action="rewind" class="rw">«</button>
            <button data-action="slower">&minus;</button>
            <button data-action="faster">&plus;</button>
            <button data-action="advance" class="rw">»</button>
            <button data-action="display" class="hideButton">&times;</button>
          </span>
        </div>
      `;
shadowRoot.innerHTML = shadowTemplate;
*/

/**
 * https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/pull/174
 *
 * In the firefox environment, the adoptedStyleSheets bug may prevent contentStyle from being applied properly.
 * Please refer to the PR link above and go back to the contentStyle.css implementation, or raise a PR if you have a better way to improve it.
 */
attachTwindStyle(rootIntoShadow, shadowRoot);

createRoot(rootIntoShadow).render(<Playback />);
