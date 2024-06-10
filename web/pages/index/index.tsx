import {createRoot} from "react-dom/client";

import "./index.styl";

function PromptCombinerIndex():JSX.Element
{
  return <>
    <div className="input-zone">
      <div className="info-box">
        <p>Enter an expanded prompt in the below input.</p>
      </div>
      <h1>Prompt Input</h1>
      <textarea></textarea>
    </div>
    <div className="output-zone">
      <h1>Combined Prompt</h1>
      <div className="copy-button">
        Copy
      </div>
      <p>hello, this, is, an, output</p>
    </div>
  </>;
}

function main()
{
  createRoot(document.querySelector("main")!).render(<PromptCombinerIndex/>);
}

window.onload=main;