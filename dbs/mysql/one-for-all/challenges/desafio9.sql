USE SpotifyClone;

DELIMITER $$

CREATE PROCEDURE albuns_do_artista (IN nome_artista VARCHAR(100))
BEGIN
SELECT nome_artista AS 'artista', album.nome AS 'album'
FROM album AS album
INNER JOIN artista AS artista ON artista.id = album.artista_id
AND artista.nome = nome_artista;
END $$

DELIMITER ;
