import { Button } from "@/components/ui/button";

const Login_Form = () => {
  return (
    <>
      {/* <!-- Login Form --> */}
      <form className="grid gap-4 pt-10 text-xs text-zinc-600" action="">
        <h2 className="text-2xl text-black font-extralight">
          ACCEDE A TU CUENTA
        </h2>
        {/* <!-- Email --> */}
        <input
          type="email"
          placeholder="EMAIL"
          className="text-sm w-[300px] placeholder-up focus:placeholder:-mt-4 focus:outline-none h-[45px] border border-r-transparent border-l-transparent bg-transparent pt-1 border-t-transparent border-b-zinc-300 inputLogin"
        />
        <div className="-mt-3">
          <p className="text-sm ml-[17px] -mt-[0px] text-red-500">
            Introduce una dirección de email válida.
          </p>
          {/* <!-- Alert --> */}
        </div>
        {/* <!-- Password --> */}
        <input
          type="password"
          placeholder="CONTRASEÑA"
          className="text-sm bg-transparent pt-1 w-[300px] h-[45px] pr-2 focus:outline-none border border-r-transparent border-l-transparent border-t-transparent border-b-zinc-300"
        />
        <div className="-mt-3">
          <p className="text-sm ml-[17px] -mt-[0px] text-red-500">
            Este campo es obligatorio.
          </p>
          {/* <!-- Alert --> */}
        </div>
        {/* <!-- Button LogOn --> */}
        <Button id="LogOn" variant="LogOn">
          INICIAR SESION
        </Button>
        {/* <!-- Login Options --> */}
        <div className="flex items-center justify-center gap-2 pt-5 pb-5">
          <div className="w-[100px] h-[1px] bg-[#00000018]"></div>
          <span className="text-sm font-medium text-[#00000080]">
            O inicia con
          </span>
          <div className="w-[100px] h-[1px] bg-[#00000018]"></div>
        </div>
        {/* <!-- Social Networks --> */}
        <div className="flex items-center justify-center gap-5">
          <Button
            title="Iniciar Sesion con Google"
            aria-label="Iniciar Sesion con Google"
            id="LogOn_Google"
            size="SocialNetSize"
            variant="SocialNetBtn"
          >
            <svg width="30" height="30" viewBox="0 0 256 262">
              <path
                fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              ></path>
              <path
                fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              ></path>
              <path
                fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
              ></path>
              <path
                fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              ></path>
            </svg>
          </Button>
          <Button
            title="Iniciar Sesion con Apple"
            aria-label="Iniciar Sesion con Apple"
            id="LogOn_Apple"
            size="SocialNetSize"
            variant="SocialNetBtn"
          >
            <svg width="30" height="30" viewBox="0 0 15 15">
              <path
                fill="#000000"
                d="M7.875 2.937A.371.371 0 0 1 7.5 2.57C7.5 1.15 8.676 0 10.124 0a.37.37 0 0 1 .375.367c0 1.42-1.175 2.57-2.624 2.57"
              ></path>
              <path
                fill="#000000"
                d="M7.875 2.937A.371.371 0 0 1 7.5 2.57C7.5 1.15 8.676 0 10.124 0a.37.37 0 0 1 .375.367c0 1.42-1.175 2.57-2.624 2.57m5.475 7.731c.145.106.192.3.11.458C12.14 13.712 11.087 15 10.125 15c-.448 0-.888-.142-1.317-.418a1.985 1.985 0 0 0-2.073-.044c-.52.305-1.015.462-1.485.462c-1.415 0-3.75-4.267-3.75-6.608c0-2.5 1.339-4.406 3.375-4.406c.958 0 1.785.138 2.48.419c.294.118.627.11.914-.025c.564-.266 1.308-.394 2.23-.394c1.127 0 2.11.55 2.926 1.615a.362.362 0 0 1-.075.514c-.911.67-1.35 1.421-1.35 2.277c0 .855.439 1.607 1.35 2.276"
              ></path>
              <path
                fill="#000000"
                d="M13.35 10.668c.145.106.192.3.11.458C12.14 13.712 11.087 15 10.125 15c-.448 0-.888-.142-1.317-.418a1.985 1.985 0 0 0-2.073-.044c-.52.305-1.015.462-1.485.462c-1.415 0-3.75-4.267-3.75-6.608c0-2.5 1.339-4.406 3.375-4.406c.958 0 1.785.138 2.48.419c.294.118.627.11.914-.025c.564-.266 1.308-.394 2.23-.394c1.127 0 2.11.55 2.926 1.615a.362.362 0 0 1-.075.514c-.911.67-1.35 1.421-1.35 2.277c0 .855.439 1.607 1.35 2.276"
              ></path>
            </svg>
          </Button>
          <Button
            title="Iniciar Sesion con Facebook"
            aria-label="Iniciar Sesion con Facebook"
            id="LogOn_Facebook"
            size="SocialNetSize"
            variant="SocialNetBtn"
          >
            <svg width="30" height="30" viewBox="0 0 256 256">
              <path
                fill="#1877F2"
                d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
              ></path>
              <path
                fill="#FFF"
                d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"
              ></path>
            </svg>
          </Button>
        </div>
      </form>
    </>
  );
};

export default Login_Form;
