"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={id:"monitoring",title:"Set Up Node Monitoring"},r=void 0,l={unversionedId:"participate/staking/advanced_collator_section/monitoring",id:"participate/staking/advanced_collator_section/monitoring",title:"Set Up Node Monitoring",description:"It would be ideal if the host being monitored is not the host monitoring, i.e., if the monitoring process does not run on the same host as the collator process.",source:"@site/docs/participate/01_staking/02_advanced_collator_section/04_monitoring.md",sourceDirName:"participate/01_staking/02_advanced_collator_section",slug:"/participate/staking/advanced_collator_section/monitoring",permalink:"/docs/participate/staking/advanced_collator_section/monitoring",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/02_advanced_collator_section/04_monitoring.md",tags:[],version:"current",lastUpdatedAt:1663313121,formattedLastUpdatedAt:"Sep 16, 2022",sidebarPosition:4,frontMatter:{id:"monitoring",title:"Set Up Node Monitoring"},sidebar:"staking",previous:{title:"Lifecycle of a Collator",permalink:"/docs/participate/staking/advanced_collator_section/lifecycle"},next:{title:"Bootnodes",permalink:"/docs/participate/staking/advanced_collator_section/bootnodes"}},s={},c=[{value:"What Will Be Installed",id:"what-will-be-installed",level:2},{value:"Installation",id:"installation",level:2},{value:"Testing the Configuration",id:"testing-the-configuration",level:2},{value:"Configuring Alert Notification Channel",id:"configuring-alert-notification-channel",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It would be ideal if the host being monitored is not the host monitoring, i.e., if the monitoring process does not run on the same host as the collator process.\nHowever, in cases of limited resources, the two can also co-exist on the same host."),(0,a.kt)("p",null,"The monitoring process collects two types of metrics: ",(0,a.kt)("strong",{parentName:"p"},"Node Exporter metrics")," and ",(0,a.kt)("strong",{parentName:"p"},"blockchain metrics"),".\nThe monitoring infrastructure can either be run as a local grafana cluster or as a ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/products/cloud/"},"cloud-based solution"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For cloud-based solutions, the prometheus process must be publicly accessible, e.g., via a reverse proxy.")),(0,a.kt)("h2",{id:"what-will-be-installed"},"What Will Be Installed"),(0,a.kt)("p",null,"The Docker compose setup creates and deploys up to four containers, all of which are optional:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Node Exporter"),": collects metrics from the host machine including CPU, memory, and storage usage, and network traffic statistics"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Prometheus"),": stores the metrics collected by Node Exporter and collects additional metrics from the blockchain node"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Grafana"),": shows the collected metrics in a customizable dashboard and can be configured to send alerts when certain conditions are met"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Collator"),": the collator node itself, which runs one of the available KILT runtimes")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install the latest version of docker-compose from the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"official docker-compose installation guide"),", then:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clone the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KILTprotocol/docs"},"entire KILT chain repo")," or download only the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KILTprotocol/docs/tree/master/collator"},"monitoring template"),"."),(0,a.kt)("li",{parentName:"ol"},"Change directory to the above with ",(0,a.kt)("inlineCode",{parentName:"li"},"cd docs/collator")),(0,a.kt)("li",{parentName:"ol"},"Edit the ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file and insert your desired grafana admin user and password"),(0,a.kt)("li",{parentName:"ol"},"Depending on the installation type either:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," to install only Node Exporter and prometheus or"),(0,a.kt)("li",{parentName:"ul"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose up --profile grafana -d")," to install Node Exporter, prometheus and grafana or"),(0,a.kt)("li",{parentName:"ul"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose --profile collator --profile grafana up -d")," to install Node Exporter, prometheus, grafana ",(0,a.kt)("strong",{parentName:"li"},"and")," a Collator node")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Secure the endpoints:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Install nginx with certbot ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo apt install nginx certbot python3-certbot-nginx")),(0,a.kt)("li",{parentName:"ol"},"If ufw is enabled, allow Nginx Full: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo ufw allow 'Nginx Full'")),(0,a.kt)("li",{parentName:"ol"},"Generate an SSL certificate: ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo certbot --nginx -d ${DOMAIN_OF_SERVER_NAME}")),(0,a.kt)("li",{parentName:"ol"},"Enable certificate renewal by editing the crontab list ",(0,a.kt)("inlineCode",{parentName:"li"},"crontab -e")," and appending ",(0,a.kt)("inlineCode",{parentName:"li"},"0 5 * * * /usr/bin/certbot renew --quiet")),(0,a.kt)("li",{parentName:"ol"},"Reload nginx after replacing the default nginx file with prometheus endpoint (if grafana cloud is chosen) or grafana endpoint (if grafana installed) by adding the following config snippet to ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/nginx/sites-enabled/default"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  location / {\n      proxy_pass http://localhost:9090/;    #proxy_pass http://localhost:3000/;\n  }\n")),(0,a.kt)("ol",{parentName:"li",start:6},(0,a.kt)("li",{parentName:"ol"},"Enable basic authentication by replacing the default password in ",(0,a.kt)("inlineCode",{parentName:"li"},"prometheus.yml")," using  ",(0,a.kt)("inlineCode",{parentName:"li"},"htpasswd -nBC 10 \"\" | tr -d ':\\n'"))))),(0,a.kt)("h2",{id:"testing-the-configuration"},"Testing the Configuration"),(0,a.kt)("p",null,"The configuration can be checked by visiting ",(0,a.kt)("inlineCode",{parentName:"p"},"https://localhost:3000")," and authenticating with the username and password set in ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," at step 3."),(0,a.kt)("h2",{id:"configuring-alert-notification-channel"},"Configuring Alert Notification Channel"),(0,a.kt)("p",null,"Choose any of the supported notification channels and follow the ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/alerting/old-alerting/notifications/"},"grafana documentation")," to receive alerts and notifications."),(0,a.kt)("p",null,"Overall, for monitoring we recommend the following stack:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prometheus"),(0,a.kt)("li",{parentName:"ul"},"Grafana"),(0,a.kt)("li",{parentName:"ul"},"Node exporter"),(0,a.kt)("li",{parentName:"ul"},"Nginx")))}d.isMDXComponent=!0}}]);