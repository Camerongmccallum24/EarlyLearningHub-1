// extract_secrets.js
import fs from 'fs';

const secrets = Object.entries(process.env).map(([key, value]) => {
  // Mask sensitive values
  if (key.includes('KEY') || key.includes('SECRET') || key.includes('PASS')) {
    return `${key}=***MASKED***`;
  }
  return `${key}=${value}`;
});

fs.writeFileSync('secrets.txt', secrets.join('\n'));
console.log('Secrets written to secrets.txt');