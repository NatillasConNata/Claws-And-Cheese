 

# Juegos en Red- Grupo 3 | Don Kam-Arón   

# “Enjoying the past, living the future”    

 

# Garras y Queso    
#GDD V2

 

 

Migue Ángel Jiménez Montemayor    
Natalia Martínez Clemente    
Santiago Varela Rey    
   

## Índice    
[Historial de versiones](#item0)
[Introducción](#item1)   
[Guión](#item2)   
[Mecánicas del juego](#item3)    
[Estados del juego](#item4)   
[Interfaz](#item5)   
[Niveles](#item6)   
[Progreso del juego](#item7)   
[Personajes](#item8)   
[Ítems](#item9)   
[Sonidos y música](#item10)   
[Miembros del equipo](#item12)   
[Anexo](#item13)   






<a name=item0></a>  
# Historial de versiones
| Nº Version    | Fecha actualización | Modificaciones                                                                                                                                                                                                                      |
| :-------------: | :-------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| Versión 1     | 17 Oct 2023         | Versión Inicial                                                                                                                                                                                                                     |
| Versión 2<br> | 05 Dic 2023         | Eliminadas escenas de carga interactivas, eliminado archivos de guardado, actualizados movimientos personajes, Eliminados ciertos niveles del juego, actualizacón habilidades personajes, actualización mapa esquemático de niveles, eliminado arte y concept |



<a name=item1></a>  
# Introducción 

## Título 
Garras y queso

## Concepto principal    
El juego se desarrolla en un circo/zoo, donde nuestros dos protagonistas tendrán que escapar utilizando su ingenio y sus habilidades para superar los obstáculos. Pero tendrán que tener cuidado, porque no podrán hacerlo cada uno por su cuenta. Necesitarán la cooperación entre ambos para poder huir de tan terrible lugar, pues habrá pruebas donde uno solo no podrá superarlas. 

## Características Principales 
- Dos personajes, cada uno con diferentes habilidades.    
- Niveles con puzles a resolver entre los dos personajes.    
- Personajes antropomórficos/Personajes animales     
- Los niveles ya estarán predefinidos, con los puzles hechos a mano y personalizados.    
- Estilo pixel Art con colores muy vivos.   
- La cámara sigue al jugador. En juego local de una pantalla, la pantalla se dividirá en dos, en
juego en línea, cada jugador verá solo su pantalla.       

## Género    
Plataformas 2D cooperativo, puzles. El estilo plataformas resalta las habilidades de cada personaje
mientras que la inserción de puzles obliga a ambos jugadores a cooperar y utilizar su ingenio para
poder superar los distintos niveles.   

## Propósito y Público Objetivo 
Para todos los públicos, especialmente para el público infantil y joven.    

## Jugabilidad 
Los dos jugadores se deberán coordinar para resolver los puzles y avanzar a través de los niveles. Los personajes podrán interactuar con elementos del escenario (botones palancas etc.) y saltar. Además, cada uno tendrá un tamaño y peso distinto, lo cual les permitirá acceder a lugares diferentes e interactuar con elementos distintos. 

## Estilo Visual 
Pixel Art 2D. Este estilo es muy versátil y puede facilitar muchas mecánicas y maquetación del
escenario. Además, es un estilo que actualmente está volviendo a tener importancia dentro de los
videojuegos.    
![Megaman2](/Documentación/ImagesDocumentation/MegaMan2mockup.jpg "https://pin.it/5t7QzyY")

## Alcance 
El alcance será de una sola entrega para probar si los juegos cooperativos funcionan, si el resultado conseguido es bueno se irá creando más juegos, dlcs y merchandising. 

## Plataforma 
PC. Estará disponible en Steam 

<a name=item2></a> 
# Guion 

A lo largo del juego se verán pantallas de carga entre escenas (imágenes estáticas) de los dos personajes juntos.     
 
<a name=item3></a>  
# Mecánicas del Juego 

## Mecánicas del Juego 
Cámara 2D vista lateral, ada jugador observa lo que tiene en rango dentro de su cámara. 
- Controles en local: 
  - Movimiento lateral: ad , ←→   
  - Salto, subir escaleras (solo el ratón): w , ↑ 
  - Bajar escaleras (solo el ratón): s, ↓ 
  - Interactuar: E, P 
  - Habilidad: Q, O 

- Jugabilidad: el juego está planteado para que se juegue una sola vez. Pues al repetir el juego los niveles serán los mismos y los puzles también. Por lo tanto, este juego no favorece a la Re-jugabilidad. 

- Niveles: este juego se compone de 3 niveles: El primer nivel donde tendrán que escapar de la zona de jaulas. Después pasarán a la zona de picnic y pájaros. Y finalmente llegarán a la zona del Aquarium y el muelle, donde terminará el juego. 

- Intensidad del juego: la intensidad del juego será moderada, tirando a ligera. Cualquier persona podría jugarlo sin problemas. 

- Recursos: en el juego existirán zonas donde cada jugador tendrá que hacer su papel, como puede ser entran por agujeros pequeños, presionar botones, desbloquear códigos ocultos, llevar un objeto a un lugar determinado, romper cables, etc. 

## Mecánicas del Jugador 

Los jugadores tendrán un personaje en concreto que son: 

**Queso**: Sus características principales es ser pequeño permitiendo así acceder a lugares que no serían accesibles, Queso salta más que Garras ,también tiene la mecánica de morder haciendo que pueda cortar objetos como unos cables de red. 

  Las desventajas del ratón es que no es muy fuerte haciendo que no pueda mover casi ningún objeto del entorno. 

**Garras**: Las características principales es que tiene una gran fuerza permitiendo mover objetos como puertas o cajas. 

  Las desventajas del león son muy grandes haciendo que solo pueda acceder áreas en concreto, también el león no pasa desapercibido por su gran tamaño haciendo que tenga que esperar al ratón para despejar el sitio.  

## Mecánicas de Niveles 

El juego tiene 3 niveles, cada uno ambientado en una zona del zoo distinto.  
En cada nivel existirán distintos tipos de mecánicas que obligarán a los jugadores a utilizar las habilidades del personaje que tengan para resolver los puzles y avanzar a la libertad.   
Los niveles en cuestión se dividen en zonas, las cuales son: ‘zona de jaulas’, ‘aviario’ y ‘acuario y muelles’.   
Cada nivel estará ambientado en la zona concreta y los puzles intentarán estar ligados del mismo modo a esa zona, siendo puzles temáticos (no todos los puzles serán temáticos).

Plataforma de peso: hay plataformas normales y plataformas metálicas. Las plataformas metálicas solo pueden ser activadas con objetos pesados o por Garras. Las plataformas normales pueden ser activadas por cualquier personaje u objeto.

Cajas/Objetos móviles: hay cajas normales. Las cajas solo las puede mover Garras.

<a name=item4></a>  
# Estados del Juego 

 
![EstadosDelJuego](/Documentación/ImagesDocumentation/EstadosDelJuego.png "Langostas4Ever")   


 
<a name=item5></a>  
# Interfaz   

Las interfaces serán de tipo minimalista. Las distintas interfaces que tendremos son: 

>**Menú principal**  
Es el menú previo a la partida, cuenta con un menú de ajustes (brillo, volumen) y un botón de iniciar partida, el cual, al presionarlo, lleva a un menú de selección de personaje y posteriormente inicia la partida.


![MenuPpal](/Documentación/ImagesDocumentation/MenuPpal.png "Menú principal del juego")   



>**Menú de opciones**   
Es un menú al que el jugador puede acceder en antes de comenzar la partida con el cuál accede a los ajustes. Por ahora los únicos ajustes que habrá serán el volumen del juego y la luminosidad del mismo.


![MenuOpciones](/Documentación/ImagesDocumentation/MenúOpciones.png "Menú de opciones")   


>**Ayudas**
El jugador empieza en un tutorial para que aprenda las mecánicas del juego.  Además, cuando haya un objeto interactuable en el escenario aparecerá un texto que indique qué tecla presionar para hacerlo. 

>**Pantalla de Carga**   
Las pantallas de carga serán del león y de la rata juntos.


 ![PantallaCarga](/Documentación/ImagesDocumentation/PantallaCarga.png "PantallaCarga")   


>**Selección del personaje**  
Cada jugador podrá elegir a un personaje del juego pulsando las teclas asignadas a cada personaje.  


>**Créditos**   
Al finalizar el juego, se muestran los créditos al equipo de desarrollo.


 ![Creditos](/Documentación/ImagesDocumentation/Creditos.png "Creditos")   


>**In Game**   
El juego tendrá dos versiones, una versión offline en la que la pantalla se dividirá a la mitad para que ambos jugadores puedan jugar cada uno viendo su propio campo de visión. Y un modo online donde cada jugador verá su pantalla. Además, el modo online contará con un chat para que los jugadores puedan hablar entre ellos


 ![InGame](/Documentación/ImagesDocumentation/InGame.png "InGame")   



<a name=item6></a>  
# Niveles  

El videojuego de momento tendrá 3 niveles  

 
![Niveles](/Documentación/ImagesDocumentation/NivelesV2.png)    
 

Mapa esquemático de los niveles 

 
<a name=item7></a>  
# Progreso del Juego 

El progreso del juego va a ser lineal porque se necesita a los dos personajes para superar los distintos retos.   
Esto quiere decir que para poder avanzar necesitas realizar los puzles en un mismo orden y con la colaboración entre los dos jugadores.   
Si no se cumplen los dos requisitos, no se puede avanzar en el juego.   

 
<a name=item8></a>  
# Personajes 

## Jugador 

Los dos jugadores controlarán a los personajes de León y Ratón, cuyas ventajas y desventajas se explicaron anteriormente.  
 
El objetivo de estos es escapar del zoo.   
León: Es un animal muy grande que llama la atención de las personas y otros animales.
Además de ser llamativo, el león es un animal muy fuerte, otra cualidad que se explotará en el juego
para mover objetos grandes del escenario, como pueden ser cajas o carros. Esto sería útil para los
jugadores en interruptores de peso o para alcanzar lugares a los que no llegaban.   
Ratón: Es un animal muy pequeño, lo que le permite moverse por espacios reducidos, como tuberías,
para llegar a otras salas. Además, tiene unos dientes grandes y afilados que le permiten cortar los
cables o las cuerdas que se encuentre por el escenario.   


## NPCs 

Todavía por implementar 

<a name=item9></a>  
# Ítems 

No hay un inventario como tal. Sin embargo, sí que los personajes podrán recoger objetos (llaves,
códigos de acceso etc.) para abrir puertas o desactivar alarmas. El recoger estos objetos aparecerá un
icono que indique que se ha obtenido y desaparecerá en cuanto se use.   

Algunos de los ítems del escenario que no se podrán recoger, pero si se pueden utilizar serán cajas de
madera o cables en cajas de luz. 

 
<a name=item10></a>  
# Música y Sonidos 

Para la música, alternamos entre música alegre y música ambiental de zoo. 

Todas las licencias de la música serán CC0 o CCBy. (es música de libre uso) 

 
<a name=item12></a>  
# Miembros del Equipo 
~~~
MIGUEL ANGEL JIMENEZ MONTEMAYOR 

NATALIA MARTÍNEZ CLEMENTE 

SANTIAGO VARELA REY 
~~~

<a name=item13></a>  
# Anexos 
Sprites botones del juego: https://pixellarion-games.itch.io/pixelart-buttons   
