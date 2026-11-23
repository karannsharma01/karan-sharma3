# Run from the karan-sharma folder in PowerShell. Needs Git + GitHub CLI (gh auth login once).
$user = "karannsharma01"; $repo = "karan-sharma"
git init -b main
git add .
git commit -m "Add portfolio site"
gh repo create $repo --public --source=. --remote=origin --push
gh api -X POST "repos/$user/$repo/pages" -f "source[branch]=main" -f "source[path]=/"
Write-Host "Live in ~1 minute: https://$user.github.io/$repo/"
