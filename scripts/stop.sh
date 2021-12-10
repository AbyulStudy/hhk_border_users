#!/bin/bash
cd /home/ubuntu/hhk_border_users/back
pm2 stop app.js 2> /dev/null || true
pm2 delete app.js 2> /dev/null || true