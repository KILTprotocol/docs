---
id: monitoring
title: Monitoring
---

It would be ideal if the host being monitored is not the host monitoring, i.e., if the monitoring process does not run on the same host as the collator process.
However, in cases of limited resources, the two can also co-exist on the same host.

The monitoring process collects two types of metrics: **Node Exporter metrics** and **blockchain metrics**.
The monitoring infrastructure can either be run as a local grafana cluster or as a [cloud-based solution](https://grafana.com/products/cloud/).

:::info
For cloud-based solutions, the prometheus process must be publicly accessible, e.g., via a reverse proxy.
:::

## What will be installed

The docker compose setup creates and deploys up to four containers, all of which are optional:

- **Node Exporter**: collects metrics from the host machine including CPU, memory, and storage usage, and network traffic statistics
- **Prometheus**: stores the metrics collected by Node Exporter and collects additional metrics from the blockchain node
- **Grafana**: shows the collected metrics in a customizable dashboard and can be configured to send alerts when certain conditions are met
- **Collator**: the collator node itself which runs one of the available KILT runtimes

## Installation
Install the latest version of docker-compose from the [official docker-compose installation guide](https://docs.docker.com/compose/install/), then:

1. Clone the [entire KILT chain repo](https://github.com/KILTprotocol/docs) or download only the [monitoring template](https://github.com/KILTprotocol/docs/tree/master/collator).
2. Change directory to the above with ```cd docs/collator```
3. Edit the `.env` file and insert your desired grafana admin user and password
4. Depending on the installation type either:
  - run `docker-compose up -d` to install only Node Exporter and prometheus or
  - run `docker-compose up --profile grafana -d` to install Node Exporter, prometheus and grafana or
  - run `docker-compose --profile collator --profile grafana up -d` to install Node Exporter, prometheus, grafana **and** a collator node

5. Secure the endpoints:
    1. Install nginx with certbot ```sudo apt install nginx certbot python3-certbot-nginx```
    2. If ufw is enabled, allow Nginx Full: ```sudo ufw allow 'Nginx Full'```
    3. Generate an SSL certificate: ```sudo certbot --nginx -d ${DOMAIN_OF_SERVER_NAME}```
    4. Enable certificate renewal by editing the crontab list ```crontab -e``` and appending ```0 5 * * * /usr/bin/certbot renew --quiet```
    5. Reload nginx after replacing the default nginx file with prometheus endpoint (if grafana cloud is chosen) or grafana endpoint (if grafana installed) by adding the following config snippet to `/etc/nginx/sites-enabled/default`
    ```
      location / {
          proxy_pass http://localhost:9090/;    #proxy_pass http://localhost:3000/;
      }
    ```
    6. Enable basic authentication by replacing the default password in `prometheus.yml` using  ``` htpasswd -nBC 10 "" | tr -d ':\n' ```

## Testing the Configuration
The configuration can be checked by visiting `https://localhost:3000` and authenticating with the username and password set in `.env` at step 3.

## Configuring Alert Notification Channel
Choose any of the supported notification channels and follow the [grafana documentation](https://grafana.com/docs/grafana/latest/alerting/old-alerting/notifications/) to receive alerts and notifications.

Overall, for monitoring we recommend the following stack:
- Prometheus
- Grafana
- Node exporter
- Nginx