#!/bin/bash

git pull origin master
cd back
npm install
cd ../front
npm install  --production
npm prune --production
pm2 restart bo server
