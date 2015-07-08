
## Intallation

To install the couchapp:

```
cd couchapp
kanso install
kanso push http://localhost:5984/downloads
```

## Adding Files

Then to create a new download use the script:

```
./upload
```

## Security

Once the design doc is pushed then only admins can modify the database.  The
user needs to have the _admin role or the name or role needs to match what is
defined on the security object on the database.

## Configuration

The URL to the attachment to download the file is a little ugly but can be
fixed with a CouchDB vhosts configuration or in the webserver.

Nginx configuration example for a GET:

```
  location /downloads {
      rewrite ^/downloads/(.*)$ /_couch/downloads/$1/$1 redirect;
  }
```
