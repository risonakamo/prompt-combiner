import "./button1.styl";

interface Button1Props
{
  text:string
  onClick?():void
}

export function Button1(props:Button1Props):JSX.Element
{
  return <div className="button1" onClick={props.onClick}>
    {props.text}
  </div>;
}