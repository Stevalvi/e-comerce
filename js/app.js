
const modalImagen = document.querySelector('#modal-imagen');

if(modalImagen) { // Si existe ese modalImagen ejecutamos ese código, sino no
    modalImagen.addEventListener('show.bs.modal', function(event) { // Ese show va a buscar el modal en bootstrap para poder ejecutar la función, osea que primero revisa que exista ese modal y cuando lo encuentra ejecuta el function
        const enlace = event.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-imagen'); // Con esto ya va identificando esa imagen a la que le estamos dando click
    
        // Como esa ruta data-bs-imagen solo tiene el nombre de la imagen, debemos crear esa elemento que contenga la imágen con un soource(src) y la extensión de la imágen (jpg)
    
        //Constuir la imágen
        const imagen = document.createElement('IMG'); // Se debe colocar en maýuscula
        imagen.src = `img/${rutaImagen}.jpg`; // De esta forma accedemos a esa ruta de la imágen al dar click a cada una, y la forma en como accedimos a ese atributo de html src, es con la variable imagen seguido de un .
        imagen.classList.add('img-fluid'); // Creamos la clase para que la imagen sea responsive
        imagen.alt = 'imagen galeria'; // Todas las imagenes deben tener su alt, lo creamos con javascript
    
        // Como ya creamos nuestra imágen con javascript, debemos decir en donde queremos que se muestre en el html 
    
        const contenidoModal = document.querySelector('.modal-body'); // Le decimos que queremos que esas imágenes se muestren en el modal-body que creamos en el html
    
        // Ahora le agregamos de hijo un img a ese modal-body, hagamos de cuenta que en el html le agregamos un img dentro del div que contiene el modal-body, le estamos creando un hijo, pero lo haremos con javascript
    
        contenidoModal.appendChild(imagen); //  Este appenchild va a ir agregando hijos a ese contenidoModal, pero eso a futuro nos irá acumulando imágenes, por eso una vez le creemos un hijo que es al momento de dar click en una imágen, debemos limpiarlo al momento de cerrarlo para que no nos acumule imágenes
    });
    
    // Con el código de arriba si nos muestran las imágenes cuando damos click pero a medida que vamos dando click en otras imágenes es como si las estuvidera acumulando una por una y las muestra todoas.
    
    // Eso se le llama como evento que es cuando se cierra el modal, de esta forma lo solucionamos, se llama hidden
    
    modalImagen.addEventListener('hidden.bs.modal', function() {
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = ''; // De esta forma limpiamos ese contenido y no se acumulan imágenes
    })
}

// Código que nos trajimos de bootstrap en la sección de forms para validar formularios, como eso lo actualizan para encontrar el más reciente queda ahi arriba donde dice Browser defaults

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

