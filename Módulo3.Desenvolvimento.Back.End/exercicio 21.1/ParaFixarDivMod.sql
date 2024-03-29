## Desafios com DIV e MOD
## Dica: Números pares são aqueles que podem ser divididos em duas partes iguais. Ou seja, são aqueles cuja divisão por 2 retorna resto 0.


## Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Ímpar'.
SELECT IF(15 MOD 2 = 0 ,'NUMERO PAR', 'NUMERO IMPAR') AS 'PAR OU IMPAR';
## Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
SELECT (220 DIV 12) AS 'QUANT GRUPOS';
18 GRUPOS
## Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM' , 220 MOD 12)) AS 'GRUPOS';
