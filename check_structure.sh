# check_structure.sh
files=".replit README.md .dockerignore compose.yaml client/Dockerfile server/Dockerfile package.json package-lock.json tsconfig.json vite.config.ts client/src server/src shared/types devops/nginx/default.conf"
for file in $files; do
  if [ -e "$file" ]; then
    echo "Found: $file"
  else
    echo "Missing: $file"
    exit 1
  fi
done
echo "All files found"