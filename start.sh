#!/bin/sh

# Replace config variables
sed -i "s|DUMMY_API_URL|$API_URL|g" /var/www/*
sed -i "s|DUMMY_SENTRY_DSN|$SENTRY_DSN|g" /var/www/*

# Start Nginx
nginx -g "daemon off;"
