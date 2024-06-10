import {createRoot} from "react-dom/client";

import "./index.styl";

function PromptCombinerIndex():JSX.Element
{
  return <>
    huh
  </>;
}

function main()
{
  createRoot(document.querySelector("main")!).render(<PromptCombinerIndex/>);
}

window.onload=main;