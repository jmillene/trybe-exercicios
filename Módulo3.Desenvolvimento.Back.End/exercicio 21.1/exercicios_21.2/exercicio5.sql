## 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

SELECT MAX(ROUND(salary, 2) ) AS 'MAIOR SALÁRIO',
SUM(ROUND(salary, 2) ) AS 'SOMA DOS SALÁRIOS',
ROUND(AVG(salary), 2)AS 'MÉDIA DOS SALÁRIOS'
FROM employees;