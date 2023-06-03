FROM php:7.4-apache

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql
RUN a2enmod rewrite

COPY . /var/www/html

RUN chown -R www-data:www-data /var/www/html/storage

CMD php artisan serve --host=0.0.0.0 --port=8000