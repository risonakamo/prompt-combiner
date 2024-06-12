import {createRoot} from "react-dom/client";
import React, {useEffect, useMemo, useState} from "react";
import _ from "lodash";

import {OutputBox} from "@/components/output-box/output-box";
import {processExpandedPrompt} from "@/lib/prompt-parse";
import {getLastPrompt, setLastPrompt} from "@/lib/storage";

import "./index.styl";

function PromptCombinerIndex():JSX.Element
{
  // --- states
  /** content of the main prompt box */
  const [mainPromptContent,setMainPromptContent]=useState<string|undefined>(undefined);

  /** the main prompt content, run through the primary processing algorithm */
  const splitPrompts:string[]=useMemo(()=>{
    if (!mainPromptContent)
    {
      return [];
    }

    return processExpandedPrompt(mainPromptContent);
  },[mainPromptContent]);


  // --- effects
  /** on page load, if there is a prompt saved in storage, set it as the main prompt */
  useEffect(()=>{
    const savedPrompt:string=getLastPrompt();

    if (savedPrompt)
    {
      setMainPromptContent(savedPrompt);
    }
  },[]);


  // --- debounced
  const setLastPrompt_delayed=_.debounce(setLastPrompt,500);


  // --- handlers
  /** user changing the main prompt box. update the value. also set the last prompt with debounce */
  function h_mainPromptChange(e:React.ChangeEvent<HTMLTextAreaElement>):void
  {
    setMainPromptContent(e.currentTarget.value);
    setLastPrompt_delayed(e.currentTarget.value);
  }


  // --- renders
  /** render the output boxes based on the current split prompts. shows text if there are no
   *  outputs */
  function r_outputBoxes():JSX.Element[]
  {
    if (!splitPrompts.length)
    {
      return [<>no outputs</>];
    }

    return _.map(splitPrompts,(prompt:string,i:number):JSX.Element=>{
      return <OutputBox key={i} text={prompt}/>;
    });
  }


  // --- main render
  return <>
    <div className="input-zone">
      <div className="info-box">
        <p>Enter an expanded prompt in the below input.</p>
      </div>
      <div className="inner-input-zone">
        <h1>Prompt Input</h1>
        <textarea className="input-textarea" onChange={h_mainPromptChange} value={mainPromptContent}>
        </textarea>
      </div>
    </div>
    <div className="output-zone">
      <h1>Combined Prompt Output</h1>
      {r_outputBoxes()}
    </div>
  </>;
}

function main()
{
  createRoot(document.querySelector("main")!).render(<PromptCombinerIndex/>);
}

window.onload=main;