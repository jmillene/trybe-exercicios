USANDO O BANCO DE DADOS SAKILA, EXERCICIOS DE FIXAÇÃO

## Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org. As informações podem ser encontradas na tabela customer
SELECT * FROM customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

## Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2, e não inclua o cliente KENNETH no resultado. As informações podem ser encontradas na tabela customer.
SELECT first_name FROM customer 
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH ' ORDER BY first_name ASC ;

## O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film.
FROM film WHERE rating <> 'NC-17' AND
replacement_cost >= 18
 ORDER BY replacement_cost DESC LIMIT 100;

## Quantos clientes estão ativos e na loja 1? As informações podem ser encontradas na tabela customer.
SELECT COUNT(*) FROM customer WHERE store_id = 1 AND active = 1;
## Mostre todos os detalhes dos clientes que não estão ativos na loja 1. As informações podem ser encontradas na tabela customer.
SELECT * FROM customer WHERE store_id = 1 AND active = 0;
## Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film.
SELECT title FROM film WHERE rating = 'NC-17' ORDER BY rental_rate ASC LIMIT 50;