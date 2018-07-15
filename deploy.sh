#!/bin/bash

echo "Begin Deploy..."
git pull origin master
cd back
npm install --production
cd ../front
npm install  --production
npm run build
pm2 restart bo server
echo "End Deploy..."
