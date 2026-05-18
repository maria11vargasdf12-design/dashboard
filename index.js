document.addEventListener('DOMContentLoaded', () => {

    const sideMenu   = document.querySelector("aside");
    const menuBtn    = document.querySelector("#menu-btn");
    const closeBtn   = document.querySelector("#close-btn");
    const themeToggler = document.querySelector(".theme-toggler");

    
    const overlay = document.createElement('div');
    overlay.classList.add('sidebar-overlay');
    document.body.appendChild(overlay);


    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';   
        sideMenu.classList.add('active');
        overlay.classList.add('active');
    });

    
    closeBtn.addEventListener('click', () => {
        cerrarMenu();
    });

    
    overlay.addEventListener('click', () => {
        cerrarMenu();
    });

    function cerrarMenu() {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        
        if (window.innerWidth <= 768) {
            sideMenu.style.display = 'none';
        }
    }

  
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sideMenu.style.display = '';
            overlay.classList.remove('active');
        }
    });

    if (themeToggler) {
        themeToggler.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme-variables');
            themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
            themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
        });
    }

    const Orders = [
        { productName: 'Bolso denim',   productNumber: 45732, paymentStatus: 'Previsto', shipping: 'pending'   },
        { productName: 'Zapatos cuero', productNumber: 45733, paymentStatus: 'Pagado',   shipping: 'delivered' },
        { productName: 'Camisa lino',   productNumber: 45734, paymentStatus: 'Previsto', shipping: 'declined'  }
    ];

    const tbody = document.querySelector('table tbody');

    Orders.forEach(order => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.shipping === 'declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">
                ${order.shipping}
            </td>
            <td class="primary">Detalles</td>
        `;
        tbody.appendChild(tr);
    });

});