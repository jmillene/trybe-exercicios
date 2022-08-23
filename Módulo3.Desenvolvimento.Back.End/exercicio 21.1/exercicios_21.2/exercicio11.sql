## 12. Escreva uma query que só exiba as informações dos 
funcionários cujo o primeiro nome tenha oito ou mais caracteres.

SET SQL_SAFE_UPDATES = 0;
UPDATE hr.employees 
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';