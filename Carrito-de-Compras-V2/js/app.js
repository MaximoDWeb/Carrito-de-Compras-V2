const contenedor = document.querySelector('#carrito');
const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();

const carrito = [];

const agregarCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    const posicion = carrito.findIndex((item) => {
        return item.titulo === producto.titulo;

    });

    if (posicion === -1) {
        carrito.push(producto);
    } else {
        carrito[posicion].cantidad++;
    }

    mostrarCarrito();
};

const mostrarCarrito = () => {
    contenedor.textContent = '';

    carrito.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo;
        clone.querySelector('.bg-primary').textContent = item.cantidad;
        fragment.appendChild(clone);
    });

    contenedor.appendChild(fragment);
};

botones.forEach((item) => {
    item.addEventListener('click', agregarCarrito);
});
