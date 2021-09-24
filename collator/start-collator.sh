#!/usr/bin/env bash

set -e
set -x

docker-compose up -d  #Prometheus and node exporter are
#docker-compose up --profile grafana -d   #Prometheus and grafana
#docker-compose --profile collator --profile grafana up -d   #Prometheus, grafana and collator

set +e
