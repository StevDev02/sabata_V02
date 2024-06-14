import { d as createAstro, c as createComponent, r as renderTemplate, e as renderComponent, f as addAttribute, s as spreadAttributes, u as unescapeHTML, g as renderHead, h as renderSlot, m as maybeRenderHead } from '../astro_31lkWv_f.mjs';
/* empty css                          */
import { clsx } from 'clsx';
/* empty css                          */
/* empty css                            */
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import useEmblaCarousel from 'embla-carousel-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

const $$Astro$b = createAstro("https://sabata.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} `;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/node_modules/.pnpm/@vercel+speed-insights@1.0.11_react@18.3.1/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$a = createAstro("https://sabata.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.3.1_typescript@5.4.5/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$9 = createAstro("https://sabata.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.3.1_typescript@5.4.5/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$8 = createAstro("https://sabata.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.3.1_typescript@5.4.5/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$7 = createAstro("https://sabata.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.3.1_typescript@5.4.5/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$6 = createAstro("https://sabata.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.3.1_typescript@5.4.5/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$5 = createAstro("https://sabata.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.3.1_typescript@5.4.5/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$4 = createAstro("https://sabata.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.3.1_typescript@5.4.5/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$3 = createAstro("https://sabata.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/node_modules/.pnpm/astro-seo@0.8.4_prettier-plugin-astro@0.13.0_prettier@3.3.1_typescript@5.4.5/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$2 = createAstro("https://sabata.com");
const $$SEOTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEOTags;
  const { title_page, description_page, keywords_page, last_update } = Astro2.props;
  const limitedKeywords = Array.isArray(keywords_page) ? keywords_page.slice(0, 50).join(",") : "";
  const name_enterprise = "Sabata";
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const makeTitle = title_page ? title_page + " | Sabata" : "Ecommerce - Sabata";
  const copyright = (/* @__PURE__ */ new Date()).getFullYear() + ",Sabata";
  const resolvedImageWithDomain = new URL("/", Astro2.site).toString();
  return renderTemplate`${renderComponent($$result, "SEO", $$SEO, { "title": makeTitle.substring(0, 60), "titleTemplate": makeTitle.substring(0, 60), "description": description_page.substring(0, 162), "canonical": canonicalURL, "charset": "UTF-8", "twitter": {
    creator: "@Sabata",
    title: makeTitle.substring(0, 60),
    description: description_page.substring(0, 162),
    card: "summary_large_image",
    site: "@Sabata",
    image: resolvedImageWithDomain || "/favicon.svg",
    imageAlt: name_enterprise
  }, "openGraph": {
    basic: {
      title: makeTitle.substring(0, 60),
      type: "website",
      image: resolvedImageWithDomain || "/favicon.svg",
      url: canonicalURL
    },
    optional: {
      description: description_page.substring(0, 162),
      locale: "es-MX",
      siteName: name_enterprise,
      determiner: ""
    },
    article: {
      authors: [name_enterprise],
      section: "Ecommerce",
      publishedTime: last_update,
      modifiedTime: last_update
    }
  }, "extend": {
    link: [
      // Favicon
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicon.svg"
      },
      // Sitemap
      {
        rel: "sitemap",
        href: "/sitemap-index.xml"
      }
    ],
    meta: [
      // Keywords
      {
        name: "keywords",
        content: limitedKeywords
      },
      // Viewport
      {
        name: "viewport",
        content: "width=device-width"
      },
      // CSP
      {
        httpEquiv: "Content-Security-Policy",
        content: "upgrade-insecure-requests; frame-ancestors 'none';"
      },
      // Indexation
      {
        name: "robots",
        content: "index, follow"
      },
      {
        name: "googlebot",
        content: "index, follow"
      },
      // Cache
      {
        httpEquiv: "Cache-Control",
        content: "max-age=31536000"
      },
      // Astro Generator
      {
        name: "generator",
        content: Astro2.generator
      },
      // Author
      {
        name: "author",
        content: name_enterprise
      },
      // Publisher
      {
        name: "publisher",
        content: name_enterprise
      },
      // Copyright
      {
        name: "copyright",
        content: copyright
      },
      // Default Theme
      {
        name: "theme-color",
        content: "#FFFFFF"
      },
      // Last Modified
      {
        name: "date",
        content: last_update
      },
      // Location
      {
        name: "geo.region",
        content: "MX-EC"
      },
      {
        name: "geo.placename",
        content: "Quito, Ecuador"
      },
      {
        name: "address",
        content: "Quito, Ecuador"
      }
    ]
  } })}`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/SEO_Tags.astro", void 0);

const $$Astro$1 = createAstro("https://sabata.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/node_modules/.pnpm/astro@4.10.0_typescript@5.4.5/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://sabata.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title_page, description_page, keywords_page, last_update } = Astro2.props;
  return renderTemplate`<html lang="es-MX" class="h-full antialiased scroll-smooth"> <head>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderComponent($$result, "SEO_Tags", $$SEOTags, { "title_page": title_page, "description_page": description_page, "last_update": last_update, "keywords_page": keywords_page })}${renderHead()}</head> <!-- Content --> <body class="body"> <!-- SLOT --> ${renderSlot($$result, $$slots["default"])} <!-- SLOT -->  ${renderComponent($$result, "SpeedInsights", $$Index, {})} </body></html>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/layout/Layout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "flex items-center justify-center rounded-md text-md font-medium transition-colors",
  {
    variants: {
      variant: {
        // Palette Buttons
        Nyanza: "bg-[#E4FDE1] text-black shadow-md",
        Purpureus: "bg-[##dda9ff] text-black shadow-md",
        Russian_Violet: "bg-[#330036] text-white shadow-md",
        Accept: "bg-[#91FF8F] text-black shadow-md",
        Delete: "bg-[#ef7674] text-black shadow-md",
        Powder_Blue: "bg-[#AAC7E6] text-black shadow-md",
        Platinum: "bg-[#e8e8e8] text-black shadow-md",
        Timberwolf: "bg-[#D3CCCC] text-black shadow-md",
        Charcoal: "bg-[#40424E] text-white shadow-md",
        Ash_Gray: "bg-[#C4CCBC] text-black shadow-md",
        Naked: "bg-none text-black border-0 rounded-none font-regular",
        // Default
        default: "bg-black text-white shadow-md",
        // Product Item
        Product_Item: "bg-none border-0 shadow-none",
        // Custom Variants
        LogOn: "w-[300px] text-base border py-2 rounded-none border-zinc-500 hover:bg-black hover:text-white mt-3",
        SocialNetBtn: "border bg-white shadow-md"
      },
      size: {
        // Normal Sizes
        default: "h-10 px-[31px] h-[32px] pr-3",
        md: "h-10 rounded-md px-4",
        lg: "h-10 rounded-md px-8",
        xl: "h-10 rounded-md px-20",
        none: "h-auto rounded-none",
        //Custom Sizes
        SocialNetSize: "h-auto w-auto px-7 py-2 rounded-lg",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "lg"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      size,
      className: cn(
        "absolute hover:h-10 hover:w-10 transition-all ease-in-out  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12  hover:bg-white bg-[#3e4346] top-1/2 -translate-y-1/2" : "-top-12  hover:bg-white bg-[#3e4346] left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeftIcon, { className: "w-5 text-black h-5" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      size,
      className: cn(
        "absolute hover:h-10 hover:w-10 transition-all ease-in-out h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 hover:bg-white bg-[#3e4346] top-1/2 -translate-y-1/2" : "-bottom-12 hover:bg-white bg-[#3e4346] left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRightIcon, { className: "w-5 text-black h-5" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

const ArrayImages = [
  { src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg", alt: "" },
  { src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg", alt: "" },
  { src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg", alt: "" },
  { src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg", alt: "" },
  { src: "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg", alt: "" }
];
function CarouselSizeContactFooter() {
  return /* @__PURE__ */ jsxs(
    Carousel,
    {
      opts: {
        align: "start"
      },
      className: "w-full",
      children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: ArrayImages.map((image, index) => /* @__PURE__ */ jsx(CarouselItem, { className: "md:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsx("div", { className: "p-1", children: /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "flex w-[395px] h-[415px] items-center justify-center p-6", children: /* @__PURE__ */ jsx("img", { className: "w-full cover aspect-auto", src: image.src, alt: image.alt, decoding: "async", loading: "lazy" }) }) }) }) }, index)) }),
        /* @__PURE__ */ jsx(CarouselPrevious, {}),
        /* @__PURE__ */ jsx(CarouselNext, {})
      ]
    }
  );
}

const $$ContactContainer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative z-0 w-full bg-center bg-no-repeat bg-cover h-dvh" style="background-image: url(/img/contact/bg-contact-gradients.jpg)" data-astro-cid-osfn7cfx> <div class="absolute top-0 left-0 z-20 flex items-end w-full py-12 text-white cursor-default bg-black/30 h-dvh" data-astro-cid-osfn7cfx> <h2 class="text-white leading-none tracking-tighter text_animation_h2 text-[150px] font-semibold" data-astro-cid-osfn7cfx>
Por que la ropa que usas te define
</h2> </div> <div class="absolute top-0 left-0 z-10 w-full cursor-default bg-black/0 h-dvh" data-astro-cid-osfn7cfx></div> </section> <section class="w-full mt-28 gap-10 px-20 flex flex-col h-[110vh]" data-astro-cid-osfn7cfx> <h2 class="text-2xl text-black text-nowrap inline-block py-2 w-[257px] pl-6 rounded-[50px] font-bold uppercase bg-white" data-astro-cid-osfn7cfx>
Sobre Nosotros
</h2> <h2 class="flex flex-col gap-2 leading-[60px] text-white text-[64px]" data-astro-cid-osfn7cfx> <span data-astro-cid-osfn7cfx>Desatando la Revolución: La </span> <span data-astro-cid-osfn7cfx>Vanguardia de la Moda Femenina en Quito </span> <span data-astro-cid-osfn7cfx>y el nuevo estilo de vida de las mujeres.</span> </h2> <p class="mt-5 text-3xl font-thin leading-10 pr-14 text-[#a0a0a0]" data-astro-cid-osfn7cfx>
La moda femenina es un universo diverso y en constante evolución que refleja
    la creatividad, la personalidad y la expresión individual de las mujeres en
    todo el mundo. Desde la elegancia clásica de un vestido negro hasta la
    audacia de una declaración de moda vanguardista, la moda ofrece a las
    mujeres la oportunidad de explorar y experimentar con una amplia gama de
    estilos telas, colores y patrones.
</p> </section> <section class="w-full pt-10 flex h-[110vh]" data-astro-cid-osfn7cfx> <div class="w-[580px] items-center flex flex-col gap-5 justify-center h-full" data-astro-cid-osfn7cfx> <h2 class="text-6xl font-semibold text_animation_h2" data-astro-cid-osfn7cfx>Contactanos</h2> <ul class="flex flex-col gap-3 mt-6" data-astro-cid-osfn7cfx> <li class="w-[458px] hover:bg-[#2e2e2e46] transition-all ease-in-out items-center gap-6 justify-center flex h-[118px] rounded-lg border-[#2e2e2e] border" data-astro-cid-osfn7cfx> <img class="rounded-full w-[70px]" src="https://unavatar.io/midudev" alt="" data-astro-cid-osfn7cfx> <p class="text-[#979797] ml-4 flex flex-col pr-14 text-[17px] font-medium" data-astro-cid-osfn7cfx> <span class="-mt-1" data-astro-cid-osfn7cfx>Hola Soy Jessica y estaré feliz de</span> <span class="-mt-1" data-astro-cid-osfn7cfx>poder ayudarte con tu solicitud de</span> <span class="-mt-1" data-astro-cid-osfn7cfx>proyecto. <span class="text-base text-white" data-astro-cid-osfn7cfx>Sólo envíame un correo</span></span> <span class="-mt-1 text-base text-white" data-astro-cid-osfn7cfx>electrónico: <span class="border-b border-white cursor-pointer" data-astro-cid-osfn7cfx>stev_0w0@gmail.com</span></span> </p> </li> <li class="w-[458px] hover:bg-[#2e2e2e46] transition-all ease-in-out items-center justify-center flex h-[118px] rounded-lg border-[#2e2e2e] border" data-astro-cid-osfn7cfx> <img class="rounded-full ml-6 w-[70px]" src="https://unavatar.io/pedro" alt="" data-astro-cid-osfn7cfx> <p class="text-[#979797] ml-8 flex flex-col pr-14 text-[17px] font-medium" data-astro-cid-osfn7cfx> <span class="-mt-1" data-astro-cid-osfn7cfx>¿Le gustaría ponerse en contacto</span> <span class="-mt-1" data-astro-cid-osfn7cfx>directamente con la dirección?</span> <span class="-mt-1 text-base text-white border-white" data-astro-cid-osfn7cfx>Entonces envíame un correo electrónico</span> <span class="-mt-1 text-base text-white border-white cursor-pointer" data-astro-cid-osfn7cfx><span class="border-b border-white cursor-pointer" data-astro-cid-osfn7cfx>stev_0w0@gmail.com</span></span> </p> </li> </ul> <ul class="flex gap-3 w-[460px]" data-astro-cid-osfn7cfx> <li class="flex flex-col-reverse font-thin text-xs hover:bg-[#535353] cursor-pointer transition-all ease-in-out text-[#97a18d] items-center justify-center gap-1 w-[147px] h-[72px] bg-[#2e2e2e] rounded-lg" data-astro-cid-osfn7cfx>
Llamanos<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" data-astro-cid-osfn7cfx><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" data-astro-cid-osfn7cfx></path></svg> </li> <li class="flex flex-col-reverse font-thin text-xs hover:bg-[#535353] cursor-pointer transition-all ease-in-out text-[#97a18d] items-center justify-center gap-1 w-[147px] h-[72px] bg-[#2e2e2e] rounded-lg" data-astro-cid-osfn7cfx>
Escribenos<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 36 36" data-astro-cid-osfn7cfx><path fill="currentColor" d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z" class="clr-i-solid clr-i-solid-path-1" data-astro-cid-osfn7cfx></path><path fill="currentColor" d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61M5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z" class="clr-i-solid clr-i-solid-path-2" data-astro-cid-osfn7cfx></path><path fill="none" d="M0 0h36v36H0z" data-astro-cid-osfn7cfx></path></svg> </li> <li class="flex flex-col-reverse font-thin text-xs hover:bg-[#535353] cursor-pointer transition-all ease-in-out text-[#97a18d] items-center justify-center gap-1 w-[147px] h-[72px] bg-[#2e2e2e] rounded-lg" data-astro-cid-osfn7cfx>
Ubicanos<svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" data-astro-cid-osfn7cfx><g fill="none" data-astro-cid-osfn7cfx><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" data-astro-cid-osfn7cfx></path><path fill="currentColor" d="M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699l4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241z" data-astro-cid-osfn7cfx></path></g></svg> </li> </ul> <ul class="hover:bg-[#535353] transition-all ease-in-out flex items-center px-10 justify-between w-[460px] h-[82px] bg-[#2e2e2e] rounded-lg" data-astro-cid-osfn7cfx> <li class="flex flex-col justify-center" data-astro-cid-osfn7cfx> <h4 class="text-[#979797] text-[15px]" data-astro-cid-osfn7cfx>Correo electrónico</h4> <p class="text-base cursor-pointer" data-astro-cid-osfn7cfx>stev_0w0@gmail.com</p> </li> <li class="flex border-l pl-14 border-[#97979738] ml-8 flex-col justify-center" data-astro-cid-osfn7cfx> <h4 class="text-[#979797] text-base" data-astro-cid-osfn7cfx>Teléfono</h4> <p class="text-base cursor-pointer" data-astro-cid-osfn7cfx>+593 99 920 3644</p> </li> </ul> </div> <div class="w-[784px] bg-center bg-no-repeat bg-cover h-full" style="background-image: url(https://cdn.prod.website-files.com/651d15fb8f27f4a03c14ae88/65310415aea0e5cfda5f0647_ese-keyvisual-contact2.jpg)" data-astro-cid-osfn7cfx></div> </section> <section class="w-full px-[60px] items-center justify-center pt-10 flex h-[110vh]" data-astro-cid-osfn7cfx> <div class="w-full relative rounded-xl mt-8 h-[90vh] border" data-astro-cid-osfn7cfx> <div class="flex absolute -translate-x-[50%] -translate-y-[50%] top-[15%] left-[92%] text-black items-center hover:w-24 hover:h-24 hover:bg-white transition-all ease-in-out w-20 h-20 justify-center bg-[#3e4346] rounded-full" data-astro-cid-osfn7cfx> <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" data-astro-cid-osfn7cfx><path fill="currentColor" d="M11.224 6.807c1.2-.835 2.036-1.415 2.694-1.753c.658-.337.96-.336 1.156-.266c.12.044.24.107.346.186c.187.139.37.417.5 1.156a.75.75 0 0 0 1.478-.26c-.15-.856-.427-1.613-1.084-2.1a2.861 2.861 0 0 0-.731-.393c-.795-.286-1.579-.053-2.35.342c-.759.39-1.678 1.03-2.818 1.823l-.251.176c-.418.29-.556.384-.698.45a1.926 1.926 0 0 1-.475.15c-.15.027-.311.03-.812.03h-.16c-1.12-.001-1.925-.002-2.64.348c-.66.322-1.284.947-1.621 1.607c-.364.712-.406 1.455-.467 2.518l-.007.128c-.021.36-.034.717-.034 1.051c0 .335.013.691.034 1.052l.007.128c.06 1.062.103 1.805.467 2.518c.337.66.962 1.285 1.621 1.607c.715.35 1.52.349 2.64.348h.16c.5 0 .662.003.812.03c.163.028.323.079.475.15c.142.066.28.159.698.45l.251.175c1.14.794 2.06 1.434 2.819 1.823c.77.396 1.554.629 2.349.343a2.86 2.86 0 0 0 .73-.393c.658-.488.934-1.245 1.085-2.1a.75.75 0 1 0-1.478-.26c-.13.74-.313 1.017-.5 1.155a1.361 1.361 0 0 1-.346.186c-.196.071-.498.072-1.156-.265c-.658-.338-1.495-.918-2.694-1.753l-.252-.176c-.35-.244-.599-.417-.872-.544a3.43 3.43 0 0 0-.846-.268c-.297-.053-.598-.053-1.016-.053h-.06c-1.348 0-1.776-.018-2.14-.196c-.358-.174-.75-.56-.944-.941c-.204-.4-.241-.811-.313-2.05A16.99 16.99 0 0 1 4.75 12c0-.298.011-.624.031-.965c.072-1.239.109-1.65.313-2.05c.194-.381.586-.767.944-.941c.364-.178.792-.196 2.14-.196h.06c.418 0 .72 0 1.016-.053c.292-.052.576-.142.846-.268c.273-.127.522-.3.872-.544z" data-astro-cid-osfn7cfx></path><path fill="currentColor" d="M14.53 8.47a.75.75 0 0 0-1.06 1.06L15.94 12l-2.47 2.47a.75.75 0 0 0 1.06 1.06L17 13.062l2.47 2.47a.75.75 0 0 0 1.06-1.061L18.06 12l2.47-2.47a.75.75 0 1 0-1.06-1.06L17 10.94z" data-astro-cid-osfn7cfx></path></svg> </div> <div class="flex absolute -translate-x-[50%] -translate-y-[50%] top-[15%] left-[83%] text-black items-center hover:w-24 hover:h-24 hover:bg-white transition-all ease-in-out w-20 h-20 justify-center bg-[#3e4346] rounded-full" data-astro-cid-osfn7cfx> <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 256 256" data-astro-cid-osfn7cfx><path fill="currentColor" d="M224 128a96 96 0 0 1-94.71 96H128a95.38 95.38 0 0 1-65.9-26.2a8 8 0 0 1 11-11.63a80 80 0 1 0-1.67-114.78a3 3 0 0 1-.26.25l-10.54 9.65l17 17A8 8 0 0 1 72 112H24a8 8 0 0 1-8-8V56a8 8 0 0 1 13.66-5.7L49.31 70l10.94-10A96 96 0 0 1 224 128" data-astro-cid-osfn7cfx></path></svg> </div> <div class="flex absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] text-black items-center hover:w-32 hover:h-32 hover:bg-white transition-all ease-in-out w-24 h-24 justify-center bg-[#3e4346] rounded-full" data-astro-cid-osfn7cfx> <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" data-astro-cid-osfn7cfx><path fill="currentColor" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712" data-astro-cid-osfn7cfx></path></svg> </div> </div> </section> <section class="w-full px-[60px] mt-28 pt-10 h-[110vh]" data-astro-cid-osfn7cfx> <div class="flex flex-col items-center justify-center" data-astro-cid-osfn7cfx> <div class="flex items-center justify-center gap-4" data-astro-cid-osfn7cfx> <h2 class="text-6xl tracking-tighter" data-astro-cid-osfn7cfx>Nuestra Misión</h2> <p class="mt-5 flex flex-col text-[3vw] text-[#fafafa83]" data-astro-cid-osfn7cfx>
Es empoderar a las mujeres a través de la moda,
</p> </div> <p class="mt-5 flex flex-col text-[3vw] text-[#fafafa83]" data-astro-cid-osfn7cfx>
ofreciendo calzado femenino de alta calidad que combina estilo, comodidad
      y accesibilidad. Nos comprometemos a proporcionar una experiencia de
      compra excepcional, tanto en línea como en la tienda, que sea
      personalizada y sin complicaciones. Nuestro objetivo es ayudar a cada
      mujer a expresar su estilo único y sentirse segura en cada paso que da.
      Porque nuestra moda es tu nuevo estilo de vida.
</p> </div> <section class="w-full border flex items-center justify-start px-[60px] mt-28 pt-10 h-[110vh]" data-astro-cid-osfn7cfx> <h2 class="text-white cursor-pointer leading-none tracking-tighter text_animation_h2 text-[150px] font-semibold" data-astro-cid-osfn7cfx>
Por que la ropa que usas te define
</h2> </section> <section class="w-full px-[60px] mt-40 pt-10 h-[180vh]" data-astro-cid-osfn7cfx> <h2 class="flex tracking-tighter text-[#c8c8c8] gap-1 flex-col text-6xl" data-astro-cid-osfn7cfx> <span data-astro-cid-osfn7cfx>Juntos estamos</span> <span data-astro-cid-osfn7cfx>logrando grandes cosas</span> </h2> <ul class="grid mt-12 grid-cols-4 gap-[10px]" data-astro-cid-osfn7cfx> <li class="w-[304px] hover:bg-[#151515] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> <li class="w-[304px] h-[190px] bg-[#292929] rounded-lg" data-astro-cid-osfn7cfx></li> </ul> </section> <section class="w-full px-[60px] items-center justify-center pt-10 flex h-[110vh]" data-astro-cid-osfn7cfx> <div class="w-full relative rounded-xl -mt-0.5 h-[98vh] border" data-astro-cid-osfn7cfx> <h2 class="absolute -translate-x-[50%] -translate-y-[50%] top-[47%] left-[26%]
            flex flex-col gap-2 font-semibold leading-[60px] text-white text-[48px]" data-astro-cid-osfn7cfx> <span class="-mt-4" data-astro-cid-osfn7cfx>"Joven, dinamico tipo. I </span> <span class="-mt-4" data-astro-cid-osfn7cfx>Creer en Ti. Y sentir estas</span> <span class="-mt-4" data-astro-cid-osfn7cfx>Increiblemente fuerte</span> <span class="-mt-4" data-astro-cid-osfn7cfx>Tienes consiguio él."</span> </h2> <div class="flex absolute -translate-x-[50%] -translate-y-[50%] top-[15%] left-[92%] text-black items-center hover:w-24 hover:h-24 hover:bg-white transition-all ease-in-out w-20 h-20 justify-center bg-[#3e4346] rounded-full" data-astro-cid-osfn7cfx> <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24" data-astro-cid-osfn7cfx><path fill="currentColor" d="M11.224 6.807c1.2-.835 2.036-1.415 2.694-1.753c.658-.337.96-.336 1.156-.266c.12.044.24.107.346.186c.187.139.37.417.5 1.156a.75.75 0 0 0 1.478-.26c-.15-.856-.427-1.613-1.084-2.1a2.861 2.861 0 0 0-.731-.393c-.795-.286-1.579-.053-2.35.342c-.759.39-1.678 1.03-2.818 1.823l-.251.176c-.418.29-.556.384-.698.45a1.926 1.926 0 0 1-.475.15c-.15.027-.311.03-.812.03h-.16c-1.12-.001-1.925-.002-2.64.348c-.66.322-1.284.947-1.621 1.607c-.364.712-.406 1.455-.467 2.518l-.007.128c-.021.36-.034.717-.034 1.051c0 .335.013.691.034 1.052l.007.128c.06 1.062.103 1.805.467 2.518c.337.66.962 1.285 1.621 1.607c.715.35 1.52.349 2.64.348h.16c.5 0 .662.003.812.03c.163.028.323.079.475.15c.142.066.28.159.698.45l.251.175c1.14.794 2.06 1.434 2.819 1.823c.77.396 1.554.629 2.349.343a2.86 2.86 0 0 0 .73-.393c.658-.488.934-1.245 1.085-2.1a.75.75 0 1 0-1.478-.26c-.13.74-.313 1.017-.5 1.155a1.361 1.361 0 0 1-.346.186c-.196.071-.498.072-1.156-.265c-.658-.338-1.495-.918-2.694-1.753l-.252-.176c-.35-.244-.599-.417-.872-.544a3.43 3.43 0 0 0-.846-.268c-.297-.053-.598-.053-1.016-.053h-.06c-1.348 0-1.776-.018-2.14-.196c-.358-.174-.75-.56-.944-.941c-.204-.4-.241-.811-.313-2.05A16.99 16.99 0 0 1 4.75 12c0-.298.011-.624.031-.965c.072-1.239.109-1.65.313-2.05c.194-.381.586-.767.944-.941c.364-.178.792-.196 2.14-.196h.06c.418 0 .72 0 1.016-.053c.292-.052.576-.142.846-.268c.273-.127.522-.3.872-.544z" data-astro-cid-osfn7cfx></path><path fill="currentColor" d="M14.53 8.47a.75.75 0 0 0-1.06 1.06L15.94 12l-2.47 2.47a.75.75 0 0 0 1.06 1.06L17 13.062l2.47 2.47a.75.75 0 0 0 1.06-1.061L18.06 12l2.47-2.47a.75.75 0 1 0-1.06-1.06L17 10.94z" data-astro-cid-osfn7cfx></path></svg> </div> <div class="flex absolute -translate-x-[50%] -translate-y-[50%] top-[15%] left-[83%] text-black items-center hover:w-24 hover:h-24 hover:bg-white transition-all ease-in-out w-20 h-20 justify-center bg-[#3e4346] rounded-full" data-astro-cid-osfn7cfx> <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 256 256" data-astro-cid-osfn7cfx><path fill="currentColor" d="M224 128a96 96 0 0 1-94.71 96H128a95.38 95.38 0 0 1-65.9-26.2a8 8 0 0 1 11-11.63a80 80 0 1 0-1.67-114.78a3 3 0 0 1-.26.25l-10.54 9.65l17 17A8 8 0 0 1 72 112H24a8 8 0 0 1-8-8V56a8 8 0 0 1 13.66-5.7L49.31 70l10.94-10A96 96 0 0 1 224 128" data-astro-cid-osfn7cfx></path></svg> </div> <ul class="absolute -translate-x-[50%] -translate-y-[50%] bottom-0 left-[50%]
            flex items-center justify-center gap-4" data-astro-cid-osfn7cfx> <li class="w-[290px] pl-3 gap-4 glassphromismo h-[85px] transition-all ease-in-out items-center flex rounded-lg" data-astro-cid-osfn7cfx> <img class="rounded-full p-2 border border-gray-600 w-[60px]" src="https://unavatar.io/pedro" alt="" data-astro-cid-osfn7cfx> <p class="flex flex-col text-sm font-medium" data-astro-cid-osfn7cfx> <span class="-mt-1" data-astro-cid-osfn7cfx>Steven J Sanchez</span> <span class="-mt-1 text-[13px] text-[#938886] uppercase" data-astro-cid-osfn7cfx>Desarrollador Fullstack</span> </p> </li> <li class="w-[290px] pl-3 gap-4 glassphromismo h-[85px] transition-all ease-in-out items-center flex rounded-lg" data-astro-cid-osfn7cfx> <img class="rounded-full p-2 border border-gray-600 w-[60px]" src="https://unavatar.io/pedro" alt="" data-astro-cid-osfn7cfx> <p class="flex flex-col text-sm font-medium" data-astro-cid-osfn7cfx> <span class="-mt-1" data-astro-cid-osfn7cfx>Steven J Sanchez</span> <span class="-mt-1 text-[13px] text-[#938886] uppercase" data-astro-cid-osfn7cfx>Desarrollador Fullstack</span> </p> </li> <li class="w-[290px] pl-3 gap-4 glassphromismo h-[85px] transition-all ease-in-out items-center flex rounded-lg" data-astro-cid-osfn7cfx> <img class="rounded-full p-2 border border-gray-600 w-[60px]" src="https://unavatar.io/pedro" alt="" data-astro-cid-osfn7cfx> <p class="flex flex-col text-sm font-medium" data-astro-cid-osfn7cfx> <span class="-mt-1" data-astro-cid-osfn7cfx>Steven J Sanchez</span> <span class="-mt-1 text-[13px] text-[#938886] uppercase" data-astro-cid-osfn7cfx>Desarrollador Fullstack</span> </p> </li> </ul> </div> </section> <section class="w-full px-[60px] mt-28 pt-10 h-[110vh]" data-astro-cid-osfn7cfx> <div class="flex flex-col items-center justify-center" data-astro-cid-osfn7cfx> <div class="flex items-center justify-center gap-4" data-astro-cid-osfn7cfx> <h2 class="text-6xl" data-astro-cid-osfn7cfx>Nuestra Visión</h2> <p class="mt-5 flex flex-col text-[3vw] text-[#fafafa83]" data-astro-cid-osfn7cfx>
Nuestra visión es convertirnos en la marca de
</p> </div> <p class="mt-5 flex flex-col text-[3vw] text-[#fafafa83]" data-astro-cid-osfn7cfx>
calzado femenino de referencia a nivel nacional e internacional,
        reconocida por nuestra calidad, innovación y compromiso con la
        satisfacción del cliente. Aspiramos a ser líderes en la industria del
        calzado, estableciendo nuevas tendencias y elevando el estándar de lo
        que las mujeres pueden esperar de su calzado. A través de nuestras
        prácticas de negocio sostenibles y éticas, buscamos hacer una diferencia
        positiva en la industria de la moda.
</p> </div> </section> <section class="w-full flex flex-col gap-8 justify-center px-[60px] mt-28 pt-10 h-[110vh]" data-astro-cid-osfn7cfx> <h2 class="flex tracking-tighter text-[#c8c8c8] gap-1 flex-col text-6xl" data-astro-cid-osfn7cfx> <span data-astro-cid-osfn7cfx>Ultimas noticias del</span> <span data-astro-cid-osfn7cfx>mundo fashion de SABATA</span> </h2> ${renderComponent($$result, "CarouselSizeContactFooter", CarouselSizeContactFooter, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/Contact/Carousel_Footer_Contact", "client:component-export": "CarouselSizeContactFooter", "data-astro-cid-osfn7cfx": true })} </section> <footer class="w-full bg-[#272727] px-[60px] mt-28 pt-10 h-[110vh]" data-astro-cid-osfn7cfx> <h2 class="text-white leading-none tracking-tighter text_animation_h2 text-[150px] font-semibold" data-astro-cid-osfn7cfx>
Contacto Conseguir en Contacto
</h2> </footer>  <!-- <section class="flex items-center justify-center w-full h-dvh">
    <div class="flex gap-4">
        <img class="w-[200px]" src="https://framerusercontent.com/images/ezXAxEXo9rzaI0hhHkp1oIcpFD0.png" alt="">
        <img class="w-[200px]" src="https://framerusercontent.com/images/KEvhI0NCdrBeoFy2w6Zup0BHKoY.png?scale-down-to=512 " alt="">
        <img class="w-[200px]" src="https://framerusercontent.com/images/ezXAxEXo9rzaI0hhHkp1oIcpFD0.png" alt="">
        <img class="w-[200px]" src="https://framerusercontent.com/images/lZEuk6Yf4LUCJuzAKjbIEiTqwA4.png?scale-down-to=512" alt="">
    </div>
</section> --> </section>`;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/components/Contact/Contact_Container.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Contact_Layout", $$Layout, { "title_page": "Contacto", "description_page": "", "last_update": "2024-05-02", "keywords_page": [""], "data-astro-cid-3qw6zh24": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative text-white bg-[#111]" data-astro-cid-3qw6zh24> ${renderComponent($$result2, "Contact_Page", $$ContactContainer, { "data-astro-cid-3qw6zh24": true })} </main> ` })} `;
}, "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/pages/es/contact.astro", void 0);

const $$file = "C:/Users/Usuario/Projects/commerce_shopping_sabata/src/pages/es/contact.astro";
const $$url = "/es/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Button as B, Card as C, CardContent as a, contact as b, cn as c };
