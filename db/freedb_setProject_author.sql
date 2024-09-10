-- MySQL dump 10.13  Distrib 8.0.38, for macos14 (x86_64)
--
-- Host: sql.freedb.tech    Database: freedb_setProject
-- ------------------------------------------------------
-- Server version	8.0.39-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `idAuthor` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `job` varchar(45) NOT NULL,
  `photo` varchar(1000) NOT NULL,
  `description` varchar(400) NOT NULL,
  PRIMARY KEY (`idAuthor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'Laura','Estudiante','https://img.freepik.com/premium-vector/cartoon-girl-student-character-drawing-illustration-clipart-kawaii_51194-280.jpg','Estudiante Bootcamp'),(2,'Mark Zuckerberg','Programador informático','https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg','Cofundador y director ejecutivo de Facebook, un sitio web de redes sociales'),(3,'Jeff Bezos','Inversor, Empresario','https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/Amazon-logo-with-CEO-Jeff-Bezos.jpg','Emprendedor estadounidense que jugó un papel clave en el crecimiento del comercio electrónico'),(4,'Reed Hastings','Emprendedor, Empresario','https://s.yimg.com/ny/api/res/1.2/L941reTczz4VknQGAJeC7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/tomatazos_56/473eb1d680728eca27c5d12b96ec3497','Cofundador y presidente ejecutivo de Netflix, y forma parte de varias juntas directivas y organizaciones sin fines de lucro.'),(5,'Brian Chesky','Informático, Empresario','https://static.startuptalky.com/2021/11/Airbnb-Founders-StartupTalky.jpg','Cofundador y director ejecutivo de Airbnb y establece la visión y estrategia de la empresa.');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-10 13:26:15
