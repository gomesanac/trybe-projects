CREATE VIEW cancoes_premium AS
SELECT cancoes.nome AS 'nome', COUNT(historico.cancao_id) AS 'reproducoes'
FROM SpotifyClone.historico AS historico
INNER JOIN SpotifyClone.cancoes AS cancoes ON cancoes.id = historico.cancao_id
INNER JOIN SpotifyClone.usuario AS usuario ON usuario.id = historico.usuario_id
WHERE usuario.plano_id IN (2, 3)
GROUP BY (cancoes.nome)
ORDER BY 1;
