## 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).
SELECT job_id, AVG(salary) AS 'media salarial' FROM employees
WHERE job_id <> 'it_prog' GROUP BY job_id ORDER BY 'media salarial' DESC;