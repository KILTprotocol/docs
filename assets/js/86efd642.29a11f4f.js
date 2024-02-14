"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6515],{4884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(5893),i=t(1151);const s={id:"monitoring",title:"Set Up Node Monitoring"},r=void 0,l={id:"participate/staking/advanced_collator_section/monitoring",title:"Set Up Node Monitoring",description:"It would be ideal if the host being monitored is not the host monitoring, i.e., if the monitoring process does not run on the same host as the collator process.",source:"@site/docs/participate/01_staking/02_advanced_collator_section/04_monitoring.md",sourceDirName:"participate/01_staking/02_advanced_collator_section",slug:"/participate/staking/advanced_collator_section/monitoring",permalink:"/docs/participate/staking/advanced_collator_section/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/02_advanced_collator_section/04_monitoring.md",tags:[],version:"current",lastUpdatedAt:1707906150,formattedLastUpdatedAt:"Feb 14, 2024",sidebarPosition:4,frontMatter:{id:"monitoring",title:"Set Up Node Monitoring"},sidebar:"staking",previous:{title:"Lifecycle of a Collator",permalink:"/docs/participate/staking/advanced_collator_section/lifecycle"},next:{title:"Bootnodes",permalink:"/docs/participate/staking/advanced_collator_section/bootnodes"}},a={},c=[{value:"What Will Be Installed",id:"what-will-be-installed",level:2},{value:"Installation",id:"installation",level:2},{value:"Testing the Configuration",id:"testing-the-configuration",level:2},{value:"Configuring Alert Notification Channel",id:"configuring-alert-notification-channel",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"It would be ideal if the host being monitored is not the host monitoring, i.e., if the monitoring process does not run on the same host as the collator process.\nHowever, in cases of limited resources, the two can also co-exist on the same host."}),"\n",(0,o.jsxs)(n.p,{children:["The monitoring process collects two types of metrics: ",(0,o.jsx)(n.strong,{children:"Node Exporter metrics"})," and ",(0,o.jsx)(n.strong,{children:"blockchain metrics"}),".\nThe monitoring infrastructure can either be run as a local grafana cluster or as a ",(0,o.jsx)(n.a,{href:"https://grafana.com/products/cloud/",children:"cloud-based solution"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"For cloud-based solutions, the prometheus process must be publicly accessible, e.g., via a reverse proxy."})}),"\n",(0,o.jsx)(n.h2,{id:"what-will-be-installed",children:"What Will Be Installed"}),"\n",(0,o.jsx)(n.p,{children:"The Docker compose setup creates and deploys up to four containers, all of which are optional:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Node Exporter"}),": collects metrics from the host machine including CPU, memory, and storage usage, and network traffic statistics"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Prometheus"}),": stores the metrics collected by Node Exporter and collects additional metrics from the blockchain node"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Grafana"}),": shows the collected metrics in a customizable dashboard and can be configured to send alerts when certain conditions are met"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Collator"}),": the collator node itself, which runs one of the available KILT runtimes"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["Install the latest version of docker-compose from the ",(0,o.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"official docker-compose installation guide"}),", then:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Clone the ",(0,o.jsx)(n.a,{href:"https://github.com/KILTprotocol/docs",children:"entire KILT chain repo"})," or download only the ",(0,o.jsx)(n.a,{href:"https://github.com/KILTprotocol/docs/tree/master/collator",children:"monitoring template"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Change directory to the above with ",(0,o.jsx)(n.code,{children:"cd docs/collator"})]}),"\n",(0,o.jsxs)(n.li,{children:["Edit the ",(0,o.jsx)(n.code,{children:".env"})," file and insert your desired grafana admin user and password"]}),"\n",(0,o.jsx)(n.li,{children:"Depending on the installation type either:"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["run ",(0,o.jsx)(n.code,{children:"docker-compose up -d"})," to install only Node Exporter and prometheus or"]}),"\n",(0,o.jsxs)(n.li,{children:["run ",(0,o.jsx)(n.code,{children:"docker-compose up --profile grafana -d"})," to install Node Exporter, prometheus and grafana or"]}),"\n",(0,o.jsxs)(n.li,{children:["run ",(0,o.jsx)(n.code,{children:"docker-compose --profile collator --profile grafana up -d"})," to install Node Exporter, prometheus, grafana ",(0,o.jsx)(n.strong,{children:"and"})," a Collator node"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["Secure the endpoints:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Install nginx with certbot ",(0,o.jsx)(n.code,{children:"sudo apt install nginx certbot python3-certbot-nginx"})]}),"\n",(0,o.jsxs)(n.li,{children:["If ufw is enabled, allow Nginx Full: ",(0,o.jsx)(n.code,{children:"sudo ufw allow 'Nginx Full'"})]}),"\n",(0,o.jsxs)(n.li,{children:["Generate an SSL certificate: ",(0,o.jsx)(n.code,{children:"sudo certbot --nginx -d ${DOMAIN_OF_SERVER_NAME}"})]}),"\n",(0,o.jsxs)(n.li,{children:["Enable certificate renewal by editing the crontab list ",(0,o.jsx)(n.code,{children:"crontab -e"})," and appending ",(0,o.jsx)(n.code,{children:"0 5 * * * /usr/bin/certbot renew --quiet"})]}),"\n",(0,o.jsxs)(n.li,{children:["Reload nginx after replacing the default nginx file with prometheus endpoint (if grafana cloud is chosen) or grafana endpoint (if grafana installed) by adding the following config snippet to ",(0,o.jsx)(n.code,{children:"/etc/nginx/sites-enabled/default"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"  location / {\n      proxy_pass http://localhost:9090/;    #proxy_pass http://localhost:3000/;\n  }\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"6",children:["\n",(0,o.jsxs)(n.li,{children:["Enable basic authentication by replacing the default password in ",(0,o.jsx)(n.code,{children:"prometheus.yml"})," using  ",(0,o.jsx)(n.code,{children:"htpasswd -nBC 10 \"\" | tr -d ':\\n'"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"testing-the-configuration",children:"Testing the Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["The configuration can be checked by visiting ",(0,o.jsx)(n.code,{children:"https://localhost:3000"})," and authenticating with the username and password set in ",(0,o.jsx)(n.code,{children:".env"})," at step 3."]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-alert-notification-channel",children:"Configuring Alert Notification Channel"}),"\n",(0,o.jsxs)(n.p,{children:["Choose any of the supported notification channels and follow the ",(0,o.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/alerting/old-alerting/notifications/",children:"grafana documentation"})," to receive alerts and notifications."]}),"\n",(0,o.jsx)(n.p,{children:"Overall, for monitoring we recommend the following stack:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Prometheus"}),"\n",(0,o.jsx)(n.li,{children:"Grafana"}),"\n",(0,o.jsx)(n.li,{children:"Node exporter"}),"\n",(0,o.jsx)(n.li,{children:"Nginx"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var o=t(7294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);