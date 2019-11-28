-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-11-2019 a las 04:43:31
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `chibchadb`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `consultarComision` (`cd` INTEGER)  BEGIN

DECLARE cantidad INTEGER;
DECLARE auxC INTEGER;
DECLARE auxP INTEGER;
DECLARE total INTEGER;
DECLARE done INT DEFAULT FALSE;
DECLARE c1 CURSOR FOR SELECT CLIENTE.cedula, PAQUETE.val_paquete FROM CLIENTE, PAQUETE, DISTRIBUIDOR WHERE CLIENTE.cod_paquete= PAQUETE.cod_paquete AND CLIENTE.cedula_distribuidor=cd;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
SELECT COUNT(*) INTO cantidad FROM CLIENTE, PAQUETE, DISTRIBUIDOR WHERE CLIENTE.cod_paquete= PAQUETE.cod_paquete AND CLIENTE.cedula_distribuidor=cd;
SET total=0;
OPEN c1;


 read_loop: LOOP
    FETCH c1 INTO auxC, auxP;
    IF done THEN
      LEAVE read_loop;
    END IF;
     SET total= total+auxP;
  END LOOP;


CLOSE c1;
SELECT total;
END$$

--
-- Funciones
--
CREATE DEFINER=`root`@`localhost` FUNCTION `consultarComisionF` (`cd` INTEGER) RETURNS INT(11) BEGIN

DECLARE cantidad INTEGER;
DECLARE auxC INTEGER;
DECLARE auxP INTEGER;
DECLARE total INTEGER;
DECLARE done INT DEFAULT FALSE;
DECLARE c1 CURSOR FOR SELECT CLIENTE.cedula, PAQUETE.val_paquete FROM CLIENTE, PAQUETE, DISTRIBUIDOR WHERE CLIENTE.cod_paquete= PAQUETE.cod_paquete AND CLIENTE.cedula_distribuidor=cd;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
SELECT COUNT(*) INTO cantidad FROM CLIENTE, PAQUETE, DISTRIBUIDOR WHERE CLIENTE.cod_paquete= PAQUETE.cod_paquete AND CLIENTE.cedula_distribuidor=cd;
SET total=0;
OPEN c1;


 read_loop: LOOP
    FETCH c1 INTO auxC, auxP;
    IF done THEN
      LEAVE read_loop;
    END IF;
     SET total= total+auxP;
  END LOOP;


CLOSE c1;
RETURN total;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `cedula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`cedula`) VALUES
(1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `cedula` int(11) NOT NULL,
  `cod_tarjeta` int(11) DEFAULT '0',
  `cod_p_pago` int(11) DEFAULT '0',
  `cod_paquete` int(11) DEFAULT '0',
  `cedula_distribuidor` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`cedula`, `cod_tarjeta`, `cod_p_pago`, `cod_paquete`, `cedula_distribuidor`) VALUES
(3, 1, 4, 2, 5),
(33, 0, 0, 0, 0),
(44, 0, 0, 0, 0),
(45, 0, 3, 1, 5),
(213, 0, 0, 0, 0),
(521066, 0, 0, 0, 0),
(1007646684, 0, 1, 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `distribuidor`
--

CREATE TABLE `distribuidor` (
  `cedula` int(11) NOT NULL,
  `cod_t_distribuidor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `distribuidor`
--

INSERT INTO `distribuidor` (`cedula`, `cod_t_distribuidor`) VALUES
(0, 1),
(5, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dominio`
--

CREATE TABLE `dominio` (
  `cod_dominio` int(11) NOT NULL,
  `cedula` int(11) DEFAULT NULL,
  `nom_dominio` varchar(30) DEFAULT NULL,
  `cod_registrador` int(11) DEFAULT NULL,
  `descripcion` varchar(400) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dominio`
--

INSERT INTO `dominio` (`cod_dominio`, `cedula`, `nom_dominio`, `cod_registrador`, `descripcion`) VALUES
(1, 3, 'Cami.com', 3302, 'hOLA'),
(2, 44, 'LAVA.com', 4, NULL),
(3, 44, 'awer', 0, 'qwert'),
(6, 44, 'Pastelitos', 5, 'venta de pasteles'),
(1011, 1007646684, 'vale@gmail.com', 3302, 'Fresas con chocolate');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `cedula` int(11) NOT NULL,
  `cod_t_empleado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`cedula`, `cod_t_empleado`) VALUES
(2, 1),
(43, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `cod_estado` int(11) NOT NULL,
  `nom_estado` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`cod_estado`, `nom_estado`) VALUES
(1, 'Pendiente'),
(2, 'Revisado'),
(3, 'Procesando Solicitud'),
(4, 'Aceptado'),
(5, 'Rechazado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `cod_pais` int(11) NOT NULL,
  `nom_pais` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`cod_pais`, `nom_pais`) VALUES
(1, 'EEUU'),
(2, 'Francia'),
(3, 'Alemania'),
(4, 'Colombia'),
(5, 'Corea'),
(6, 'Rusia'),
(7, 'Dinamarca'),
(8, 'Perú');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paquete`
--

CREATE TABLE `paquete` (
  `cod_paquete` int(11) NOT NULL,
  `nom_paquete` varchar(30) DEFAULT NULL,
  `val_paquete` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paquete`
--

INSERT INTO `paquete` (`cod_paquete`, `nom_paquete`, `val_paquete`) VALUES
(0, 'Sin Seleccionar', 0),
(1, 'Chibcha-Platino', 70000),
(2, 'Chibcha-Plata', 50000),
(3, 'Chibcha-Oro', 30000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planpago`
--

CREATE TABLE `planpago` (
  `cod_p_pago` int(11) NOT NULL,
  `nom_p_pago` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `planpago`
--

INSERT INTO `planpago` (`cod_p_pago`, `nom_p_pago`) VALUES
(0, 'Sin Seleccionar'),
(1, 'Mensual'),
(2, 'Trimestral'),
(3, 'Semestral'),
(4, 'Anual');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registrador`
--

CREATE TABLE `registrador` (
  `cod_registrador` int(11) NOT NULL,
  `cod_pais` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registrador`
--

INSERT INTO `registrador` (`cod_registrador`, `cod_pais`) VALUES
(4, 1),
(3302, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarjeta`
--

CREATE TABLE `tarjeta` (
  `cod_tarjeta` int(11) NOT NULL,
  `cod_t_tarjeta` int(11) DEFAULT NULL,
  `numero` varchar(30) DEFAULT NULL,
  `fecha_vencimiento` date DEFAULT NULL,
  `cod_seguridad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tarjeta`
--

INSERT INTO `tarjeta` (`cod_tarjeta`, `cod_t_tarjeta`, `numero`, `fecha_vencimiento`, `cod_seguridad`) VALUES
(0, 1, '0', '0000-00-00', 0),
(1, 1, '1234', '2022-01-29', 3320);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ticket`
--

CREATE TABLE `ticket` (
  `cod_ticket` int(11) NOT NULL,
  `cod_t_ticket` int(11) DEFAULT NULL,
  `cod_dominio` int(11) DEFAULT NULL,
  `cod_estado` int(11) DEFAULT NULL,
  `descripcion` varchar(400) DEFAULT NULL,
  `respuesta` varchar(200) DEFAULT 'Pendiente',
  `cedula` int(11) DEFAULT NULL,
  `cod_registrador` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ticket`
--

INSERT INTO `ticket` (`cod_ticket`, `cod_t_ticket`, `cod_dominio`, `cod_estado`, `descripcion`, `respuesta`, `cedula`, `cod_registrador`) VALUES
(1, 2, 1, 4, 'Deseo cambiar de host', 'Se envió una solicitud de transferencia a Hostinger', 43, 3302),
(8, 1, 2, 1, 'df', 'si', NULL, NULL),
(20, 2, 2, 1, 'ds', 'fg', 44, NULL),
(21, 1, 1, 1, 'Prueba20', 'gf', 3, NULL),
(22, 3, 2, 1, 'No funciona bien :c', 'df', 44, NULL),
(23, 2, 1, 1, 'Si sirve :D', NULL, 0, NULL),
(26, 2, 1011, 1, 'Chocolate', NULL, 1007646684, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_distribuidor`
--

CREATE TABLE `t_distribuidor` (
  `cod_t_distribuidor` int(11) NOT NULL,
  `nom_t_distribuidor` varchar(30) DEFAULT NULL,
  `val_comision` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `t_distribuidor`
--

INSERT INTO `t_distribuidor` (`cod_t_distribuidor`, `nom_t_distribuidor`, `val_comision`) VALUES
(1, 'Básico', 10),
(2, 'Premium', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_empleado`
--

CREATE TABLE `t_empleado` (
  `cod_t_empleado` int(11) NOT NULL,
  `nom_t_empleado` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `t_empleado`
--

INSERT INTO `t_empleado` (`cod_t_empleado`, `nom_t_empleado`) VALUES
(1, 'Soporte N1'),
(2, 'Soporte N2'),
(3, 'Soporte N3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_tarjeta`
--

CREATE TABLE `t_tarjeta` (
  `cod_t_tarjeta` int(11) NOT NULL,
  `nom_t_tarjeta` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `t_tarjeta`
--

INSERT INTO `t_tarjeta` (`cod_t_tarjeta`, `nom_t_tarjeta`) VALUES
(1, 'VISA'),
(2, 'MASTERCARD'),
(3, 'DINERS');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_ticket`
--

CREATE TABLE `t_ticket` (
  `cod_t_ticket` int(11) NOT NULL,
  `nom_t_ticket` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `t_ticket`
--

INSERT INTO `t_ticket` (`cod_t_ticket`, `nom_t_ticket`) VALUES
(1, 'Peticiones/Quejas/Reclamos'),
(2, 'Trámites Dominio'),
(3, 'Reporte Errores');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `t_usuario`
--

CREATE TABLE `t_usuario` (
  `cod_t_usuario` int(11) NOT NULL,
  `nom_t_usuario` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `t_usuario`
--

INSERT INTO `t_usuario` (`cod_t_usuario`, `nom_t_usuario`) VALUES
(1, 'Administrador'),
(2, 'Cliente'),
(3, 'Registrador de Dominio'),
(4, 'Empleado'),
(5, 'Distribuidor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `cedula` int(11) NOT NULL,
  `correo` varchar(30) DEFAULT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `contrasenia` varchar(30) DEFAULT NULL,
  `cod_t_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`cedula`, `correo`, `nombre`, `contrasenia`, `cod_t_usuario`) VALUES
(0, 'N/A', 'N/A', 'N/A', 5),
(1, 'admin@chibchaweb.com', 'Administrador', 'qwerty', 1),
(2, 'carlosN1@chibchaweb.com', 'Carlos Monrroy', 'qwerty', 4),
(3, 'camila@chibchaweb.com', 'Camila Marquez', 'qwerty', 2),
(4, 'webcindario@chibchaweb.com', 'Webcindario', 'qwerty', 3),
(5, 'distribuidor1@chibchaweb.com', 'Distribuidor JuanitoRodriguez', 'qwerty', 5),
(33, 'AAA@GMAIL.COM', 'Charlie', '123', 2),
(43, 'supp2', 'supp2', 'sqwerty', 4),
(44, 'vale@gmail.com', 'Laura Valentina Camargo ', '123345', 2),
(45, 'asd@gmail.com', 'claudia', '1321', 2),
(213, 'cbs@gmail.com', 'Claudia', '1234', 2),
(3302, 'hostinger@chibchaweb.com', 'Hostinger', 'querty', 3),
(521066, 'cbsa28@yahoo.com', 'Claudia Serrano', '1234', 2),
(1007646684, 'laura@hotmail.com', 'Laura', 'kimi', 2);

--
-- Disparadores `usuario`
--
DELIMITER $$
CREATE TRIGGER `al_crear_usuario` AFTER INSERT ON `usuario` FOR EACH ROW BEGIN
	IF (NEW.cod_t_usuario = 2) THEN
    	INSERT INTO CLIENTE(cedula) VALUES (NEW.cedula);
    ELSEIF (NEW.cod_t_usuario = 3) THEN
    	INSERT INTO REGISTRADOR(cod_registrador) VALUES (NEW.cedula);
    ELSEIF (NEW.cod_t_usuario = 4) THEN
    	INSERT INTO EMPLEADO(cedula) VALUES (NEW.cedula);
    ELSEIF (NEW.cod_t_usuario = 5) THEN
    	INSERT INTO DISTRIBUIDOR(cedula) VALUES (NEW.cedula);
    END IF;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `al_eliminar_usuario` BEFORE UPDATE ON `usuario` FOR EACH ROW BEGIN
	IF (OLD.cod_t_usuario = 2) THEN
    	UPDATE CLIENTE SET OLD.cedula=NEW.cedula WHERE cedula=OLD.cedula;
    ELSEIF (OLD.cod_t_usuario = 3) THEN
    	UPDATE REGISTRADOR SET cod_registrador=NEW.cedula WHERE cod_registrador=OLD.cedula;
    ELSEIF (OLD.cod_t_usuario = 4) THEN
    	UPDATE EMPLEADO SET OLD.cedula=NEW.cedula WHERE cedula=OLD.cedula;
    ELSEIF (OLD.cod_t_usuario = 5) THEN
    	UPDATE DISTRIBUIDOR SET OLD.cedula=NEW.cedula WHERE cedula=OLD.cedula;
    END IF;
END
$$
DELIMITER ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`cedula`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`cedula`),
  ADD KEY `fk_cod_tarjeta` (`cod_tarjeta`),
  ADD KEY `fk_cod_p_pago` (`cod_p_pago`),
  ADD KEY `fk_cod_paquete` (`cod_paquete`);

--
-- Indices de la tabla `distribuidor`
--
ALTER TABLE `distribuidor`
  ADD PRIMARY KEY (`cedula`),
  ADD KEY `fk_cod_t_distribuidor` (`cod_t_distribuidor`);

--
-- Indices de la tabla `dominio`
--
ALTER TABLE `dominio`
  ADD PRIMARY KEY (`cod_dominio`),
  ADD KEY `fk_cedula5` (`cedula`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`cedula`),
  ADD KEY `fk_cod_t_empleado` (`cod_t_empleado`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`cod_estado`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`cod_pais`);

--
-- Indices de la tabla `paquete`
--
ALTER TABLE `paquete`
  ADD PRIMARY KEY (`cod_paquete`);

--
-- Indices de la tabla `planpago`
--
ALTER TABLE `planpago`
  ADD PRIMARY KEY (`cod_p_pago`);

--
-- Indices de la tabla `registrador`
--
ALTER TABLE `registrador`
  ADD PRIMARY KEY (`cod_registrador`),
  ADD KEY `fk_cod_pais` (`cod_pais`);

--
-- Indices de la tabla `tarjeta`
--
ALTER TABLE `tarjeta`
  ADD PRIMARY KEY (`cod_tarjeta`),
  ADD KEY `fk_cod_t_tarjeta` (`cod_t_tarjeta`);

--
-- Indices de la tabla `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`cod_ticket`),
  ADD KEY `fk_cod_dominio` (`cod_dominio`),
  ADD KEY `fk_cod_t_ticket` (`cod_t_ticket`),
  ADD KEY `fk_cod_estado` (`cod_estado`);

--
-- Indices de la tabla `t_distribuidor`
--
ALTER TABLE `t_distribuidor`
  ADD PRIMARY KEY (`cod_t_distribuidor`);

--
-- Indices de la tabla `t_empleado`
--
ALTER TABLE `t_empleado`
  ADD PRIMARY KEY (`cod_t_empleado`);

--
-- Indices de la tabla `t_tarjeta`
--
ALTER TABLE `t_tarjeta`
  ADD PRIMARY KEY (`cod_t_tarjeta`);

--
-- Indices de la tabla `t_ticket`
--
ALTER TABLE `t_ticket`
  ADD PRIMARY KEY (`cod_t_ticket`);

--
-- Indices de la tabla `t_usuario`
--
ALTER TABLE `t_usuario`
  ADD PRIMARY KEY (`cod_t_usuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`cedula`),
  ADD KEY `fk_cod_t_usuario` (`cod_t_usuario`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD CONSTRAINT `fk_cedula2` FOREIGN KEY (`cedula`) REFERENCES `usuario` (`cedula`);

--
-- Filtros para la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `fk_cedula4` FOREIGN KEY (`cedula`) REFERENCES `usuario` (`cedula`),
  ADD CONSTRAINT `fk_cod_p_pago` FOREIGN KEY (`cod_p_pago`) REFERENCES `planpago` (`cod_p_pago`),
  ADD CONSTRAINT `fk_cod_paquete` FOREIGN KEY (`cod_paquete`) REFERENCES `paquete` (`cod_paquete`),
  ADD CONSTRAINT `fk_cod_tarjeta` FOREIGN KEY (`cod_tarjeta`) REFERENCES `tarjeta` (`cod_tarjeta`);

--
-- Filtros para la tabla `distribuidor`
--
ALTER TABLE `distribuidor`
  ADD CONSTRAINT `fk_cedula7` FOREIGN KEY (`cedula`) REFERENCES `usuario` (`cedula`),
  ADD CONSTRAINT `fk_cod_t_distribuidor` FOREIGN KEY (`cod_t_distribuidor`) REFERENCES `t_distribuidor` (`cod_t_distribuidor`);

--
-- Filtros para la tabla `dominio`
--
ALTER TABLE `dominio`
  ADD CONSTRAINT `fk_cedula5` FOREIGN KEY (`cedula`) REFERENCES `cliente` (`cedula`);

--
-- Filtros para la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD CONSTRAINT `fk_cedula1` FOREIGN KEY (`cedula`) REFERENCES `usuario` (`cedula`),
  ADD CONSTRAINT `fk_cod_t_empleado` FOREIGN KEY (`cod_t_empleado`) REFERENCES `t_empleado` (`cod_t_empleado`);

--
-- Filtros para la tabla `registrador`
--
ALTER TABLE `registrador`
  ADD CONSTRAINT `fk_cedula6` FOREIGN KEY (`cod_registrador`) REFERENCES `usuario` (`cedula`),
  ADD CONSTRAINT `fk_cod_pais` FOREIGN KEY (`cod_pais`) REFERENCES `pais` (`cod_pais`);

--
-- Filtros para la tabla `tarjeta`
--
ALTER TABLE `tarjeta`
  ADD CONSTRAINT `fk_cod_t_tarjeta` FOREIGN KEY (`cod_t_tarjeta`) REFERENCES `t_tarjeta` (`cod_t_tarjeta`);

--
-- Filtros para la tabla `ticket`
--
ALTER TABLE `ticket`
  ADD CONSTRAINT `fk_cod_dominio` FOREIGN KEY (`cod_dominio`) REFERENCES `dominio` (`cod_dominio`),
  ADD CONSTRAINT `fk_cod_estado` FOREIGN KEY (`cod_estado`) REFERENCES `estado` (`cod_estado`),
  ADD CONSTRAINT `fk_cod_t_ticket` FOREIGN KEY (`cod_t_ticket`) REFERENCES `t_ticket` (`cod_t_ticket`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_cod_t_usuario` FOREIGN KEY (`cod_t_usuario`) REFERENCES `t_usuario` (`cod_t_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
