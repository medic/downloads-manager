
To install the couchapp:

```
cd couchapp
kanso install
kanso push http://localhost:5984/downloads
```

Then to create a new download use the script:

```
./upload
```

The URL to the attachment to download the file is a little ugly but can be
fixed with a CouchDB vhosts configuration or in the webserver.

Nginx configuration example for a GET:

```
  location /downloads {
      rewrite ^/downloads/(.*)$ /_couch/downloads/$1/$1 redirect;
  }
```
