CREATE VIEW historico_reproducao_usuarios AS
SELECT usuario.nome AS 'usuario', cancoes.nome AS 'nome'
FROM SpotifyClone.historico AS historico
INNER JOIN SpotifyClone.usuario AS usuario ON usuario.id = historico.usuario_id
INNER JOIN SpotifyClone.cancoes AS cancoes ON cancoes.id = historico.cancao_id
ORDER BY 1, 2;
