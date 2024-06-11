import {useState} from "react";

import {Button1} from "@/components/button1/button1";

import "./output-box.styl";
import copy from "copy-to-clipboard";

interface OutputBoxProps
{
  text:string
}

/** a box that stores an output text string. has button to copy the string */
export function OutputBox(props:OutputBoxProps):JSX.Element
{
  const [copyCount,setCopyCount]=useState<number>(0);

  /** clicked copy button. copies text to clipboard */
  function h_copyClick():void
  {
    copy(props.text);
    setCopyCount(copyCount+1);
  }

  /** render the copy count. doesn't appear while copy count at 0. includes number of times
   *  copied while above 1. */
  function r_copyCount():JSX.Element
  {
    if (!copyCount)
    {
      return <></>;
    }

    var copiedCountText:string="";

    if (copyCount>=1)
    {
      copiedCountText=`x${copyCount}`;
    }

    return <p className="copied-indicator">copied {copiedCountText}</p>;
  }

  return <div className="output-box">
    <p className="output-string">{props.text}</p>
    <Button1 text="Copy" onClick={h_copyClick}/>
    {r_copyCount()}
  </div>;
}