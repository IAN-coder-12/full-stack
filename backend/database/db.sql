CREATE DATABASE meganet_online

USE meganet

CREATE TABLE users(
    id INT(11) PRIMARY KEY NOT NULL,
    username VARCHAR(15) NOT NULL,
    password VARCHAR(15) NOT NULL,
    fullname VARCHAR(60) NOT NULL
);

ALTER TABLE users 
    modify id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

CREATE TABLE products(
    id INT(15) PRIMARY KEY NOT NULL,
    clave VARCHAR(15) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255) NOT NULL

)

INSERT INTO users (username, password, fullname) values ('ian1210', 'JU1Pz,98', 'Ian Hernandez');

UPDATE users SET id = 1 WHERE username = 'ian1210';