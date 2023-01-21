-- create
CREATE TABLE classmates (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO classmates (name, age, address) VALUES ('Кирилл', 17, 'Москва');
INSERT INTO classmates (name, age, address) VALUES ('Андрей', 29, 'Москва');
INSERT INTO classmates (name, age, address) VALUES ('Михаил', 18, 'Екатеринбург');
INSERT INTO classmates (name, age, address) VALUES ('Ирина', 30, 'Москва');
INSERT INTO classmates (name, age, address) VALUES ('Аня', 16, 'Ижевск');
INSERT INTO classmates (name, age, address) VALUES ('Оля', 26, 'Волгроград');
INSERT INTO classmates (name, age, address) VALUES ('Степан', 18, 'Москва');
INSERT INTO classmates (name, age, address) VALUES ('Юрий', 31, 'Выборг');
INSERT INTO classmates (name, age, address) VALUES ('Антон', 18, 'Калининград');
INSERT INTO classmates (name, age, address) VALUES ('МАша', 45, 'Москва');

-- fetch 
SELECT name FROM classmates WHERE address='Москва' AND age BETWEEN 18 AND 29;
