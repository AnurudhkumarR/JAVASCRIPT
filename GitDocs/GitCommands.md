# 🧭 Git Command Documentation

## 📌 1. Basic Git Commands

| Command                   | Description                     |
| ------------------------- | ------------------------------- |
| `git init`                | Initialize a new Git repository |
| `git status`              | Show modified and staged files  |
| `git add <file>`          | Stage file for commit           |
| `git commit -m "message"` | Save changes to local repo      |
| `git push`                | Upload commits to GitHub        |
| `git pull`                | Fetch and merge from remote     |

---

## 🗂️ 2. Branch Management

| Command               | Description                 |
| --------------------- | --------------------------- |
| `git branch`          | List branches               |
| `git branch <name>`   | Create new branch           |
| `git checkout <name>` | Switch to branch            |
| `git merge <branch>`  | Merge a branch into current |

---

## 🧹 3. Fixing Common Issues

### 🔸 Nested `.git` Folder Problem

```bash
rm -rf FolderName/.git
git rm --cached -r FolderName
git add FolderName
git commit -m "Fixed nested Git issue"
git push


ls -a         # Check if .git folder exists
git log       # View commit history
cat .git/config   # See remote repo info
```
