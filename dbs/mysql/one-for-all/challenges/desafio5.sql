CREATE VIEW top_2_hits_do_momento AS
SELECT cancoes.nome AS 'cancao', COUNT(historico.cancao_id) 'reproducoes'
FROM SpotifyClone.historico AS historico
INNER JOIN SpotifyClone.cancoes AS cancoes ON historico.cancao_id = cancoes.id
GROUP BY (historico.cancao_id)
ORDER BY 2 DESC, 1
LIMIT 2;
