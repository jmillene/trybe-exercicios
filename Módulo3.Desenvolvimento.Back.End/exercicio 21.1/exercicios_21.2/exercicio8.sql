
## 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).

SELECT job_id ,SUM(salary) AS 'soma salario' FROM employees
GROUP BY job_id HAVING job_id = 'it_prog';