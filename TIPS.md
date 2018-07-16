## Tips

# Nginx

Use Nginx in Reverse Proxy

http://www.nikola-breznjak.com/blog/nodejs/using-nginx-as-a-reverse-proxy-in-front-of-your-node-js-application/

Enable GZip:

```
	gzip on;
	gzip_disable "msie6";

	gzip_vary on;
	gzip_proxied any;
	gzip_comp_level 6;
	gzip_buffers 16 8k;
	gzip_http_version 1.1;
	gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
```
