# Github Code of Conduct

### Branches and Commits

We usually branch off either the `master` or the `develop` branch, based on weather or not they are directly pushing to a produciton server. Make sure to inquire about which is considered the main working branch on the repo you want to work on.

Every major or otherwise significant task is assigned its own branch. Upon completion of said task, the developer should open a pull request towards the branch from which they branched off and wait for a review by the person in charge of the repo.

Within the branch, frequent, small commits are encouraged as they provide extremely valuable insight to our code.

### Naming Conventions

We use 4 standard prefixes for our branch names and our commit names:

- `feature`: a significant addition to the codebase.
- `refactor`: a significant alteration of the codebase.
- `bugfix`: a correction of a bug, warning, error or similar issue .
- `chore`: a minor addition or alteration (used only for commit names since branches should contain significant changes).

**When creating a branch use the following naming scheme**

```
prefix/short-description
```

_Examples:_

```
feature/add-authentication
refactor/bars-to-foos
bugfix/fix-critical-issue
```

**When commiting to changes, use the following naming scheme**

```
prefix: short description
```

_Examples:_

```
Feature: add address field to users table
Refactor: bar to foo
Bugfix: correct compiler warning
Chore: clean up section
```

_Note: While branch prefixes should always start with a lowercase letter, the same isnt required on commits. Branch names are used by git to organize branches in a repo, while commit names are used to to quickly describe the commit's purpose to a reviewer or other developer. Thus, when naming commits, exact typography isnt a concern._

**When unsure of the correct branch or commit name, follow these steps**

1. Think of exactly what you did or are about to do.
2. Based on step 1, pick the prefix that describes the purpose of your branch/commit
3. Based on step 1, describe your exact additions or changes in as few words as possible, always focusing on **what** you did and not **why** or **how** you did it.

As always, if you're unsure of the correct approach, use one of the contact options listed bellow to inquire about your next steps.

# Communication/Coordination

### Task Management

We use trello as our main task overview/management tool feel free to create, or add yourself to a ticket after being assigned the relevant task by the repo manager.

_Check it out [here](https://trello.com/b/aF0ekxsf/draive)_

### Technical Questions

We encourage developers to use our stack teams board, as this makes sure we can easily reference to relevant answers if similar issues arise in the future.

_Check it out [here](https://stackoverflow.com/c/draive/questions)_

### Discord

Our discord server is the main communication tool between all team members. Feel free to use any channel of interest

# Repositories

We maintain several repositories related to the draive project.

- **Main draive backend**: Khepu/draive
- **Main draive website**: Khepu/draive-website
- **Carla publisher**: Khepu/carla-publisher
- **Mock publisher**: Khepu/mock-publisher
- **Mock consumer**: Khepu/mock-consumer

If you require further information about any of these, or are interested in working on them, feel free to communicate via the discord server
