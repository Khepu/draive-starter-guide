# Naming Conventions

We use 4 standard tags for our branch names and our commit names:

- `feature`: Adding functionality
- `refactor`: Altering existing functionality
- `bugfix`: Correction of a bug or known issue
- `chore`: Minor addition or alteration that should not cause behavior changes

## Branches
Branch names separate the tag from the description with a `/` and are written in
lower case with dash separated words.

```
tag/short-description
```

_Examples:_

```
feature/add-authentication
refactor/bars-to-foos
bugfix/fix-critical-issue
```

## Commits

Commit names separate the tag from the description with a `: ` and are
capitalized.

```
Tag: short description
```

_Examples:_

```
Feature: add address field to users table
Refactor: bar to foo
Bugfix: correct compiler warning
Chore: clean up section
```

_Note: While branch prefixes should always start with a lowercase letter, the
same isnt required on commits. Branch names are used by git to organize branches
in a repo, while commit names are used to quickly describe the commit's
purpose to a reviewer or other developer. Thus, when naming commits, exact
typography isnt a concern._

{{<hint danger>}}
**When unsure of the correct branch or commit name, follow these steps**

1. Think of exactly what you did or are about to do.
2. Pick the tag that describes the purpose of your branch/commit
3. Describe your exact additions or changes in as few words as possible, always
   focusing on **what** you did and not **why** or **how** you did it.
{{</hint>}}

Feel free to check what other commits around the codebase are like!
