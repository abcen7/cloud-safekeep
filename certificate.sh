#!/bin/sh

DOMAIN=cloud.bivreost.su
EMAIL=sermyagin.abcen7@gmail.com


# Start Nginx
nginx -g 'daemon off;' &

# Obtain or renew SSL certificate using certbot
certbot certonly --webroot -w /usr/share/nginx/html -d $DOMAIN --email $EMAIL --agree-tos --non-interactive --force-renewal

# Reload Nginx to use the new certificate
nginx -s reload