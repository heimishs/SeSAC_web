CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    pw VARCHAR(255) NOT NULL,
    name VARCHAR(15) NOT NULL,
    userid VARCHAR(15) NOT NULL
)

use sesac;

INSERT INTO user (pw, name, userid, createdAt, updatedAt) VALUES ("1234", "관리자", "admin", "2024-01-01T00:00:00", "2024-01-01T00:00:00");

