CREATE VIEW estatisticas_musicais AS
    SELECT 
        COUNT(cancoes.id) AS 'cancoes',
        (SELECT 
                COUNT(artista.id)
            FROM
                SpotifyClone.artista AS artista) AS 'artistas',
        (SELECT 
                COUNT(album.id)
            FROM
                SpotifyClone.album AS album) AS 'albuns'
    FROM
        SpotifyClone.cancoes AS cancoes;
