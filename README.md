# petconnect
PetConnect es una app web responsive para facilitar la adopción de mascotas, desarrollada con Angular para el front-end y Django para el back-end. Conecta personas con animales que buscan un hogar, ofreciendo búsqueda avanzada, gestión de perfiles y más.


## Configuración del Proyecto

### Front-end (Angular)

1. **Instalar dependencias**: 
   - Navega al directorio `frontend` y ejecuta:
     ```bash
     cd frontend
     npm install
     ```

2. **Iniciar el servidor de desarrollo**:
   - Ejecuta el siguiente comando en `frontend` para iniciar el servidor de Angular:
     ```bash
     ng serve
     ```
   - Accede a la aplicación en [http://localhost:4200](http://localhost:4200).

### Back-end (Django)

1. **Crear un entorno virtual**:
   - Navega al directorio `backend` y crea un entorno virtual:
     ```bash
     python -m venv env
     ```

2. **Activar el entorno virtual**:
   - En Windows:
     ```bash
     env\Scripts\activate
     ```
   - En macOS/Linux:
     ```bash
     source env/bin/activate
     ```

3. **Instalar dependencias**:
   - Con el entorno virtual activado, instala las dependencias listadas en `requirements.txt`:
     ```bash
     pip install -r requirements.txt
     ```

4. **Migrar la base de datos**:
   - Ejecuta las migraciones para configurar la base de datos:
     ```bash
     python manage.py migrate
     ```

5. **Iniciar el servidor de desarrollo**:
   - Ejecuta el siguiente comando para iniciar el servidor de Django:
     ```bash
     python manage.py runserver
     ```
   - Accede al back-end en [http://localhost:8000](http://localhost:8000).

## Contribuir

Si deseas contribuir al proyecto, sigue estos pasos:

1. **Haz un fork** del repositorio.
2. **Crea una nueva rama** para tu funcionalidad:
   ```bash
   git checkout -b feature/nueva-funcionalidad
