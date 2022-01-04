import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Theme from './containers/Theme'
import React from 'react'

/* React strict mode can cause double render
 *
 * https://stackoverflow.com/questions/61254372/
 */

ReactDOM.render(
  <Theme>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Theme>,
  document.getElementById('root')
)
