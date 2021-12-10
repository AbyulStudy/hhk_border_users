#!/bin/bash
cd /home/ubuntu/hhk_border_users/back

export ACCESS_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names ACCESS_SECRET --query Parameters[0].Value | sed 's/"//g')
export DATABASE_NAME=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_NAME --query Parameters[0].Value | sed 's/"//g')
export DATABASE_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export DATABASE_USERNAME=$(aws ssm get-parameters --region ap-northeast-2 --names DATABASE_USERNAME --query Parameters[0].Value | sed 's/"//g')

pm2 start app.js