interface IconProps {
  hover: boolean;
}

function IconCart({ hover }: IconProps) {
  return (
    <a className="cursor-pointer" href="/es/shop/">
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 3C0 2.58579 0.335787 2.25 0.75 2.25H3.408C3.71468 2.25 3.99046 2.43671 4.10436 2.72146L4.61578 4H21.523C22.2304 4 22.7142 4.71453 22.4514 5.37139L19.5029 12.7428C19.1992 13.5021 18.4637 14 17.6459 14H7.68142L6.32692 16.25H19.25C19.6642 16.25 20 16.5858 20 17C20 17.4142 19.6642 17.75 19.25 17.75H5C4.7296 17.75 4.48013 17.6044 4.34708 17.369C4.21403 17.1336 4.21799 16.8448 4.35745 16.6132L6.57309 12.9327L3 4H3.00023L2.90023 3.75H0.75C0.335786 3.75 0 3.41421 0 3ZM8.01578 12.5H17.6459C17.8504 12.5 18.0342 12.3755 18.1102 12.1857L20.7845 5.5H5.21578L8.01578 12.5Z"
          fill={hover ? "#000" : "#fff"}
        />
        <path
          d="M7 20.75C7 21.5784 6.32843 22.25 5.5 22.25C4.67157 22.25 4 21.5784 4 20.75C4 19.9216 4.67157 19.25 5.5 19.25C6.32843 19.25 7 19.9216 7 20.75Z"
          fill={hover ? "#000" : "#fff"}
        />
        <path
          d="M18.5 22.25C19.3284 22.25 20 21.5784 20 20.75C20 19.9216 19.3284 19.25 18.5 19.25C17.6716 19.25 17 19.9216 17 20.75C17 21.5784 17.6716 22.25 18.5 22.25Z"
          fill={hover ? "#000" : "#fff"}
        />
      </svg>
    </a>
  );
}

function IconUser({ hover }: IconProps) {
  return (
    <a href="/es/auth/login" data-astro-prefetch="tap" className="cursor-pointer">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12ZM12 13.5C13.933 13.5 15.5 11.933 15.5 10C15.5 8.06701 13.933 6.5 12 6.5C10.067 6.5 8.5 8.06701 8.5 10C8.5 11.933 10.067 13.5 12 13.5Z"
          fill={hover ? "#fff" : "#000"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9776 21.9484C11.3137 21.9825 11.6548 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.4815 2.90389 16.752 4.4004 18.5C5.77451 20.105 7.64823 21.2696 9.78062 21.7528C10.1714 21.8414 10.5709 21.9071 10.9776 21.9484ZM17.4776 18.4999C16.0365 19.7156 14.1856 20.4608 12.1616 20.4985C12.1079 20.4995 12.054 20.5 12 20.5C11.9569 20.5 11.914 20.4997 11.8711 20.499C9.83437 20.4688 7.97122 19.7221 6.52238 18.4999C8.00263 17.2509 9.9131 16.5 12 16.5C14.0869 16.5 15.9973 17.2509 17.4776 18.4999ZM18.5375 17.4327C16.7845 15.9169 14.4993 15 12 15C9.50064 15 7.21545 15.9169 5.46245 17.4327C4.23701 15.9597 3.5 14.0659 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 14.0659 19.763 15.9597 18.5375 17.4327Z"
          fill={hover ? "#fff" : "#000"}
        />
      </svg>
    </a>
  );
}

interface CartAndUserProps {
  hover: boolean;
}

export function CartAndUser({ hover }: CartAndUserProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="bg-white flex items-center gap-1 justify-center rounded-3xl h-[35px] w-[75px]">
        <div className="flex items-center ml-1.5 justify-center">
          <IconUser hover={hover} />
        </div>
        <div className="flex items-center justify-center bg-black rounded-full w-[33px] h-[33px]">
          <IconCart hover={hover} />
        </div>
      </div>
    </div>
  );
}
