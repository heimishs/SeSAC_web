
USE SESAC;
CREATE Table visitor(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

DROP TABLE visitor;

DESC visitor;

INSERT INTO visitor(name, comment) VALUES("홍길동",'내가왔다');
INSERT INTO visitor (name, comment)  VALUES("이찬혁",'으라차차');
INSERT INTO visitor VALUES(null,"삭제예정",'으라차차');


-- DCL
CREATE USER 'user'@'%' IDENTIFIED BY 'xzrjs1589';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;

ALTER USER 'user'@'%' IDENTIFIED WITH 'caching_sha2_password' BY 'xzrjs1589';

ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'xzrjs1589';
FLUSH PRIVILEGES;


ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY 'xzrjs1589';
FLUSH PRIVILEGES;

SELECT * FROM mysql.user;

SHOW GRANTS FOR 'user'@'%';

SELECT * FROM visitor WHERE id = 1;

SELECT * FROM visitor;

DELETE FROM visitor WHERE id=5;

UPDATE visitor SET name="qqqq", comment="ffaa" WHERE id=6