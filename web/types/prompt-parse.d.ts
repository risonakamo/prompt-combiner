// types for prompt parse lib

/** result of processing line */
interface ProcessLineResult
{
    extractedTags:string[]
    isSeperator:boolean
}