## 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).
SELECT * FROM employees;
SELECT job_id ,SUM(salary) AS 'soma salario' FROM employees
GROUP BY job_id;