        const paths = document.querySelectorAll('.metal-path');
        const displayNombre = document.getElementById('metal-nombre');
        const displayAlomante = document.getElementById('alomante');
        const displayDesc = document.getElementById('metal-descripcion');

        paths.forEach(path => {
            path.addEventListener('click', function () {
                // Quitar clase activa de todos
                paths.forEach(p => p.classList.remove('active'));

                // Añadir clase activa al seleccionado
                this.classList.add('active');

                // Actualizar textos
                const nombre = this.getAttribute('data-name');
                const descripcion = this.getAttribute('data-desc');
                const alomante = this.getAttribute('data-alomante');

                displayNombre.innerText = nombre;
                displayDesc.innerText = descripcion;
                displayAlomante.innerText = alomante;
            });
        });