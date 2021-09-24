# Setting up monitoring for your collator

It would be ideal if monitoring is done from a different host however in cases of resource constraints it would be better to run these monitoring tools on the same machine where your collator is running than not having.The following Monitoring stack is recommended.
You can either run grafana by your own or subscribe free cloud option here https://grafana.com/products/cloud/

- Prometheus
- Grafana
- Node exporter
- Slack

There are two types of metrics we are going to collect. **Node Metrics** and **Blockchain Metrics.**

# Prerequisite
```
docker-compose  version > 1.28.0
```
The following ports are allocated:

1. Clone or download our monitoring template from this link https://github.com/KILTprotocol/docs
2. Change directory to the above cloned project: ```cd docs/collator```
3. Edit .env file to have your change grafana admin password
4. Run the following command if you want to install only prometheus and node exporter
```./start-collator.sh```
5. If you want to install prometheus with grafana comment line 6 of ``` start-collator.sh``` and uncomment line 7 then run step 4
6. if you want to install prometheus, grafana and your collator with docker-compose comment line 6  of ``` start-collator.sh``` and uncomment line 8 then run  step 4

# Testing
You could open and check HOST_IP:3000  then authenticate with admin:ADMIN_PASSWORD you set in .env at step 3.

# Configuring Notification channel
Choose anyone of the notification channels and follow this documentation so that you get alerts and notifications when there are critical alerts
https://grafana.com/docs/grafana/latest/alerting/old-alerting/notifications/
