CREATE VIEW top_3_artistas AS
SELECT artista.nome AS 'artista', COUNT(seguindo_artista.artista_id) AS 'seguidores'
FROM SpotifyClone.seguindo_artista AS seguindo_artista
INNER JOIN SpotifyClone.artista AS artista ON seguindo_artista.artista_id = artista.id
GROUP BY (seguindo_artista.artista_id)
ORDER BY 2 DESC, 1
LIMIT 3;
