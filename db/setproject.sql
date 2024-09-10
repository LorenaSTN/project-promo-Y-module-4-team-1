CREATE DATABASE setproject;

USE setproject;

CREATE TABLE projects (
idProject INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(45) NOT NULL,
description VARCHAR(400) NOT NULL,
technologies VARCHAR(45) NOT NULL,
image VARCHAR(1000) NOT NULL,
 githubUrl VARCHAR(100) NOT NULL, 
 demoUrl VARCHAR(100) NOT NULL
 );
 
 CREATE TABLE author (
 idAuthor INT PRIMARY KEY AUTO_INCREMENT, 
 name VARCHAR(45) NOT NULL, 
 job VARCHAR(45) NOT NULL, 
 photo VARCHAR(1000) NOT NULL, 
 description VARCHAR(400) NOT NULL
 );
 
 INSERT INTO author (name, job, photo, description) VALUES
 ("Laura", "Estudiante", "https://img.freepik.com/premium-vector/cartoon-girl-student-character-drawing-illustration-clipart-kawaii_51194-280.jpg", "Estudiante Bootcamp");
 
 INSERT INTO projects (name, description, technologies, image, githubUrl, demoUrl, fk_author) VALUES
 ("AWESOME PROFILE CARDS", "Crea tu tarjeta", "JS-HTML-CSS", "https://onepiece-cardgame.dev/preview.jpg", "https://github.com/laura-pf/project-promo-Y-module-2-team-2", "https://laura-pf.github.io/project-promo-Y-module-2-team-2/", 1),
 ("MOVING ORGANIZATOR", "Organiza tu mudanza", "HTML-CSS-REACT", "https://img.freepik.com/vector-gratis/concepto-mudanza-casa-diseno-plano-camion_23-2148665508.jpg", "https://github.com/laura-pf/moving-organizer", "https://github.com/laura-pf/moving-organizer", 1);
 
 
 INSERT INTO author (name, job, photo, description) VALUES
 ("Mark Zuckerberg", "Computer programmer", "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg", "American computer programmer"),
 ("Jeff Bezos","CEO of Amazon, Investor, Businessperson", "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/Amazon-logo-with-CEO-Jeff-Bezos.jpg", "American entrepreneur who played a key role in the growth of e-commerce" ),
 ("Reed Hastings", "Entrepreneur,Businessperson", "https://s.yimg.com/ny/api/res/1.2/L941reTczz4VknQGAJeC7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/es/tomatazos_56/473eb1d680728eca27c5d12b96ec3497", "Co-founder and executive chairman of Netflix, and is on a number of boards and non-profit organizations"),
 ("Brian Chesky", "Computer scientist, Businessperson", "https://static.startuptalky.com/2021/11/Airbnb-Founders-StartupTalky.jpg", "Co-founder and Chief Executive Officer of Airbnb and sets the vision and strategy for the company" );
 
 
 INSERT INTO projects (name, description, technologies, image, githubUrl, demoUrl, fk_author) VALUES
 ("Facebook", "Connect with friends, family and other people you know. Share photos and videos, send messages and get updates","React, PHP","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKrFhY-ljA-u7J5IMWeTv8zmpBx4PP9nQMw&s", "https://github.com/facebook" , "https://www.facebook.com/", 2 ),
 ("Amazon", "Amazon.com, Inc., doing business as Amazon, is an American multinational technology company, engaged in e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence","React, Java, MySQL","https://www.serfadu.com/wp-content/uploads/2020/10/amazon.png", "https://github.com/amazon" , "https://www.amazon.com/", 3 ),
 ("Netflix", "The service primarily distributes original and acquired films and television shows from various genres, and it is available internationally in multiple languages","Python, Node.js, React","https://milyunahistorias.com/wp-content/uploads/2022/09/Netflix.jpg", "https://github.com/Netflix" , "https://www.netflix.com/", 4 ),
  ("Airbnb", "It is an online marketplace that connects people who want to rent out their homes with people looking for accommodations in specific locales.","JavaScript, GitHub, React, Java, and MySQL","https://brandemia.org/sites/default/files/sites/default/files/bnb_billboard_01-2000x1125.jpg", "https://github.com/Airbnb" , "https://www.airbnb.es/", 5 );
 
 ALTER TABLE projects ADD slogan VARCHAR(100) AFTER name; 
 
 UPDATE projects
 SET slogan = "Better connecting you with the pages and groups you care about"
 WHERE idProject = 7;
 
  UPDATE projects
 SET slogan = "Work hard, Have fun, Make history."
 WHERE idProject = 8;
 
   UPDATE projects
 SET slogan = "See what’s next"
 WHERE idProject = 9;
 
    UPDATE projects
 SET slogan = "Belong anywhere"
 WHERE idProject = 10;
 
 
 
 
 UPDATE author
 SET job = "Programador informático"
 WHERE idAuthor= 2;
 
  UPDATE author
 SET job = "Inversor, Empresario"
 WHERE idAuthor= 3;
 
  UPDATE author
 SET job = "Emprendedor, Empresario"
 WHERE idAuthor= 4;
 
  UPDATE author
 SET job = "Informático, Empresario"
 WHERE idAuthor= 5;
 
  UPDATE author
 SET description = "Cofundador y director ejecutivo de Facebook, un sitio web de redes sociales"
 WHERE idAuthor= 2;
 
  UPDATE author
 SET description = "Emprendedor estadounidense que jugó un papel clave en el crecimiento del comercio electrónico"
 WHERE idAuthor= 3;
 
  UPDATE author
 SET description = "Cofundador y presidente ejecutivo de Netflix, y forma parte de varias juntas directivas y organizaciones sin fines de lucro."
 WHERE idAuthor= 4;
 
  UPDATE author
 SET description = "Cofundador y director ejecutivo de Airbnb y establece la visión y estrategia de la empresa."
 WHERE idAuthor= 5;
 
 
   UPDATE projects
 SET description = "Conéctate con amigos, familiares y otras personas que conoces. Comparte fotos y vídeos, envía mensajes y recibe actualizaciones."
 WHERE idProject= 7;
 
  UPDATE projects
 SET description = "Amazon.com, Inc., que opera como Amazon, es una empresa de tecnología multinacional estadounidense que se dedica al comercio electrónico, la computación en la nube, la publicidad en línea, la transmisión digital y la inteligencia artificial."
 WHERE idProject= 8;
 
  UPDATE projects
 SET description = "El servicio distribuye principalmente películas y programas de televisión originales y adquiridos de varios géneros, y está disponible internacionalmente en varios idiomas."
 WHERE idProject= 9;
 
  UPDATE projects
 SET description = "Es un mercado en línea que conecta a personas que desean alquilar sus casas con personas que buscan alojamiento en lugares específicos."
 WHERE idProject= 10;
 
 
 
 
  
 UPDATE projects
 SET slogan = "Conectándote mejor con las páginas y grupos que te interesan"
 WHERE idProject = 7;
 
  UPDATE projects
 SET slogan = "Trabaja duro, diviértete, haz historia.."
 WHERE idProject = 8;
 
   UPDATE projects
 SET slogan = "Mira lo que sigue"
 WHERE idProject = 9;
 
    UPDATE projects
 SET slogan = "Pertenece a cualquier lugar"
 WHERE idProject = 10;
 

 