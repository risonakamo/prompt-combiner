import {assert, test} from "vitest";

import {processExpandedPrompt, test_processLine} from "@/lib/prompt-parse";

test("process-line",test_processLine);

test("process-expanded",()=>{
    const bigPrompt:string=`
        # character pose
        1girl, solo, slight smile, slight blush, unique pose, interesting pose

        # character appearance
        yellow eyes, light grey hair, grey skin tone, medium length hair, straight hair

        ## general appearance
        expressive eyes

        # camera
        upper body focus, waist, zoomed out, (waist visible)

        # character cloths
        turtleneck shirt, white shirt, yellow highlights on shirt

        yellow eyes

        # location
        outdoors, nature, cloudy sky, architecture, background visible, concrete architecture

        ## general
        serene environment, soft lighting

        # quality
        (masterpiece), (best quality), ultra-detailed, very aesthetic, illustration, disheveled hair, perfect composition, moist skin, intricate details, sensitive, absurdres

        ----
        # (-) anti bad quality
        nsfw, longbody, lowres, bad anatomy, bad hands, missing fingers, pubic hair, extra digit, fewer digits, cropped, worst quality, low quality, very displeasing, blurry, distorted faces, unrealistic proportions
    `;

    const result:string[]=processExpandedPrompt(bigPrompt);

    if (result.length==0)
    {
        assert.fail("result was empty");
    }

    console.log(result);
});