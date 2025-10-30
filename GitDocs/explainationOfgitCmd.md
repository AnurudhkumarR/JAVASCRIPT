Git Documentation — Full Explanations (Topic Wise)
🧩 01-Basics.md

# 🧭 GIT BASICS

## 💡 Why

These commands form the foundation of Git.  
They help you start tracking your project, record versions, and monitor changes.

## 🕐 When to Use

- When you begin a new project.
- When you want to check which files are modified or staged.
- When you want to save code progress locally.

---

## ⚙️ Commands and Explanations

| Command                   | What It Does                                                   | Why / When to Use                               |
| ------------------------- | -------------------------------------------------------------- | ----------------------------------------------- |
| `git init`                | Creates a new local `.git` folder to start tracking your code. | When starting a project without Git tracking.   |
| `git status`              | Shows modified, staged, and untracked files.                   | Use before commit to verify what will be saved. |
| `git add .`               | Adds all modified files to the staging area.                   | Before committing, to include all changes.      |
| `git commit -m "message"` | Saves the current snapshot of your project.                    | To record progress or milestones.               |
| `git log`                 | Shows commit history.                                          | To review what has changed over time.           |

---

## 🧠 Example Workflow

````bash
git init
git add .
git commit -m "Initial setup"
git log


✅ This initializes Git, stages files, saves them, and checks commit history.


---

### 🌿 **02-Branching.md**

```markdown
# 🌿 BRANCHING

## 💡 Why
Branching allows multiple developers to work independently.
Each branch is an isolated version of your code, helping avoid conflicts.

## 🕐 When to Use
- When developing a new feature.
- When testing something risky.
- When fixing a bug without touching the main branch.

---

## ⚙️ Commands and Explanations

| Command | What It Does | Why / When to Use |
|----------|---------------|------------------|
| `git branch` | Lists existing branches. | Check what branches exist. |
| `git branch <name>` | Creates a new branch. | For a new feature or bug fix. |
| `git checkout <name>` | Switches to another branch. | To work on a different branch. |
| `git switch main` | Another way to switch branches. | Simpler alternative to checkout. |
| `git branch -d <name>` | Deletes a branch. | After merging or when no longer needed. |

---

## 🧠 Example Workflow

```bash
git branch feature/login
git checkout feature/login
# work on files...
git add .
git commit -m "Added login page"


✅ You’ve created an isolated feature branch to safely develop without disturbing main.


---

### 🔀 **03-Merging.md**

```markdown
# 🔀 MERGING & CONFLICTS

## 💡 Why
Merging combines your feature branch back into the main code.
This is how you integrate everyone’s changes.

## 🕐 When to Use
- After completing a feature or bug fix.
- Before deploying or sharing updates.

---

## ⚙️ Commands and Explanations

| Command | What It Does | Why / When to Use |
|----------|---------------|------------------|
| `git merge <branch>` | Merges the given branch into current one. | To combine feature work. |
| `git merge --abort` | Stops merge if conflicts arise. | When merge causes unexpected results. |
| `git diff` | Shows differences before merging. | To review what will change. |
| `git log --graph` | Displays a visual merge history. | To understand branching structure. |

---

## ⚠️ Handling Merge Conflicts
When two branches edit the same line, Git stops and asks you to fix it manually.

Example:
```text
<<<<<<< HEAD
console.log("Old");
=======
console.log("New");
>>>>>>> feature/login


Remove markers and keep the correct version, then commit.

🧠 Example Workflow
git switch main
git merge feature/login
git push


✅ You’ve merged the login feature into main and shared it on GitHub.


---

### 🌐 **04-Remote.md**

```markdown
# 🌐 REMOTE REPOSITORY

## 💡 Why
Remotes (like GitHub) allow collaboration.
They act as central servers to store and share your code.

## 🕐 When to Use
- When pushing your project online.
- When pulling changes made by teammates.
- When cloning existing projects.

---

## ⚙️ Commands and Explanations

| Command | What It Does | Why / When to Use |
|----------|---------------|------------------|
| `git remote add origin <url>` | Connects your local repo to GitHub. | When first linking project online. |
| `git push -u origin main` | Pushes commits to remote main branch. | To upload your local changes. |
| `git pull` | Fetches and merges remote updates. | To stay up to date with others. |
| `git fetch` | Downloads remote data without merging. | To preview new commits. |
| `git clone <url>` | Copies remote repo locally. | To start working on existing projects. |

---

## 🧠 Example Workflow
```bash
git remote add origin https://github.com/user/repo.git
git push -u origin main


✅ Your code is now live on GitHub and can be accessed by the team.


---

### ⚒️ **05-Troubleshooting.md**

```markdown
# ⚒️ TROUBLESHOOTING GIT

## 💡 Why
Even professionals face Git errors.
This topic helps fix common problems like rejected pushes, nested `.git` folders, or upstream issues.

## 🕐 When to Use
- When push/pull doesn’t work.
- When you accidentally initialize `.git` multiple times.
- When local and remote branches are unsynced.

---

## ⚙️ Common Problems and Fixes

### ❌ Push Rejected (non-fast-forward)
**Why:** Someone updated the branch before you.
**Fix:**
```bash
git pull --rebase origin main
git push

🧩 Nested .git Folder

Why: You initialized Git inside a folder that already has Git.
Fix:

rm -rf FolderName/.git
git add FolderName
git commit -m "Fixed nested Git issue"
git push

🔑 Missing Upstream Branch

Why: Your local branch isn’t linked to remote.
Fix:

git push --set-upstream origin main


---

### ⚙️ **06-Advanced.md**

```markdown
# ⚙️ ADVANCED GIT COMMANDS

## 💡 Why
These commands help manage history, restore lost code, and temporarily save progress.

## 🕐 When to Use
- When juggling multiple features.
- When you want to undo or reorder commits.
- When experimenting safely.

---

## ⚙️ Commands and Explanations

| Command | What It Does | Why / When to Use |
|----------|---------------|------------------|
| `git stash` | Saves changes temporarily. | When switching tasks mid-work. |
| `git stash pop` | Restores stashed work. | When ready to continue work. |
| `git cherry-pick <commit>` | Apply one commit to another branch. | To reuse a fix without merging whole branch. |
| `git rebase` | Reapply commits on new base branch. | For cleaner history. |
| `git reset --hard HEAD~1` | Undo last commit completely. | To remove mistakes. |

---

## 🧠 Example Workflow
```bash
git stash
git switch main
git pull
git switch feature/login
git stash pop


✅ You saved your work, updated main, and restored your feature progress cleanly.


---

### 👥 **07-TeamWorkflow.md**

```markdown
# 👥 TEAM WORKFLOW

## 💡 Why
To define how a team collaborates efficiently with Git and GitHub.

## 🕐 When to Use
- In multi-developer projects.
- When enforcing consistency.
- During pull requests and reviews.

---

## ⚙️ Team Practices and Explanations

| Practice | What It Means | Why / When to Use |
|-----------|----------------|------------------|
| `main` | Stable production code. | Deployment-ready branch. |
| `develop` | Integration branch for testing. | Combines all features before main. |
| `feature/<name>` | Individual work branches. | Keeps changes isolated. |
| Pull Requests | Merging through code review. | Ensures quality and approval. |
| Commit Message Style | Example: `fix: login bug` | Keeps history meaningful. |

---

## 🧠 Example Flow Diagram


main ← develop ← feature/login


> ✅ Developers create feature branches → test in `develop` → merge stable code into `main`.
````
