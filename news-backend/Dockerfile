FROM php:7.4-apache

WORKDIR /var/www/html

RUN docker-php-ext-install pdo pdo_mysql
RUN a2enmod rewrite

COPY . /var/www/html

RUN chown -R www-data:www-data /var/www/html/storage

# RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000

# FROM php:7.4-apache

# RUN docker-php-ext-install pdo pdo_mysql

# WORKDIR /var/www/html

# COPY . .

# RUN composer install

# RUN chown -R www-data:www-data /var/www/html/storage

# RUN a2enmod rewrite