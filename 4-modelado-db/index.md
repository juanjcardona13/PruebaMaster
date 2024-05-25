### Modelo de Base de Datos - Sistema de Gestión de Vídeos

#### Tabla `Usuarios`
| Atributo         | Tipo de Dato   | Notas             |
|------------------|----------------|-------------------|
| user_id          | INT            | PK                |
| username         | VARCHAR        | Único             |
| email            | VARCHAR        | Único             |
| password         | VARCHAR        |                   |
| fecha_registro   | DATE           |                   |

#### Tabla `Autores`
| Atributo         | Tipo de Dato   | Notas             |
|------------------|----------------|-------------------|
| author_id        | INT            | PK                |
| user_id          | INT            | FK a `Usuarios`   |
| nombre           | VARCHAR        |                   |
| biografía        | TEXT           |                   |
| fecha_nacimiento | DATE           |                   |

#### Tabla `Colaboradores`
| Atributo           | Tipo de Dato   | Notas             |
|--------------------|----------------|-------------------|
| colaborador_id     | INT            | PK                |
| video_id           | INT            | FK a `Videos`     |
| user_id            | INT            | FK a `Usuarios`   |
| rol                | VARCHAR        |                   |
| fecha_colaboración | DATE           |                   |

#### Tabla `Videos`
| Atributo          | Tipo de Dato   | Notas                |
|-------------------|----------------|----------------------|
| video_id          | INT            | PK                   |
| author_id         | INT            | FK a `Autores`       |
| título            | VARCHAR        |                      |
| descripción       | TEXT           |                      |
| fecha_publicación | DATE           |                      |
| duración          | INT            | Duración en segundos |
| url               | VARCHAR        | URL del vídeo        |

#### Tabla `Comentarios`
| Atributo         | Tipo de Dato   | Notas             |
|------------------|----------------|-------------------|
| comentario_id    | INT            | PK                |
| video_id         | INT            | FK a `Videos`     |
| user_id          | INT            | FK a `Usuarios`   |
| texto            | TEXT           |                   |
| fecha_comentario | DATE           |                   |

#### Tabla `Reviews`
| Atributo         | Tipo de Dato   | Notas             |
|------------------|----------------|-------------------|
| review_id        | INT            | PK                |
| video_id         | INT            | FK a `Videos`     |
| user_id          | INT            | FK a `Usuarios`   |
| puntuación       | INT            | Escala, por ejemplo, 1-5 |
| comentario       | TEXT           |                   |
| fecha_review     | DATE           |                   |

### Restricciones de Integridad
- **Integridad Referencial**: Claves foráneas que vinculan registros de diferentes tablas.
- **Unicidad**: Se asegura que ciertos campos como `username` y `email` en `Usuarios` sean únicos para evitar duplicados.
- **Obligatoriedad**: Campos como `username`, `email`, `password` en `Usuarios` son obligatorios.
