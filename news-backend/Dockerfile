#FROM php:7.4-apache

# WORKDIR /var/www/html

# RUN docker-php-ext-install pdo pdo_mysql
# RUN a2enmod rewrite

# COPY . /var/www/html

# RUN chown -R www-data:www-data /var/www/html/storage

# CMD php artisan serve --host=0.0.0.0 --port=8000



#########################################################

FROM php:7.4-apache

RUN apt-get update && apt-get install -y \
    git \
    unzip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN docker-php-ext-install pdo pdo_mysql
RUN a2enmod rewrite
RUN service apache2 restart

WORKDIR /var/www/html

COPY . /var/www/html

RUN composer install
RUN php artisan key:generate

CMD php artisan serve --host=0.0.0.0 --port=8000