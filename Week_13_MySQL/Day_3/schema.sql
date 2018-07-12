CREATE DATABASE 1000songsDB;
USE 1000songsDB;

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT,
    artist VARCHAR(100) NULL,
    song_name VARCHAR(100) NULL,
    year_released INT(4) NULL,
    sales_total DECIMAL(10, 10) NULL,
    sales_usa DECIMAL(10, 10) NULL,
    sales_uk DECIMAL(10, 10) NULL,
    sales_eur DECIMAL(10, 10) NULL,
    sales_row DECIMAL(10, 10) NULL,
    PRIMARY KEY (id)

);

SELECT * FROM songs