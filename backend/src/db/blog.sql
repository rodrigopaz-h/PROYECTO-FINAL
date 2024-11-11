CREATE TABLE IF NOT EXISTS blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    imgSrc VARCHAR(255),
    authorImg VARCHAR(255),
    authorName VARCHAR(100),
    link VARCHAR(255)
);

DELETE FROM blog_posts;

INSERT INTO blog_posts (title, description, imgSrc, authorImg, authorName, link) VALUES
('Los beneficios del café para la salud', 'El café no solo es una bebida popular, sino que también aporta antioxidantes y puede mejorar el estado de alerta mental.', '../../images/blogimage1.png', '../images/maria.png', 'María Pérez', '#'),
('El arte de preparar un espresso perfecto', 'Aprende los secretos para crear un espresso perfecto en casa, desde el molido hasta el tiempo de extracción.', '../../images/blogimage2.png', '../images/carlos.png', 'Carlos López', '#'),
('Explorando el café de especialidad', 'Descubre lo que hace único al café de especialidad, desde su origen hasta los métodos de tostado y preparación.', '../../images/blogimage3.png', '../images/laura.png', 'Laura Torres', '#'),
('Café y productividad: ¿mito o realidad?', 'Exploramos si realmente el café puede mejorar nuestra productividad y concentración en el trabajo.', '../../images/image-card-1.jpg', '../../images/blogimage4.jpg', 'Javier Herrera', '#'),
('Cómo elegir el molido ideal para tu café', 'Conoce los diferentes tipos de molido y cómo cada uno afecta el sabor de tu café.', '../../images/image-card-2.jpg', '../../images/sofia.png', 'Sofía Méndez', '#'),
('Los tipos de café alrededor del mundo', 'Un recorrido por las variedades de café que puedes encontrar en distintos países y sus tradiciones.', '../../images/image-card-3.jpg', '../../images/blogimage6.jpg', 'Ana Suárez', '#'),
('Cómo almacenar correctamente el café en casa', 'Consejos para conservar el aroma y el sabor de tus granos de café por más tiempo.', '../../images/image-card-4.jpg', '../../images/miguel.png', 'Miguel García', '#'),
('Las mejores recetas de café frío para el verano', 'Refresca tus días de verano con estas recetas sencillas y deliciosas de café frío.', '../../images/image-card-5.jpg', '../../images/blogimage8.jpg', 'Daniela Robles', '#');

SELECT * FROM blog_posts