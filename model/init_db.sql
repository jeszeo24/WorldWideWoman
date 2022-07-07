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


DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    preferredname VARCHAR(100) NOT NULL,
    age SMALLINT,
    favedestination VARCHAR(2083),
    likes VARCHAR(2083),
    instagram VARCHAR(2083),
    profilephoto VARCHAR(2083)
);

INSERT INTO users (preferredname, age, favedestination, likes, instagram, profilephoto)
VALUES ("Jess", 35, "Barcelona", "Traveling, reading, coding", "@jeszeo", "https://unsplash.com/es/images/animals/penguin" ), ("Mike", 41, "Mallorca", "Traveling, tech, food", "@mike", "https://simple.wikipedia.org/wiki/Sea_otter");