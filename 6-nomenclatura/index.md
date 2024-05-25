# **Manual y guia de desarrollo de software**

El objetivo principal de esta guia es cubrir cada punto del ciclo de vida del desarrollo de software, generando estandarización y generalización sobre los procesos, para de esta manera tener un crecimiento exponencial en la velocidad de entrega y calidad del producto final, adicional ayudar a cada uno de los integrantes a saber el `¿Como?, ¿Cuando?, ¿Donde?, ¿Por que? y ¿Para que? `de sus labores dentro del proyecto, adicional cambiar el "`No hagas tal cosa`" por un "`Hazlo de esta manera`" para que sea claro y conciso.

**"Sobre hombros de gigantes"**

**CICLO DE VIDA DEL DESARROLLO**

1. [ ] Idea, Toma de requerimientos
2. [ ] Definición y estructura del proyecto
3. [ ] SCRUM
4. [X] Base de datos
5. [X] Backend
6. [X] API-Backend
7. [X] API-Frontend
8. [X] Frontend
9. [X] Urls
1. [X] Seguridad
1. [ ] Pruebas (END-TO-END, UNITARIAS, INTEGRACIÓN, Y QA (Manual y automatizado))
1. [ ] Debug
1. [ ] Git
1. [ ] CI/CD - DevOps
1. [ ] Cloud
1. [ ] Monitoreo

---

**GENERAL**

Esta guía se basa principalmente y por ahora en PostgreSQL, Django, GraphQL, Apollo, y Nuxt
Se busca a futuro que sea agnóstica a las tecnologías. Adicional la mayoría de los items gira entorno al CRUDDALS, el cual supone ser una evolución al
tradicional CRUD, para poder responder a las nuevas necesidades, como por ejemplo la de poder eliminar y restaurar un elemento en un aplicación.
El CRUDDALS significa:

1. > **C**reate
   >
2. > **R**ead
   >
3. > **U**pdate
   >
4. > **D**elete
   >
5. > **D**eactivate
   >
6. > **A**ctivate
   >
7. > **L**ist
   >
8. > **S**earch
   >

---

1. Buscar las buenas prácticas y mejores recomendaciones según el lenguaje y framework que se este utilizando
2. Tener una política para:
   1. Organización y nombramiento de carpetas
   2. Organización y nombramiento de archivos
   3. Organización y nombramiento de variables, funciones, clases, etc.
3. Debe de existir una documentación clara del ¿Por que? ¿Como? y ¿Para que? de la **base de datos**
4. Debe de existir una persona principal encargada de la base de datos y esta debe de socializar con el equipo al momento de realizarse un cambio sobre esta
5. La estructura base del proyecto es "BASE DE DATOS <=>BACKEND <=> API <=> FRONTEND", esto es independiente de la arquitectura que se este utilizando
6. Siempre se debe de seguir la misma terminología en cada capa, en documentación o en cualquier parte del sistema o externo al sistema, SIEMPRE
7. Define, ¿Inglés o tu idioma? y todo el equipo debe de seguir la misma regla
8. Se debe de generalizar y estandarizar un un archivo o carpeta de funciones y componentes globales, buscando crear un repositorio privado (Esto con el fin de que al momento que se vaya a realizar una función o componente se revise si ya existe y se puede utilizar)
9. las funciones deben de seguir una regla principal y es que "UNA FUNCIÓN SOLO DEBE DE HACER UNA ÚNICA COSA" y el nombre debe de tener la capacidad de expresar lo que hace sin tener procesos o acciones secundarias
10. Si una función o componente se utiliza mas de **UNA** vez se debe de generalizar y pasar al archivo o carpeta de funciones globales
11. Utilizar un formateador de código
12. Utilizar un linter
13. Debe de existir reglas básicas para el nombramiento de campos o variables, ej:
    [https://dev.to/coliveravenegas/tips-para-nombrar-variables-en-javascript-4n6g]()

    1. Boolean => Usar prefijos de tipo (is-es) (has-tiene) (can-puede), el lenguaje dependerá de que lenguaje hallan decidido usar
    2. Arreglos, Listas, Tuples, etc => Escribir el nombre en plural y procurar que den detalle de lo que contiene (string, int, obj, arr)
    3. Funciones => Deben de tener un verbo y un sustantivo, si realiza una acción sobre un recurso => ("actionResource")
    4. Números => Usar un prefijo que represente valor numérico, (min) (max) (total)
    5. GENERAL => Lo mas importante es que el nombre sea totalmente representativo, legible y entendible al momento de leerse, no importa el numero de caracteres, se considera mucho si supera los 40 caracteres

<details>
   <summary>BASE DE DATOS</summary>

1. Los nombres de tablas de las bases de datos deben de escribirse en "SINGULAR"
2. Los nombres para las relaciones inversas ("related_name") deben de ser en "PLURAL" y ser consecuentes con la relación
3. La base de datos debe de cumplir con las reglas de "NORMALIZACIÓN"

</details>

<details>
   <summary>BACKEND</summary>

1. Se deben de crear las "ENTIDADES" con la misma estructura que esta en la base de datos (Ejemplo: models de Django)
2. La principal lógica de negocio se debe de guardar en una función intermedia que sirva como guardian antes de que los datos se guarden en la base de datos (Ejemplo: save de Django)

</details>

<details>
   <summary>API BACK EN GRAPHQL</summary>

1. Los types se deben de mapear automáticamente de las entidades atraves de una función y llamarse "NombreDeLaEntidadType"
2. Debe de existir un Type(Interface) general para el paginado con la siguiente forma => {total, hasNext, hasPrev, page, pages, indexStartObj, indexEndObj}
3. Cada type mapeado de las entidades debe de tener un type paginado llamado "NombreDeLaEntidadPaginatedType"
4. Debe de existir un Type(Interface) general para los errores llamado "ErrorType" con la siguiente forma => {field, messages}
5. Los inputs se deben de mapear automáticamente de las entidades atraves de una función y llamarse "NombreDeLaEntidadInput"
6. Los queries deben de ser: "readNombreDeLaEntidad", "listNombreDeLaEntidad", "searchNombreDeLaEntidad
7. Las mutations deben de ser:
    1. createNombreDeLaEntidadPlural
    2. updateNombreDeLaEntidadPlural
    3. deleteNombreDeLaEntidadPlural
    4. deactivateNombreDeLaEntidadPlural
    5. activateNombreDeLaEntidadPlural

</details>

<details>
   <summary>API FRONT EN APOLLO</summary>

1. Los nombres de la variables que van a tener las consultas o las mutaciones debe de tener el mismo nombre de la consulta o mutación que tiene

</details>

<details>
   <summary>FRONTEND</summary>

1. Sugerencia para la estructura del fronted, Nuxt ([https://nuxtjs.org/docs/get-started/directory-structure/]())
2. El código HTML se debe de pasar por un proceso de análisis y revision para saber en que momento se puede estandarizar y generalizar para su reutilización
3. Los archivos `.vue `siempre deben de:
   1. Nombrarse con PascalCase
   2. Tener el atributo "id" en el elemento raíz de la parte `template` del documento
   3. Tener la propiedad "name" en la parte `script` del documento
4. El *nombre del archivo*, *el atributo "id"* y la *propiedad "name"*, siempre deben de coincidir, excepto en casos que sea un "_pk" o un "index", estos deben de cumplir el punto 6, de este archivo de esta sección (FRONTEND)
5. La estructura de la carpeta "page" y la carpeta "component" deben de seguir la misma estructura que el backend
6. En generalización del punto anterior, la estructura de las carpetas del front deben de ser lo mas parecidas posibles a la estructura de carpetas del back
7. Para la estructura interna de las carpetas que representan los "models" de Django que son muy complejos deben de seguir el estándar de GraphQL, el cual es => (consultas, mutaciones, suscripciones), si es muy simple optar por usar el estándar => "CRUDDALS", en algunos casos se va a necesitar los dos (consultas, mutaciones, suscripciones y CRUDDALS), en este caso el CRUDDALS va a funcionar principalmente como enrutador hacia las acciones.
8. La carpeta CRUDDALS solo debe de tener un archivo llamado "index.vue" y allí importar el componente "CRUDDALS"
9. Las carpetas que estén dentro de las carpetas consultas, mutaciones y suscripciones deben de tener el respectivo nombre de la acción que se quiere realizar
10. Los componentes para presentación deben de nombrarse respectivamente con el contenido que va a presentar, dos generales son:
    1. el de crearActualizar se llamara "FormCrearActualizar${NombreDelModelo}$"
    2. el del detalle se llamara "Detalle${NombreDelModelo}$"
11. Detalle UI/UX, usa los enlaces para acortar el camino del cliente, y siempre piensa de manera bidireccional (o multidireccional si aplica), por ejemplo ""
</details>

<details>
   <summary>SEGURIDAD (PERMISOS)</summary>

1. Los permisos inician desde la base de datos
2. Cada tabla debe de tener un grupo de permisos iniciales, los cuales serán las acciones principales => `(C,V,U,D,D,A)` Y se escribirá en la siguiente forma `"accion_nombredelatabla"`
3. En caso de necesitar permisos para modificar el estado de un objeto (o en otros términos modificar un campo en especifico que representa un "estado"), este deberá de escribirse de la siguiente forma:

   1. Para el primer permiso, representado como el "CREAR" sera en un adjetivo descriptivo convertido en verbo y el nombre de la tabla, => `"verbo_nombredelatabla"`
   2. Para el resto de los permisos (VUDDA) sera `"accion_nombredelatabla_adjetivo"`
   3. Anotación, este adjetivo debe de ser una columna de la tabla en preferencia
      1. Ejemplo ==> "pagar_factura", "ver_factura_paga, "eliminar_factura_paga", "actualizar_factura_paga", "activar_factura_paga", "desactivar_factura_paga
         Tener presente si se define que debe de ser en ingles o en espanol
4. En caso de necesitar otra acción re-evaluar la posibilidad de cambiar el nombre, para adaptarlo a los puntos anteriormente mencionados, si aun asi no se logra conseguir, crearlos lo mas descriptivos posibles y parecidos a los esquemas anteriores
5. Los permisos se deben de posicionar en 3 lugares, la base de datos, la API y el frontend, para tener 3 capas de seguridad
6. Las acciones disponibles para los permisos principales son:

   1. > Create
      >
   2. > View (sirve para listar o buscar)
      >
   3. > Update
      >
   4. > Delete
      >
   5. > Deactivate
      >
   6. > Activate
      >

</details>

<details>
   <summary>ENRUTAMIENTO</summary>

1. La propiedad "name" en las rutas del proyecto, deben de:
   1. Coincidir con el atributo "id" y la propiedad "name" del componente que representa
   2. Relacionarse con la propiedad "path" (en el mismo archivo)
2. Para la creación de Rutas se debe de seguir el mismo modelo que en Nuxt ([https://nuxtjs.org/docs/get-started/routing/]()):
   1. La propiedad "path" se debe de construir siguiendo la ruta relativa del archivo del componente, teniendo presente que la raíz debe de ser la carpeta "page" y esta carpeta representara la raíz de la "path" con un slash "/"

</details>

---

**VARIOS**

1. Banco de recursos interesantes e importantes para crecimiento en conocimiento
2. Banco de recursos para la solución de problemas
3. Banco de recursos de herramientas que hagan mas fácil el desarrollo

**Anotaciones**

1. Mecanografía
2. Snnipets de lenguaje
3. Hot-reload
4. Profesionalismo en el IDE
5. Profesionalismo en el lenguaje
6. Atajos de teclado
7. Herramientas para automatizar procesos
8. Evitar re-procesos
9. Plantillas para trabajo repetitivo (Estimaciones, Cotizaciones, Actas de entrega, Actas de onboarding, Documentaciones)
10. Workspace
11. Los COMPONENTES solo deben de pedir unos datos y pintarlos, las paginas son las que deberian de hacer la logica

---

