import {createRoot} from "react-dom/client";

import "./index.styl";
import {OutputBox} from "@/components/output-box/output-box";

function PromptCombinerIndex():JSX.Element
{
  return <>
    <div className="input-zone">
      <div className="info-box">
        <p>Enter an expanded prompt in the below input.</p>
      </div>
      <div className="inner-input-zone">
        <h1>Prompt Input</h1>
        <textarea className="input-textarea">
        </textarea>
      </div>
    </div>
    <div className="output-zone">
      <h1>Combined Prompt</h1>
      <OutputBox text="hello, this, is, an, output"/>
    </div>
  </>;
}

function main()
{
  createRoot(document.querySelector("main")!).render(<PromptCombinerIndex/>);
}

window.onload=main;