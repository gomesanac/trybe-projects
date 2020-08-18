USE SpotifyClone;

DELIMITER $$

CREATE TRIGGER trigger_usuario_delete
BEFORE DELETE ON usuario
FOR EACH ROW
BEGIN
    DELETE FROM historico WHERE usuario_id = OLD.id;
    DELETE FROM seguindo_artista WHERE usuario_id = OLD.id;
END $$

DELIMITER ;
