# Proyecto Final


## Clonación del Repositorio

```bash
git clone https://github.com/rodrigopaz-h/PROYECTO-FINAL.git
```

## Pasos para Colaborar en el Proyecto

1. **Navega al Directorio**:
   Después de clonar el repositorio, navega al directorio del proyecto:

   ```bash
   cd nombre-del-repo
   ```

2. **Crea una Nueva Rama**:
   Antes de realizar cambios, es recomendable crear una nueva rama para tu trabajo. Esto ayuda a mantener el trabajo organizado y facilita la colaboración.

   ```bash
   git checkout -b nombre-de-tu-rama
   ```

   Reemplaza `nombre-de-tu-rama` con un nombre descriptivo relacionado con el cambio que planeas hacer.

3. **Realiza tus Cambios**:
   Abre los archivos que deseas editar en tu editor de código favorito y realiza los cambios necesarios.

4. **Agrega tus Cambios**:
   Después de realizar tus cambios, agrega los archivos modificados al área de preparación:

   ```bash
   git add .
   ```

   Este comando agrega todos los archivos cambiados. Si solo deseas agregar archivos específicos, puedes reemplazar el `.` con el nombre del archivo.

5. **Confirma tus Cambios**:
   Realiza un commit con un mensaje descriptivo que explique los cambios realizados:

   ```bash
   git commit -m "Descripción de los cambios realizados"
   ```

6. **Sube tu Rama**:
   Sube tu rama al repositorio remoto. Esto hace que tus cambios estén disponibles en GitHub:

   ```bash
   git push origin nombre-de-tu-rama
   ```

7. **Crea un Pull Request**:
   Ve a la página de tu repositorio en GitHub. Allí verás una opción para crear un pull request para tu rama recién subida. Haz clic en ella y completa los detalles. Esto permite que otros revisen tus cambios antes de fusionarlos en la rama principal.

## Consejos Adicionales
- **Mantén tu Rama Actualizada**: Antes de crear un pull request, asegúrate de que tu rama esté actualizada con la rama principal (usualmente `main` o `master`). Puedes hacerlo con:

   ```bash
   git checkout main
   git pull origin main
   git checkout nombre-de-tu-rama
   git merge main
   ```

8. **Después de Fusionar**: Cuando un pull request ha sido aprobado y fusionado, elimina la rama local y actualiza tu rama principal:


## Licencia

MIT License
