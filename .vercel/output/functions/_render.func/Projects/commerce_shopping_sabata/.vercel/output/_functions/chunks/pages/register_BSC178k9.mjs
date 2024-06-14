/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, e as renderComponent } from '../astro_31lkWv_f.mjs';
import { $ as $$Layout } from './contact_DFuBl9Wi.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';

const $$LogoNavRegister = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-5"> <a href="/" data-astro-prefetch="tap" class="tracking-[5px]">SABATA</a> <div class="w-[2px] h-[15px] bg-black"></div> <p class="tracking-[2px]">LOGIN</p> </div>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Register/nav/LogoNavRegister.astro", void 0);

const $$NavOptionsRegister = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ol> <li class="flex items-center gap-5"> <a class="link_login" href="">Español</a> <a class="link_login" href="/es/auth/login">Iniciar sesion </a> <a href="" class="link_login_res text-sm text-[#fafafa] bg-[#ef7674] link__register px-3 py-1.5 hover:text-[#ef7674] rounded-3xl hover:bg-[#fff]">Registrarse</a> </li> </ol>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Register/nav/NavOptionsRegister.astro", void 0);

const $$Astro$1 = createAstro("https://sabata.com");
const $$NavRegister = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavRegister;
  return renderTemplate`${maybeRenderHead()}<nav class="flex items-center justify-between w-full py-5 text-sm px-14"> ${renderComponent($$result, "LogoNavRegister", $$LogoNavRegister, {})} <ul class="flex items-center justify-between p-1 gap-7"> <li class="flex gap-10"> <a href="/es/shop/" class="link_login" data-astro-prefetch="tap" href="">Tienda </a> <a class="link_login" data-astro-prefetch="tap" href="">Accesorio</a> <a class="link_login" data-astro-prefetch="tap" href="">Ofertas </a> <a class="link_login" data-astro-prefetch="tap" href="">Contacto</a> </li> </ul> ${renderComponent($$result, "NavOptionsRegister", $$NavOptionsRegister, {})} </nav>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Register/nav/NavRegister.astro", void 0);

function RegisterForm() {
  return /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-3 pt-4 text-xs text-zinc-600", action: "", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-base text-black font-extralight", children: "DATOS PERSONALES" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "email",
        placeholder: "EMAIL",
        className: "w-[300px] placeholder-up focus:placeholder:-mt-4 focus:outline-none h-[45px] border border-r-transparent border-l-transparent bg-transparent pt-1 border-t-transparent border-b-zinc-300 inputLogin"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "-mt-3", children: /* @__PURE__ */ jsx("p", { className: "text-[9px] ml-[17px] -mt-[0px] text-red-500 ", children: "Introduce una dirección de email válida." }) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "password",
        placeholder: "CONTRASEÑA",
        className: "inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "-mt-3", children: /* @__PURE__ */ jsx("p", { className: "text-[9px] ml-[17px] -mt-[0px] text-red-500 ", children: "Este campo es obligatorio." }) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        placeholder: "NOMBRE",
        className: "inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "-mt-3", children: /* @__PURE__ */ jsx("p", { className: "text-[9px] ml-[17px] -mt-[0px] text-red-500 ", children: "Este campo es obligatorio." }) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        placeholder: "APELLIDO",
        className: "inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "-mt-3", children: /* @__PURE__ */ jsx("p", { className: "text-[9px] ml-[17px] -mt-[0px] text-red-500 ", children: "Este campo es obligatorio." }) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "number",
        placeholder: "TELEFONO",
        className: "inputLogin bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "-mt-3", children: /* @__PURE__ */ jsx("p", { className: "text-[9px] ml-[17px] -mt-[0px] text-red-500 ", children: "Este campo es obligatorio." }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 pt-2", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-[14px] h-[14px]" }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("p", { className: "text-xs ml-[5px] mt-[12px] text-[#000000b7] ", children: [
        "Quiero recibir comunicaciones comerciales personalizadas de ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-black", children: "SABATA" }),
        " a través del email."
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-[14px] h-[14px]" }),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("p", { className: "text-xs ml-[5px] mt-[2px] text-[#000000b7] ", children: [
        "He podido leer y entiendo la",
        " ",
        /* @__PURE__ */ jsx("span", { className: "underline", children: "Política de Privacidad y Cookies" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("button", { className: "w-[300px] border py-2 rounded-sm border-zinc-500 hover:text-zinc-400 mt-3", children: "CREAR CUENTA" })
  ] });
}

const $$RegisterOptionText = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Login / Register Options -->${maybeRenderHead()}<div class="relative"> <h2 class="pb-12 text-4xl font-semibold text-center -leading-5">
Registrate y unete a<br>
la comunidad de Sabata
</h2> <div class="flex ml-24"> <p class="text-sm text-center">Si ya te registraste, puedes</p> <a href="/es/auth/login" class="z-10 ml-1 text-[#ef7674] text-sm cursor-pointer">
Iniciar Sesion.</a> </div> <p class="ml-32 text-sm">Y navega en nuestra comunidad.</p> <div class="bg_text_login -z-0"></div> <div class="bg_text_login2 -z-0"></div> <div class="flex items-center justify-center gap-2 pt-5 pb-5"> <div class="w-[120px] h-[1px] bg-[#00000018]"></div> <label class="text-xs text-[#00000080]">O registrate con</label><div class="w-[120px] h-[1px] bg-[#00000018]"></div> </div> <div class="flex items-center justify-center gap-5"> <!-- <img class='px-6 py-2 border rounded-lg ' src={google} alt='' />
      <img class='px-6 py-2 border rounded-lg ' src={iphone} alt='' />
      <img class='px-6 py-2 border rounded-lg ' src={facebook} alt='' /> --> </div> </div>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Register/RegisterOptionText.astro", void 0);

const $$Astro = createAstro("https://sabata.com");
const $$RegisterPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RegisterPage;
  return renderTemplate`<!-- Register Page -->${maybeRenderHead()}<main class="absolute w-full bg-center bg-no-repeat bg-cover h-dvh bg_login_img" style="background-image: url(/img/login/selena_login.jpg)"> <header> ${renderComponent($$result, "NavRegister", $$NavRegister, {})} </header> <section class="flex items-center justify-between w-full gap-10 pl-20 header__content pr-14"> ${renderComponent($$result, "RegisterForm", RegisterForm, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Register/RegisterForm", "client:component-export": "RegisterForm" })} ${renderComponent($$result, "RegisterOptionText", $$RegisterOptionText, {})} </section> </main>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Register/Register_Page.astro", void 0);

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Register_Layout", $$Layout, { "title_page": "Inicio", "description_page": "", "last_update": "2024-05-02", "keywords_page": [""] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RegisterPage", $$RegisterPage, {})} ` })}`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/pages/es/auth/register.astro", void 0);

const $$file = "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/pages/es/auth/register.astro";
const $$url = "/es/auth/register";

export { $$Register as default, $$file as file, $$url as url };
