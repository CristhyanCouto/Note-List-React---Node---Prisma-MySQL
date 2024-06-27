import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/main.css'
import Notes from './containers/Notes'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Notes />
  </React.StrictMode>,
)
