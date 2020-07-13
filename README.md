Proyecto 1 - Acámica
Web de reserva de Alojamientos


TRUE NOMAD - Reserva de Alojamientos

*El setup está hecho a través de CDNs y scripts, a pedido de Acámica.
*El mapa de fondo está gracias a la api de Mapbox.
*Las animaciones pertenecen a Animate.css
*Los iconos pertenecen a FlatIcon.
*La marca es invención mía.
*Mucho de lo que es el renderizado del mapa está muy desprolijo en el componente ya que la extensión hecha especialmente para utilizar 
la api de Mapbox con React sólo puede ser utilizada a través de node.js y tuve que hacer unas tramoyas interesantes para que ande, inclusive poner los componentes sueltos juntos con el index.html. 
*Las media queries se encuentran al final del archivo styles.css, primero pantalla promedio, luego mobile y por último big screen.


TASKS

*Condición 1: Representa visualmente la estructura vertical de componentes en el explorador siendo fiel al layout de interfaz de la aplicación. ✔✔

*Condición 2: No utiliza elementos HTML adicionales al contenedor que necesita React para renderizar los componentes mas que un div.✔✔

*Condición 3: Permite al usuario/a realizar modificaciones en los valores que se muestran en los campos de la barra de filtros.✔✔

*Condición 4: Las modificaciones en los valores de la barra de filtros impactan en tiempo real sobre la información que muestra el encabezado de la aplicación.✔✔

*Condición 5: El encabezado de la aplicación solo muestra en lenguaje natural los filtros que se encuentran activos, es decir, que tienen un valor asignado. Al menos las fechas.✔✔

*Condición 6: Los hoteles del archivo data.js se ven representados a través de su respectiva ficha en la interfaz.✔✔

*Condición 7: Solo se muestran aquellos hoteles que coinciden con los filtros configurados por el/la usuario/a durante la ejecución de la aplicación.✔✔

*Condición 8: Los filtros pueden ser modificados, activados o desactivados por los/as usuarios/as múltiples veces durante la ejecución y la aplicación no genera errores durante este comportamiento.✔✔

*Condición 9: Brindar mensajes explicativos para cuando no exista disponibilidad de hoteles respecto a los filtros aplicados (incluir todos los filtros en esta validación)✔✔



