CREATE VIEW perfil_artistas AS
SELECT artista.nome AS 'artista', album.nome AS 'album', COUNT(seguindo_artista.artista_id) AS 'seguidores'
FROM SpotifyClone.artista AS artista
INNER JOIN SpotifyClone.album AS album ON album.artista_id = artista.id
INNER JOIN SpotifyClone.seguindo_artista AS seguindo_artista ON seguindo_artista.artista_id = artista.id
GROUP BY (album.id)
ORDER BY 3 DESC, 1, 2;
