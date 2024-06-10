expanded prompt is comma seperated strings, but all new lines will be removed. so you can split your prompt into several pieces

```markdown
thing1, thing2, thing3

thing4, thing5,thing7
```

all duplicates will be removed in the final result. order will be preserved, keeping the first of the duplicates. all trailing commas are removed, and empty prompts that might form from trailing commas. all spaces in front and back of prompts will be trimmed, so don't need to worry about spacing around the commas

due to these rules, having prompts seperated by newlines instead of commas will also work, though this probably won't look that good.

additionally, markdown headers will be ignored, so you can split your prompt into named categories or sections

```markdown
# section 1
thing1, thing2, thing3

## section2
thing4, thing5

# section 3
more, prompts
```

markdown dividers can be used to produce multiple outputs, for example. you can then copy each output independently. this is good for if you are going to be filling out a positive and negative prompt box, where you will want to copy them seperately.

```markdown
# section 1
thing1, thing2, thing3

## section2
thing4, thing5

# section 3
more, prompts

---
# neg prompts
thinga, thingb, thing c
```