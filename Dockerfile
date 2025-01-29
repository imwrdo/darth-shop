FROM prestashop/prestashop:1.7.8

COPY ./ssl/localhost.key /var/www/prestashop/.ssl/localhost.key
COPY ./ssl/localhost.cert /var/www/prestashop/.ssl/localhost.cert

COPY ./ssl/default-ssl.conf /etc/apache2/sites-available/000-default-ssl.conf

RUN rm -rf /var/www/html/*
COPY --chown=www-data:root --chmod=755 ./prestashop /var/www/html
COPY ./docker/template/parameters.php  /var/www/html/app/config/parameters.php
COPY ./deploy /deploy

RUN a2enmod ssl \
    && ln -s /etc/apache2/sites-available/000-default-ssl.conf /etc/apache2/sites-enabled/000-default-ssl.conf \
    && apt-get update \
    && echo "HEY" \
    && apt-get install -y gcc make libmemcached-dev pkg-config libz-dev \
    && echo "HELLO" \
    && pecl install memcached \
    && echo "HI" \
    && echo "extension=memcached.so" > /usr/local/etc/php/conf.d/20-memcached.ini \
    && ./deploy/db_autoload.sh



EXPOSE 443

CMD ["apache2-foreground"]
