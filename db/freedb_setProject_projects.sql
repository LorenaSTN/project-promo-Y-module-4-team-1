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
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `idProject` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `slogan` varchar(100) DEFAULT NULL,
  `description` varchar(400) NOT NULL,
  `technologies` varchar(45) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `githubUrl` varchar(100) NOT NULL,
  `demoUrl` varchar(100) NOT NULL,
  `fk_author` int NOT NULL,
  PRIMARY KEY (`idProject`),
  KEY `fk_projects_author_idx` (`fk_author`),
  CONSTRAINT `fk_projects_author` FOREIGN KEY (`fk_author`) REFERENCES `author` (`idAuthor`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (5,'AWESOME PROFILE CARDS',NULL,'Crea tu tarjeta','JS-HTML-CSS','https://onepiece-cardgame.dev/preview.jpg','https://github.com/laura-pf/project-promo-Y-module-2-team-2','https://laura-pf.github.io/project-promo-Y-module-2-team-2/',1),(6,'MOVING ORGANIZATOR',NULL,'Organiza tu mudanza','HTML-CSS-REACT','https://img.freepik.com/vector-gratis/concepto-mudanza-casa-diseno-plano-camion_23-2148665508.jpg','https://github.com/laura-pf/moving-organizer','https://github.com/laura-pf/moving-organizer',1),(7,'Facebook','Conectándote mejor con las páginas y grupos que te interesan','Conéctate con amigos, familiares y otras personas que conoces. Comparte fotos y vídeos, envía mensajes y recibe actualizaciones.','React, PHP','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKrFhY-ljA-u7J5IMWeTv8zmpBx4PP9nQMw&s','https://github.com/facebook','https://www.facebook.com/',2),(8,'Amazon','Trabaja duro, diviértete, haz historia..','Amazon.com, Inc., que opera como Amazon, es una empresa de tecnología multinacional estadounidense que se dedica al comercio electrónico, la computación en la nube, la publicidad en línea, la transmisión digital y la inteligencia artificial.','React, Java, MySQL','https://www.serfadu.com/wp-content/uploads/2020/10/amazon.png','https://github.com/amazon','https://www.amazon.com/',3),(9,'Netflix','Mira lo que sigue','El servicio distribuye principalmente películas y programas de televisión originales y adquiridos de varios géneros, y está disponible internacionalmente en varios idiomas.','Python, Node.js, React','https://milyunahistorias.com/wp-content/uploads/2022/09/Netflix.jpg','https://github.com/Netflix','https://www.netflix.com/',4),(10,'Airbnb','Pertenece a cualquier lugar','Es un mercado en línea que conecta a personas que desean alquilar sus casas con personas que buscan alojamiento en lugares específicos.','JavaScript, GitHub, React, Java, and MySQL','https://brandemia.org/sites/default/files/sites/default/files/bnb_billboard_01-2000x1125.jpg','https://github.com/Airbnb','https://www.airbnb.es/',5);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-10 13:26:16
