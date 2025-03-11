
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
const rootElement = document.getElementById('root');
if(!rootElement){
  throw new Error("Root element not found")
}
ReactDOM.createRoot(rootElement).render(
  <HashRouter>
    <App />
  </HashRouter>,
)


