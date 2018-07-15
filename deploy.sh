#!/bin/bash
echo -e "\033[32m Begin Deploy.."
git pull origin master
cd back
npm install --production
cd ../front
npm install  --production
npm run build
pm2 restart bo server
echo -e "\033[32m End Deploy."
