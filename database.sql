drop schema if exists autocomplete;
create schema autocomplete;
use autocomplete;

CREATE TABLE IF NOT EXISTS countries (
  id int(9) primary key AUTO_INCREMENT,
  countryname varchar(192) unique
);

INSERT INTO countries (countryname) VALUES
('Afghanistan'),
('Albania'),
('Bahamas'),
('Bahrain'),
('Brasil'),
('Cambodia'),
('Cameroon'),
('Denmark'),
('Djibouti'),
('East Timor'),
('Ecuador'),
('Falkland Islands (Malvinas)'),
('Faroe Islands'),
('Gabon'),
('Gambia'),
('Haiti'),
('Heard and Mc Donald Islands'),
('Iceland'),
('India'),
('Jamaica'),
('Japan'),
('Kenya'),
('Kiribati'),
('Lao Peoples Democratic Republic'),
('Latvia'),
('Macau'),
('Macedonia');
