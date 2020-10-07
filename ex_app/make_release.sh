#!/bin/bash
sudo rm -rf compiled_getnet09102020
sudo mkdir compiled_getnet09102020
sudo mix do deps.get, deps.compile, compile
sudo MIX_ENV=prod mix release
sudo cp -r _build/prod/rel/ex_app compiled_getnet09102020
sudo mv getnet09102020.service ./compiled_getnet09102020
sudo mv getnet09102020_startup.sh ./compiled_getnet09102020
sudo mv getnet09102020_shutdown.sh ./compiled_getnet09102020
sudo mv getnet09102020_init.sh ./compiled_getnet09102020
sudo chmod +x ./compiled_getnet09102020/getnet09102020_init.sh
