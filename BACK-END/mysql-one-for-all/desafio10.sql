USE SpotifyClone;

DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico (user_id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE quant INT;
SELECT COUNT(*) FROM historico WHERE usuario_id = user_id INTO quant;
RETURN quant;
END $$

DELIMITER ;
