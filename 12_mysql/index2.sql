show TABLES

CREATE TABLE customer(
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
)

DESC customer

INSERT INTO customer VALUES('aaa','손흥민','1992-03-17');
INSERT INTO customer VALUES('bbb','황희찬','1997-11-01');
INSERT INTO customer VALUES('ccc','이강인','2001-05-31');
INSERT INTO customer VALUES('ddd','조현우','1992-03-17');

SELECT * FROM customer;

DROP TABLE orderlist;

-- 외래키 테이블
-- ON UPDATE CASCADE 
-- 기준 테이블의 데이터가 변경되면 참조테이블의 데이터 같이 변경
-- 즉, 회원테이블의 id가 변경되면 구매테이블의 customer_id가 같이 변경됨
-- ON DELETE CASCADE
-- 기준 테이블의 데이터가 삭제도면 참조테이블의 데이터도 같이 삭제
-- 회원 테이블의 id가 삭제되면 구매테이블의 customer_id가 같이 삭제
CREATE Table orderlist(
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 테이블 삭제시
-- 구매 테이블 orderlist (왜래키가 있는 테이블을 먼저 삭제해야함)
-- 회원 테이블 customer (참조되는 기본키가 있는테이블) 나중에 삭제

DESC orderlist

INSERT INTO orderlist(customer_id, product_name, quantity) VALUES ('aaa','맥북',1);
INSERT INTO orderlist(customer_id, product_name, quantity) VALUES ('bbb','빅파이',31);
INSERT INTO orderlist(customer_id, product_name, quantity) VALUES ('ccc','키보드',3);
INSERT INTO orderlist(customer_id, product_name, quantity) VALUES ('bbb','초코파이',5);
INSERT INTO orderlist(customer_id, product_name, quantity) VALUES ('ccc','귀여운 텀블러',2);
-- INSERT INTO orderlist(customer_id, product_name, quantity) VALUES ('ㄹㄹㄹ','귀여운 텀블러',2);
-- customer 데이터에 없는 회원은 구매할 수 없음

SELECT * FROM orderlist

-- JOIN: 두 테이블을 묶어서 하나의 테이블로 만듬
-- INNER JOIN
-- 1. INNER JOIN과 ON 사용
SELECT * FROM customer INNER JOIN orderlist ON customer.id=orderlist.customer_id;

-- INNER JOIN과 ON 사용 where 조회조건 추가
SELECT * FROM customer INNER JOIN orderlist ON customer.id=orderlist.customer_id WHERE quantity >= 5;

-- 2. WHERE 로 INNER JOIN 사용
SELECT * FROM customer, orderlist WHERE customer.id=orderlist.customer_id;
-- WHERE 로 INNER JOIN 사용 조회조건 추가
SELECT * FROM customer, orderlist WHERE customer.id=orderlist.customer_id AND quantity >= 5;

-- 특정 컬럼 조회
SELECT orderlist.id, customer.id, customer.name, orderlist.product_name, orderlist.quantity FROM orderlist, customer WHERE customer.id=orderlist.customer_id;

-- 테이블에 별칭 지어서 접근 (as)
-- SELECT c.id as user_id, o.id as order_id, c.name, o.product_name, o.quantity  FROM customer as c, orderlist as o WHERE user_id=order_id

-- left outer join, right outer join
SELECT * FROM orderlist LEFT OUTER JOIN customer ON orderlist.customer_id=customer_id;
SELECT * FROM orderlist RIGHT OUTER JOIN customer ON orderlist.customer_id=customer_id;

-- 네추럴조인
SELECT * FROM orderlist NATURAL JOIN customer

-- DCL
DESC mysql.user;
SELECT * FROM mysql.user

CREATE USER 'user2'@'localhost' IDENTIFIED BY '4321'

-- 권한 확인
SHOW GRANTS for 'user2'@'localhost';

-- 사용자 삭제
DROP USER 'user2'@'localhost';

-- 패스워드 변경
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by '1111';