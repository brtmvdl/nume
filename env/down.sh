docker-compose -f $(pwd)/docker-compose.yml down --remove-orphans --rmi all 

sudo echo sudo OK

sudo rm -rf $(pwd)/data/*

sudo rm -rf $(pwd)/logs/*
