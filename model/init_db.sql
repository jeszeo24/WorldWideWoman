DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    city VARCHAR(100) NOT NULL,
    country VARCHAR (100) NOT NULL,
    traveldate DATE,
    ratesafety SMALLINT(5),
    rateaffordability SMALLINT(5),
    rateaccessibility SMALLINT(5),
    photos VARCHAR(2083),
    optional TEXT
);

INSERT INTO reviews (city, country, traveldate, ratesafety, rateaffordability, rateaccessibility)
VALUES ("Barcelona", "Spain", "2022-07-05", 5, 3, 5), ("Kuala Lumpur", "Malaysia", "2022-03-24", 4, 5, 2);