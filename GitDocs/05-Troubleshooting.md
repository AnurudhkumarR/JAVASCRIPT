# ⚒️ Troubleshooting Git Issues

### 🧩 Nested .git Folder Problem

```bash
rm -rf FolderName/.git
git rm --cached -r FolderName
git add FolderName
git commit -m "Fixed nested Git issue"
git push
```
