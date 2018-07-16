#!/bin/bash
echo -e "\033[32m Begin Deploy.."
echo -ne '\033[32m  ###############                     (0%)\r'

# Access for root

### Local Deployement

git add --all
git commit -m "last changes"
git push origin master

echo -ne '\033[32m ###############                     (5%)\r'


# Remote Deployement


sudo su <<EOF
    ssh root@188.166.161.138

    cd /home/deployment/

    git pull origin master
    echo -ne '\033[32m ###############                     (10%)\r'
    
    cd back
    npm install --production
    echo -ne '\033[32m ###############                     (30%)\r'


    cd ../front
    npm cache clean --force
    npm install  --production
    echo -ne '\033[32m ###############                     (60%)\r'

    npm run build

    echo -ne '\033[32m ###############                     (80%)\r'

    pm2 restart bo server admin
    echo -ne '\033[32m ###############                     (1000%)\r'

    echo -e "\033[32m End Deploy."
EOF
