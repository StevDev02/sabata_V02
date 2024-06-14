/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, e as renderComponent } from '../astro_31lkWv_f.mjs';
import { $ as $$Layout } from './contact_4IoN-AP3.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import 'clsx';

const Login_Form = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-4 pt-10 text-xs text-zinc-600", action: "", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-base text-black font-extralight", children: "ACCEDE A TU CUENTA" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "email",
        placeholder: "EMAIL",
        "x-data": "{ focused: false }",
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
    /* @__PURE__ */ jsx("div", {}),
    /* @__PURE__ */ jsx("button", { className: "w-[300px] border py-2 rounded-sm border-zinc-500 hover:text-zinc-400 mt-3", children: "INICIAR SESION" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 pt-5 pb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "w-[110px] h-[1px] bg-[#00000018] " }),
      " ",
      /* @__PURE__ */ jsx("label", { className: "text-xs text-[#00000080] ", children: "O inicia con" }),
      /* @__PURE__ */ jsx("div", { className: "w-[110px] h-[1px] bg-[#00000018] " })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-5" })
  ] }) });
};

const $$LogoNavLogin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center gap-5"> <a href="/" data-astro-prefetch="tap" class="tracking-[5px]">SABATA</a> <div class="w-[2px] h-[15px] bg-black  "></div> <p class="tracking-[2px] ">LOGIN</p> </div>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Login/nav/LogoNavLogin.astro", void 0);

const $$NavOptionsLogin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ol> <li class="flex items-center gap-5"> <a class="link_login" data-astro-prefetch="tap" href="">Español</a> <a class="link_login_active" data-astro-prefetch="tap" href="">Iniciar sesion
</a> <a href="/es/auth/register" data-astro-prefetch="tap" class="link_login_res text-xs hover:text-[#fafafa] hover:bg-[#ef7674] link__register px-3 py-1.5 text-[#ef7674] rounded-3xl bg-[#fff]">Registrarse</a> </li> </ol>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Login/nav/NavOptionsLogin.astro", void 0);

const $$Astro$2 = createAstro("https://sabata.com");
const $$NavLogin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NavLogin;
  return renderTemplate`${maybeRenderHead()}<nav class="flex items-center justify-between w-full py-5 text-sm px-14 "> ${renderComponent($$result, "LogoNavLogin", $$LogoNavLogin, {})} <ul class="flex items-center justify-between p-1 gap-7"> <li class="flex gap-10 "> <a href="/es/shop/" data-astro-prefetch="tap" class="link_login" href="">Tienda </a> <a class="link_login" href="" data-astro-prefetch="tap">Accesorio</a> <a class="link_login" href="" data-astro-prefetch="tap">Ofertas </a> <a class="link_login" href="" data-astro-prefetch="tap">Contacto</a> </li> </ul> ${renderComponent($$result, "NavOptiosLogin", $$NavOptionsLogin, {})} </nav>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Login/nav/NavLogin.astro", void 0);

const $$LoginOptionText = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Login / Register Options -->${maybeRenderHead()}<div class="relative"> <h2 class="pb-12 text-4xl font-semibold text-center -leading-5">
Inicia sesión en<br>
Sabata directamente
</h2> <div class="flex ml-7"> <p class="text-sm">Si no tienes una cuenta, puedes</p> <a href="/es/auth/register" class="z-10 ml-1 text-[#ef7674] text-sm cursor-pointer">
Registrarte aquí.</a> </div> <p class="text-sm text-center">Y unete a nuestra comunidad.</p> <div class="bg_text_login -z-0"></div> <div class="bg_text_login2 -z-0"></div> </div>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Login/LoginOptionText.astro", void 0);

const $$Astro$1 = createAstro("https://sabata.com");
const $$LoginPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LoginPage;
  return renderTemplate`<!-- Login Page -->${maybeRenderHead()}<main class="w-full bg-center bg-no-repeat bg-cover h-dvh" style="background-image: url(/img/login/selena_login.jpg)"> <header> ${renderComponent($$result, "NavLogin", $$NavLogin, {})} </header> <section class="flex items-center justify-between w-full gap-10 px-20 mt-11 header__content"> ${renderComponent($$result, "LoginOptionText", $$LoginOptionText, {})} ${renderComponent($$result, "Login_Form", Login_Form, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Login/Login_Form", "client:component-export": "default" })} </section> </main>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Login/Login_Page.astro", void 0);

const $$Astro = createAstro("https://sabata.com");
const $$Login = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "Login_Layout", $$Layout, { "title_page": "Iniciar Sesion", "description_page": "", "last_update": "2024-05-02", "keywords_page": [""] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Login_Page", $$LoginPage, {})} ` })}`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/pages/es/auth/login.astro", void 0);

const $$file = "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/pages/es/auth/login.astro";
const $$url = "/es/auth/login";

export { $$Login as default, $$file as file, $$url as url };
