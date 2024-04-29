-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-04-2024 a las 03:11:57
-- Versión del servidor: 8.2.0
-- Versión de PHP: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE IF NOT EXISTS `cliente` (
  `cl_id` int NOT NULL AUTO_INCREMENT,
  `cl_nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `cl_apellido` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `cl_dni` int NOT NULL,
  `cl_direccion` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `cl_provincia` int NOT NULL,
  `cl_usuario` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cl_password` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `cl_email` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`cl_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`cl_id`, `cl_nombre`, `cl_apellido`, `cl_dni`, `cl_direccion`, `cl_provincia`, `cl_usuario`, `cl_password`, `cl_email`) VALUES
(1, 'Veronica', 'Rodriguez', 32698741, 'Valparaiso 3100', 1, 'VerRo', '5169b422725d69dd71016eb5afd6eae6', 'vrodriguez@gmail.com'),
(2, 'Noelia', 'Ramos', 29030598, 'las palmeras 1390', 1, 'nramos', 'e10adc3949ba59abbe56e057f20f883e', 'nramos.noelia@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `pr_id` int NOT NULL AUTO_INCREMENT,
  `pr_descripcion` varchar(150) COLLATE utf8mb4_general_ci NOT NULL,
  `pr_precio` double NOT NULL,
  `pr_cantidad` int NOT NULL,
  `pr_img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `pr_stock_max` int NOT NULL,
  `pr_stock_min` int NOT NULL,
  PRIMARY KEY (`pr_id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`pr_id`, `pr_descripcion`, `pr_precio`, `pr_cantidad`, `pr_img`, `pr_stock_max`, `pr_stock_min`) VALUES
(1, 'Hoodie Flores', 12000, 10, '', 0, 0),
(2, 'Hoodie Rosa', 12000, 15, '', 0, 0),
(3, 'Hoodie Arcoiris', 12000, 5, '', 0, 0),
(4, 'Pijama Skelleton', 15000, 7, '', 0, 0),
(5, '', 0, 0, '', 0, 0),
(6, 'Campera Blanca', 15000, 6, '', 0, 0),
(7, 'prueba', 0, 0, '', 0, 0),
(8, 'campera perro', 0, 0, '', 0, 0),
(9, 'remera perro', 5000, 15, '', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

DROP TABLE IF EXISTS `provincia`;
CREATE TABLE IF NOT EXISTS `provincia` (
  `st_id` int NOT NULL AUTO_INCREMENT,
  `st_nombre` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`st_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`st_id`, `st_nombre`) VALUES
(1, 'Cordoba'),
(2, 'Buenos Aires'),
(3, 'Santa Fe'),
(4, 'Mendoza');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
