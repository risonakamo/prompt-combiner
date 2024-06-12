# Expanded Prompt Syntax
Expanded prompt is useful for organising pieces of your prompt so it looks like markdown and is more readable. Then, the pieces can be more easily edited and re-used between prompts.

# Basics
Basic expanded prompt is comma and newline separated strings - all new lines act like commas.

```markdown
thing1, thing2, thing3

thing4, thing5,thing7
```

- All duplicates will be removed in the final result. Order will be preserved, keeping the first of the duplicates
- All trailing commas are removed, as well as empty prompts
- All spaces in front and back of prompts will be trimmed, so you don't need to worry about spacing around the commas

# Headers
Markdown headers will be ignored, so you can give categories for your prompt pieces.

A line is treated as a header if it starts with `#`, following regular markdown syntax.

```markdown
# section 1
thing1, thing2, thing3

## section2
thing4, thing5

# section 3
more, prompts
```

# Multiple Output Prompts
A single Expanded Prompt can be resolved into multiple output comma-separated prompts. This can be useful if you want to keep a positive and negative prompt in the same expanded prompt file.

To split into multiple prompt outputs, use a markdown divider: `---`.

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

thing 1
```

Duplicates are only removed within each individual output prompt.