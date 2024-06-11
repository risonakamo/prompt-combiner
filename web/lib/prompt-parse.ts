// functions for processing expanded prompts

import _ from "lodash";

/** process expanded prompt string. returns multiple strings - each string is one combined prompt */
export function processExpandedPrompt(expandedPrompt:string):string[]
{
    const lines:string[]=expandedPrompt.split("\n");

    var collectedPrompts:string[][]=[];

    var currentPrompt:string[]=[];

    // for all lines, add to the current prompt. if see seperator, split into a new prompt
    for (var lineI=0;lineI<lines.length;lineI++)
    {
        const line:string=lines[lineI];

        const processedLine:ProcessLineResult=processLine(line);

        // if seperator, create a new prompt to start pushing to
        if (processedLine.isSeperator)
        {
            collectedPrompts.push(currentPrompt);
            currentPrompt=[];
        }

        // otherwise, push all processed items into the current prompt
        else
        {
            currentPrompt=[
                ...currentPrompt,
                ...processedLine.extractedTags,
            ];
        }
    }

    // push the last prompt we were just working on
    collectedPrompts.push(currentPrompt);

    // for all collected prompts, deduplicate
    collectedPrompts=_.map(collectedPrompts,(prompt:string[]):string[]=>{
        return _.uniq(prompt);
    });

    // convert all collected prompts into single string
    return _.map(collectedPrompts,(prompt:string[]):string=>{
        return prompt.join(", ");
    });
}

/** process a line and return the line's contents.
 *  processing rules:
 *  - any line starting with # is ignored
 *  - any line with --- is a seperator
 *  - anything else is split by comma, and each item is trimmed
 *  - all empty items removed
 *  if the line has any newlines, output will not make sense, so make sure to only
 *  call on single lines */
function processLine(line:string):ProcessLineResult
{
    line=line.trim();

    // ignore header lines
    if (line[0]=="#")
    {
        return {
            extractedTags:[],
            isSeperator:false,
        };
    }

    // detect seperator lines
    if (line.slice(0,3)=="---")
    {
        return {
            extractedTags:[],
            isSeperator:true
        };
    }

    const cleanedParts:string[]=_(line.split(","))
    // trim all items
    .map((linePart:string):string=>{
        return linePart.trim();
    })
    // remove all empty strings
    .reject((linePart:string):boolean=>{
        return linePart.length==0;
    })
    .value();

    return {
        extractedTags:cleanedParts,
        isSeperator:false,
    };
}




export function test_processLine():void
{
    const testLines:string[]=[
        "# something",
        "  # something  ",
        "## hello something  ",
        "yellow eyes, light grey hair, grey skin tone, medium length hair, straight hair",
        "yellow_eyes,light grey hair, grey skin    tone,    medium length hair,straight hair   ",
        "----",
        "",
        "--",
        "something",
        "hmm ---",
        "something, with, newline\ndoes this, make sense"
    ];

    for (var i=0;i<testLines.length;i++)
    {
        console.log(processLine(testLines[i]));
    }
}