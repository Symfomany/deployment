#!/bin/bash
echo -e "\033[31m Begin Deploy.."
git pull origin master
cd back
npm install --production
cd ../front
npm install  --production
npm run build
pm2 restart bo server
echo -e "\033[31m End Deploy."
