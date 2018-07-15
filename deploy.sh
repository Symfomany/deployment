#!/bin/bash
echo -e "\033[32m Begin Deploy.."
echo -ne '#####                     (0%)\r'
git pull origin master
echo -ne '#####                     (10%)\r'
cd back
npm install --production
echo -ne '#####                     (30%)\r'

cd ../front
npm install  --production
echo -ne '#####                     (60%)\r'

npm run build
echo -ne '#####                     (80%)\r'

pm2 restart bo server
echo -ne '#####                     (1000%)\r'

echo -e "\033[32m End Deploy."
