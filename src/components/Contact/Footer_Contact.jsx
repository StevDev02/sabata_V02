import "../Home/Collection/Style_Collection/style_collection.css"

export function Footer_Contact () {
    return ( 
        <>
        <footer className="w-full p-8 h-[100vh] items-end text-white mt-10">
        
  <div class='col mt-52'>
    <img class='logo' src='images/ic_logo.png' alt='' />
    <h4 class='font-black text-lg'>Contactos</h4>
    <p><strong>Dirección: </strong>Galo PI. Lasso y Pedro Carbono, Carapungo</p>
    <p><strong>Telefono: </strong>+593 99 920 3644</p>
    <p><strong>Horario: </strong>08:00 - 13:00, Lunes a Sabados</p>
    <div class='follow'>
      <h4 class='font-black text-lg'>Siguenos</h4>
      {/* <div class='icon'>
        <img src='images/footer/facebook.png' alt='' />
        <img src='images/footer/instagram.png' alt='' />
        <img src='images/footer/tik-tok.png' alt='' />
        <img src='images/footer/twitter.png' alt='' />
        <img src='images/footer/whatsapp.png' alt='' /> */}
      {/* </div> */}
    </div>
  </div>

  <div class='col'>
    <h4 class='font-black text-lg'>Acerca de</h4>
    <a class=' text-white hover:text-gray-500  relative' href='#'>Sobre nosotros</a>
    <a class=' text-white hover:text-gray-500  relative' href='#'>Información de entrega</a>
    <a class=' text-white hover:text-gray-500  relative' href='#'>Politicas y Privacidad</a>
    <a class=' text-white hover:text-gray-500  relative' href='#'>Terminos y condiciones</a>
    <a class=' text-white hover:text-gray-500  relative' href='#'>Contactanos</a>
  </div>

  <div class='col fon'>
    <h4 class='font-black text-lg'>Mi cuenta</h4>
    <a class=' text-white hover:text-gray-500  relative  ' href='#'>Regístrate</a>
    <a class=' text-white hover:text-gray-500  relative' href='#'>Ver carrito</a>
    <a class=' text-white hover:text-gray-500  relative' href='#'>Mi lista de deseos</a>
    <a class=' text-white hover:text-gray-500  relative' href='#'>Seguimiento de mi pedido</a>
    <a class=' text-white hover:text-gray-500  relative' href='#'>Ayuda</a>
  </div>

  <div class='col install'>
    <h4 class='font-black text-lg'>Descarga nuestra app</h4>
    <p>Desde App Store o Google Play</p>
    <div class='row'>
      {/* <img src='images/footer/google-play.jpg' />
      <img src='images/footer/app-store.jpg' /> */}
    </div>
    <p>Pasarelas de pago seguras</p>
    <img src='images/footer/pagos-methd.png' alt='' />
  </div>
  <div class='copyrigth'>
    <p>© 2024, Sabata etc - HTML CSS Ecommerce Page</p>
  </div>
        </footer>
        </>
     )
}
