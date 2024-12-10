FROM prestashop/prestashop:1.7.8

COPY ./ssl/localhost.key /var/www/prestashop/.ssl/localhost.key
COPY ./ssl/localhost.cert /var/www/prestashop/.ssl/localhost.cert

COPY ./ssl/default-ssl.conf /etc/apache2/sites-available/000-default-ssl.conf

RUN a2enmod ssl \
    && ln -s /etc/apache2/sites-available/000-default-ssl.conf /etc/apache2/sites-enabled/000-default-ssl.conf

EXPOSE 443

CMD ["apache2-foreground"]
