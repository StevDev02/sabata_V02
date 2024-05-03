import { Button } from "@/components/ui/button";

const navItems = [
  { title: "Inicio", url: "/" },
  { title: "Accesorios", url: "/accesories" },
  { title: "Ofertas", url: "/offers" },
  { title: "Tienda", url: "/shop" },
];

const Header = () => {
  return (
    <>
      <header>
        <nav className="absolute top-0 z-20 w-full p-6">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-20">
            <div className="flex items-center gap-5">
              <a
                className="text-xl tracking-widest text-current"
                title="Logo de Sabata"
                aria-label="Logo de Sabata"
                href="https://sabata.com"
              >
                SABATA
              </a>
              <div className="w-[2px] h-6 bg-current" />
              <p className="text-xl tracking-widest">INICIO</p>
            </div>
            <div className="flex items-center justify-center gap-2 md:order-2 md:space-x-0 rtl:space-x-reverse">
              <a
                title="Iniciar Sesion"
                aria-label="Iniciar Sesion"
                href="/ec/auth/login"
                data-astro-prefetch="tap"
              >
                <Button variant="Platinum">Iniciar Sesion</Button>
              </a>
              <a
                title="Registrarse"
                aria-label="Registrarse"
                href="/ec/auth/register"
                data-astro-prefetch="tap"
              >
                <Button variant="Russian_Violet">Registrarse</Button>
              </a>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <ul className="flex flex-col gap-8 p-2 text-lg font-regular rtl:space-x-reverse md:flex-row md:mt-0">
                {navItems.map(({ title, url }, index) => (
                  <li key={index}>
                    <a
                      key={index}
                      title={title}
                      href={url}
                      className="block px-3 py-2 tracking-normal text-current"
                      aria-current="page"
                      data-astro-prefetch="tap"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>

  );
};

export default Header;

