import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SoundProvider } from "./soundReact/SoundContext";
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>  
    <SoundProvider>
      <Provider store={store}>
    <App />
    </Provider>
    </SoundProvider>
  </React.StrictMode>
);

// App is {children} for SoundCountext.Provider

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
