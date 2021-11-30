CREATE DATABASE meganet_online

USE meganet

CREATE TABLE users(
    id INT(11) PRIMARY KEY NOT NULL,
    username VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(15) NOT NULL,
    fullname VARCHAR(60) NOT NULL,
    correo VARCHAR(45) NOT NULL UNIQUE
);
/* Modificar tabla */
ALTER TABLE users 
    modify id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

/* Crear tabla */
CREATE TABLE products(
    id INT(15) PRIMARY KEY NOT NULL,
    clave VARCHAR(15) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255) NOT NULL

)
/* Insertar elementos */
INSERT INTO users (username, password, fullname, correo) values 
('ian1210', 'JU1Pz,98', 'Ian Hernandez', 'ianhdez2020@gmail.com')
/* Si existe una llave duplicada(el dato no es valido) no saltar el valor de id que le corresponde al siguiente dato que si es valido */

ON DUPLICATE KEY UPDATE id=id
;

/* Modificar datos de una tabla */
UPDATE users SET id = 1 WHERE username = 'ian1210';


/* Agregar columnas */

ALTER TABLE users ADD COLUMN email VARCHAR(40) NOT NULL AFTER username;

/* Cambiar de lugar una columa */
ALTER TABLE users MODIFY COLUMN fullname VARCHAR BEFORE username;

/* Haciendo unico el campo de username */
ALTER TABLE users MODIFY correo VARCHAR(45) UNIQUE;
/* Eliminar columna */
alter table users drop column id;

/* Eliminar datos */
 DELETE from users; 
