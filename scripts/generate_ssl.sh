openssl genrsa -out ssl/localhost.key 3072
openssl req -new -out ssl/localhost.csr -sha256 -key ssl/localhost.key -subj "/C=US/ST=State/L=City/O=Organization/OU=Department/CN=172.18.0.3"
openssl x509 -req -in ssl/localhost.csr -days 365 -signkey ssl/localhost.key -out ssl/localhost.cert -outform PEM