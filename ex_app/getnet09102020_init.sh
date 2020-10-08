#!/bin/bash
sudo cp /var/www/html/getnet09102020/ex_app/compiled_getnet09102020/getnet09102020_startup.sh /usr/local/bin/getnet09102020_startup.sh
sudo chmod 744 /usr/local/bin/getnet09102020_startup.sh
sudo chmod +x /usr/local/bin/getnet09102020_startup.sh
sudo cp /var/www/html/getnet09102020/ex_app/compiled_getnet09102020/getnet09102020_shutdown.sh /usr/local/bin/getnet09102020_shutdown.sh
sudo chmod 744 /usr/local/bin/getnet09102020_shutdown.sh
sudo chmod +x /usr/local/bin/getnet09102020_shutdown.sh
sudo cp /var/www/html/getnet09102020/ex_app/compiled_getnet09102020/getnet09102020.service /etc/systemd/system
sudo chmod 664 /etc/systemd/system/getnet09102020.service
sudo chmod +x /etc/systemd/system/getnet09102020.service
sudo systemctl daemon-reload
sudo systemctl enable getnet09102020.service
sudo systemctl restart getnet09102020.service