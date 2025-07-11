export interface IconProps {
  name: string;
  className?: string;
}
const Icon = ({ name, className }: IconProps) => {
  switch (name) {
    case "heart":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8333 11.6667C17.075 10.45 18.3333 8.99167 18.3333 7.08333C18.3333 5.86776 17.8504 4.70197 16.9909 3.84243C16.1313 2.98289 14.9655 2.5 13.75 2.5C12.2833 2.5 11.25 2.91667 9.99996 4.16667C8.74996 2.91667 7.71662 2.5 6.24996 2.5C5.03438 2.5 3.86859 2.98289 3.00905 3.84243C2.14951 4.70197 1.66663 5.86776 1.66663 7.08333C1.66663 9 2.91663 10.4583 4.16663 11.6667L9.99996 17.5L15.8333 11.6667Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.68335 10H7.91668L8.33335 9.16671L10 12.9167L11.6667 7.08337L12.9167 10H17.3083"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
     case "view":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 -960 960 960"
          width="18px"
          fill="#619ACF"
        >
          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
        </svg>
      );
      case "download":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 -960 960 960"
          width="18px"
          fill="#619ACF"
        >
          <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
        </svg>
      );
    case "vaccine":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_183_5903)">
            <path
              d="M15 1.66663L18.3333 4.99996"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.1666 5.83337L16.6666 3.33337"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8333 7.49996L7.24996 16.0833C6.41663 16.9166 5.16663 16.9166 4.41663 16.0833L3.91663 15.5833C3.08329 14.75 3.08329 13.5 3.91663 12.75L12.5 4.16663"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 9.16663L10.8333 12.5"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.16663 15.8334L1.66663 18.3334"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.6666 3.33337L16.6666 8.33337"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_183_5903">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "pill":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_183_2868)">
            <path
              d="M8.74996 17.0833L17.0833 8.74996C17.4727 8.36836 17.7826 7.91334 17.995 7.41123C18.2075 6.90912 18.3183 6.36987 18.321 5.82467C18.3238 5.27946 18.2184 4.73913 18.0111 4.23489C17.8037 3.73066 17.4984 3.27254 17.1129 2.88702C16.7274 2.5015 16.2693 2.19623 15.765 1.98886C15.2608 1.78149 14.7205 1.67613 14.1753 1.67889C13.6301 1.68164 13.0908 1.79245 12.5887 2.0049C12.0866 2.21735 11.6316 2.52723 11.25 2.91663L2.91663 11.25C2.52723 11.6316 2.21735 12.0866 2.0049 12.5887C1.79245 13.0908 1.68164 13.6301 1.67889 14.1753C1.67613 14.7205 1.78149 15.2608 1.98886 15.765C2.19623 16.2693 2.5015 16.7274 2.88702 17.1129C3.27254 17.4984 3.73066 17.8037 4.23489 18.0111C4.73913 18.2184 5.27946 18.3238 5.82467 18.321C6.36987 18.3183 6.90912 18.2075 7.41123 17.995C7.91334 17.7826 8.36836 17.4727 8.74996 17.0833Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.08337 7.08337L12.9167 12.9167"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_183_2868">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "wheat":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_183_2873)">
            <path
              d="M1.66663 18.3333L13.3333 6.66663"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.89172 10.4416L4.16672 9.16663L5.44172 10.4416C5.98622 10.9883 6.29194 11.7284 6.29194 12.5C6.29194 13.2715 5.98622 14.0116 5.44172 14.5583L4.16672 15.8333L2.89172 14.5583C2.34722 14.0116 2.0415 13.2715 2.0415 12.5C2.0415 11.7284 2.34722 10.9883 2.89172 10.4416Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.22497 7.10837L7.49997 5.83337L8.77497 7.10837C9.31947 7.65502 9.62519 8.39515 9.62519 9.16671C9.62519 9.93827 9.31947 10.6784 8.77497 11.225L7.49997 12.5L6.22497 11.225C5.68047 10.6784 5.37476 9.93827 5.37476 9.16671C5.37476 8.39515 5.68047 7.65502 6.22497 7.10837Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.55835 3.775L10.8333 2.5L12.1083 3.775C12.6528 4.32165 12.9586 5.06177 12.9586 5.83333C12.9586 6.60489 12.6528 7.34502 12.1083 7.89167L10.8333 9.16667L9.55835 7.89167C9.01385 7.34502 8.70813 6.60489 8.70813 5.83333C8.70813 5.06177 9.01385 4.32165 9.55835 3.775Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.6667 1.66663H18.3334V3.33329C18.3334 4.21735 17.9822 5.06519 17.3571 5.69032C16.7319 6.31544 15.8841 6.66663 15 6.66663H13.3334V4.99996C13.3334 4.1159 13.6846 3.26806 14.3097 2.64294C14.9348 2.01782 15.7827 1.66663 16.6667 1.66663Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.55829 14.5583L10.8333 15.8333L9.55829 17.1083C9.01165 17.6528 8.27152 17.9586 7.49996 17.9586C6.7284 17.9586 5.98827 17.6528 5.44163 17.1083L4.16663 15.8333L5.44163 14.5583C5.98827 14.0138 6.7284 13.7081 7.49996 13.7081C8.27152 13.7081 9.01165 14.0138 9.55829 14.5583Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8917 11.225L14.1667 12.5L12.8917 13.775C12.345 14.3195 11.6049 14.6252 10.8333 14.6252C10.0618 14.6252 9.32165 14.3195 8.775 13.775L7.5 12.5L8.775 11.225C9.32165 10.6805 10.0618 10.3748 10.8333 10.3748C11.6049 10.3748 12.345 10.6805 12.8917 11.225Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.225 7.89172L17.5 9.16672L16.225 10.4417C15.6784 10.9862 14.9383 11.2919 14.1667 11.2919C13.3951 11.2919 12.655 10.9862 12.1084 10.4417L10.8334 9.16672L12.1084 7.89172C12.655 7.34722 13.3951 7.0415 14.1667 7.0415C14.9383 7.0415 15.6784 7.34722 16.225 7.89172Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_183_2873">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "flask":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_183_2862)">
            <path
              d="M17.5001 5.83333L5.68339 17.65C5.24044 18.0881 4.64215 18.3331 4.01917 18.3315C3.3962 18.3299 2.79914 18.0819 2.35839 17.6417C1.91669 17.1995 1.66858 16.6 1.66858 15.975C1.66858 15.35 1.91669 14.7505 2.35839 14.3083L14.1667 2.5"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3334 1.66663L18.3334 6.66663"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 13.3334H3.33337"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_183_2862">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "calendar":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.33334 1.33337V4.00004"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6667 1.33337V4.00004"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 6.66663H14"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "hashtag":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.66666 6H13.3333"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66666 10H13.3333"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66668 2L5.33334 14"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6667 2L9.33334 14"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "duration":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 4.99996V3.99996C14 3.64634 13.8595 3.3072 13.6095 3.05715C13.3594 2.8071 13.0203 2.66663 12.6667 2.66663H3.33333C2.97971 2.66663 2.64057 2.8071 2.39052 3.05715C2.14048 3.3072 2 3.64634 2 3.99996V13.3333C2 13.6869 2.14048 14.0261 2.39052 14.2761C2.64057 14.5262 2.97971 14.6666 3.33333 14.6666H5.66667"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6667 1.33337V4.00004"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.33334 1.33337V4.00004"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 6.66663H5.33333"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.6667 11.6667L10.6667 10.8667V9.33337"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6667 14.6666C12.8758 14.6666 14.6667 12.8758 14.6667 10.6666C14.6667 8.45749 12.8758 6.66663 10.6667 6.66663C8.45752 6.66663 6.66666 8.45749 6.66666 10.6666C6.66666 12.8758 8.45752 14.6666 10.6667 14.6666Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "qrcode":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.66667 2H2.66667C2.29848 2 2 2.29848 2 2.66667V4.66667C2 5.03486 2.29848 5.33333 2.66667 5.33333H4.66667C5.03486 5.33333 5.33333 5.03486 5.33333 4.66667V2.66667C5.33333 2.29848 5.03486 2 4.66667 2Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3333 2H11.3333C10.9651 2 10.6667 2.29848 10.6667 2.66667V4.66667C10.6667 5.03486 10.9651 5.33333 11.3333 5.33333H13.3333C13.7015 5.33333 14 5.03486 14 4.66667V2.66667C14 2.29848 13.7015 2 13.3333 2Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66667 10.6666H2.66667C2.29848 10.6666 2 10.9651 2 11.3333V13.3333C2 13.7015 2.29848 14 2.66667 14H4.66667C5.03486 14 5.33333 13.7015 5.33333 13.3333V11.3333C5.33333 10.9651 5.03486 10.6666 4.66667 10.6666Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 10.6666H12C11.6464 10.6666 11.3072 10.8071 11.0572 11.0572C10.8071 11.3072 10.6667 11.6463 10.6667 12V14"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 14V14.01"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.99999 4.66663V6.66663C7.99999 7.02025 7.85951 7.35939 7.60947 7.60943C7.35942 7.85948 7.02028 7.99996 6.66666 7.99996H4.66666"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 8H2.01"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 2H8.01"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 10.6666V10.6766"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6667 8H11.3333"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 8V8.01"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14V13.3334"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "microscope":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H9.33333"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 14.6666H14"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.33332 14.6667C10.571 14.6667 11.758 14.175 12.6332 13.2999C13.5083 12.4247 14 11.2377 14 10C14 8.76236 13.5083 7.57538 12.6332 6.70021C11.758 5.82504 10.571 5.33337 9.33332 5.33337H8.66666"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 9.33337H7.33333"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.99999 8C5.64637 8 5.30723 7.85952 5.05718 7.60948C4.80713 7.35943 4.66666 7.02029 4.66666 6.66667V4H8.66666V6.66667C8.66666 7.02029 8.52618 7.35943 8.27613 7.60948C8.02608 7.85952 7.68695 8 7.33332 8H5.99999Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.00001 4.00004V2.00004C8.00001 1.82323 7.92977 1.65366 7.80475 1.52864C7.67972 1.40361 7.51015 1.33337 7.33334 1.33337H6.00001C5.8232 1.33337 5.65363 1.40361 5.52861 1.52864C5.40358 1.65366 5.33334 1.82323 5.33334 2.00004V4.00004"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "barcode":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 3.33337V12.6667"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.33334 3.33337V12.6667"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 3.33337V12.6667"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.3333 3.33337V12.6667"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 3.33337V12.6667"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg
          className={className}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6.5L6 1.5L11 6.5"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow-left":
        return (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.99998 5.33331L1.33331 7.99998L3.99998 10.6666"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.33331 8H14.6666"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    case "exit":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#223143"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#223143"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pipe":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_386_814)">
            <path
              d="M1.66663 18.3333L2.49996 17.5H4.99996L12.5 10"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 17.5V15L10 7.5"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 5.00003L15.3334 2.16669C15.6649 1.83517 16.1145 1.64893 16.5834 1.64893C17.0522 1.64893 17.5018 1.83517 17.8334 2.16669C18.1649 2.49821 18.3511 2.94785 18.3511 3.41669C18.3511 3.88553 18.1649 4.33517 17.8334 4.66669L15 7.50003L15.3334 7.83336C15.4975 7.99751 15.6277 8.19239 15.7166 8.40687C15.8054 8.62134 15.8511 8.85121 15.8511 9.08336C15.8511 9.31551 15.8054 9.54538 15.7166 9.75986C15.6277 9.97433 15.4975 10.1692 15.3334 10.3334C15.1692 10.4975 14.9743 10.6277 14.7599 10.7166C14.5454 10.8054 14.3155 10.8511 14.0834 10.8511C13.8512 10.8511 13.6213 10.8054 13.4069 10.7166C13.1924 10.6277 12.9975 10.4975 12.8334 10.3334L9.66669 7.16669C9.50254 7.00254 9.37233 6.80766 9.28349 6.59319C9.19465 6.37871 9.14893 6.14884 9.14893 5.91669C9.14893 5.68455 9.19465 5.45467 9.28349 5.2402C9.37233 5.02572 9.50254 4.83085 9.66669 4.66669C9.83085 4.50254 10.0257 4.37233 10.2402 4.28349C10.4547 4.19465 10.6845 4.14893 10.9167 4.14893C11.1488 4.14893 11.3787 4.19465 11.5932 4.28349C11.8077 4.37233 12.0025 4.50254 12.1667 4.66669L12.5 5.00003Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_386_814">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "animal":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8334 4.16675C14.5834 4.16675 13.5001 5.33341 13.3334 5.83341C10.4167 4.58341 4.16675 5.58341 4.16675 10.0001C4.16675 11.5001 4.16675 12.5001 5.83341 13.7501V16.6667H9.16675V15.0001H11.6667V16.6667H15.0001V13.3334C15.8334 12.9167 16.4167 12.5001 16.6667 11.6667H18.3334V8.33341H16.6667C16.6667 7.50008 16.2501 7.08341 15.8334 6.66675V4.16675Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.66675 7.5V8.33333C1.66675 9.25 2.41675 10 3.33341 10H4.16675"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3333 9.16675H13.3416"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "scroll":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 10H8.33331"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 6.66675H8.33331"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 14.1667V4.16667C15.8333 3.72464 15.6577 3.30072 15.3452 2.98816C15.0326 2.67559 14.6087 2.5 14.1666 2.5H3.33331"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66669 17.5H16.6667C17.1087 17.5 17.5326 17.3244 17.8452 17.0118C18.1578 16.6993 18.3334 16.2754 18.3334 15.8333V15C18.3334 14.779 18.2456 14.567 18.0893 14.4107C17.933 14.2545 17.721 14.1667 17.5 14.1667H9.16669C8.94567 14.1667 8.73371 14.2545 8.57743 14.4107C8.42115 14.567 8.33335 14.779 8.33335 15V15.8333C8.33335 16.2754 8.15776 16.6993 7.8452 17.0118C7.53264 17.3244 7.10871 17.5 6.66669 17.5ZM6.66669 17.5C6.22466 17.5 5.80074 17.3244 5.48817 17.0118C5.17561 16.6993 5.00002 16.2754 5.00002 15.8333V4.16667C5.00002 3.72464 4.82443 3.30072 4.51186 2.98816C4.1993 2.67559 3.77538 2.5 3.33335 2.5C2.89133 2.5 2.4674 2.67559 2.15484 2.98816C1.84228 3.30072 1.66669 3.72464 1.66669 4.16667V5.83333C1.66669 6.05435 1.75448 6.26631 1.91076 6.42259C2.06704 6.57887 2.27901 6.66667 2.50002 6.66667H5.00002"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pen":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 13.3334H14"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.9173 2.41461C11.1827 2.14922 11.5426 2.00012 11.9179 2.00012C12.2933 2.00012 12.6532 2.14922 12.9186 2.41461C13.184 2.68001 13.3331 3.03996 13.3331 3.41528C13.3331 3.7906 13.184 4.15055 12.9186 4.41595L4.91194 12.4233C4.75334 12.5819 4.55729 12.6979 4.34194 12.7606L2.42728 13.3193C2.36991 13.336 2.3091 13.337 2.25122 13.3222C2.19333 13.3074 2.1405 13.2772 2.09824 13.235C2.05599 13.1927 2.02587 13.1399 2.01104 13.082C1.99621 13.0241 1.99721 12.9633 2.01394 12.9059L2.57261 10.9913C2.63542 10.7762 2.75144 10.5804 2.90994 10.4219L10.9173 2.41461Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 3.33337L12 5.33337"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "scales":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6666 10.6667L12.6666 5.33337L14.6666 10.6667C14.0866 11.1 13.3866 11.3334 12.6666 11.3334C11.9466 11.3334 11.2466 11.1 10.6666 10.6667Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.33337 10.6667L3.33337 5.33337L5.33337 10.6667C4.75337 11.1 4.05337 11.3334 3.33337 11.3334C2.61337 11.3334 1.91337 11.1 1.33337 10.6667Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66663 14H11.3333"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 2V14"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 4.66671H3.33333C4.66667 4.66671 6.66667 4.00004 8 3.33337C9.33333 4.00004 11.3333 4.66671 12.6667 4.66671H14"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "book":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 7V21"
            stroke="#F3F6FC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 12H18.5"
            stroke="#F3F6FC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 8H18.5"
            stroke="#F3F6FC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 18C3.23478 18 2.98043 17.8946 2.79289 17.7071C2.60536 17.5196 2.5 17.2652 2.5 17V4C2.5 3.73478 2.60536 3.48043 2.79289 3.29289C2.98043 3.10536 3.23478 3 3.5 3H8.5C9.56087 3 10.5783 3.42143 11.3284 4.17157C12.0786 4.92172 12.5 5.93913 12.5 7C12.5 5.93913 12.9214 4.92172 13.6716 4.17157C14.4217 3.42143 15.4391 3 16.5 3H21.5C21.7652 3 22.0196 3.10536 22.2071 3.29289C22.3946 3.48043 22.5 3.73478 22.5 4V17C22.5 17.2652 22.3946 17.5196 22.2071 17.7071C22.0196 17.8946 21.7652 18 21.5 18H15.5C14.7044 18 13.9413 18.3161 13.3787 18.8787C12.8161 19.4413 12.5 20.2044 12.5 21C12.5 20.2044 12.1839 19.4413 11.6213 18.8787C11.0587 18.3161 10.2956 18 9.5 18H3.5Z"
            stroke="#F3F6FC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 12H8.5"
            stroke="#F3F6FC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 8H8.5"
            stroke="#F3F6FC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrows":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_374_60)">
            <path
              d="M8 1.33337V14.6667"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 12.6666L8 14.6666L6 12.6666"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6666 6L14.6666 8L12.6666 10"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.33337 8H14.6667"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33337 6L1.33337 8L3.33337 10"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 3.33337L8 1.33337L10 3.33337"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_374_60">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "globe":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_374_38)">
            <path
              d="M14.36 10H11.3333C10.9797 10 10.6406 10.1405 10.3905 10.3905C10.1405 10.6406 10 10.9797 10 11.3333V14.36"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66663 2.22668V3.33335C4.66663 3.86378 4.87734 4.37249 5.25241 4.74757C5.62749 5.12264 6.13619 5.33335 6.66663 5.33335C7.02025 5.33335 7.35939 5.47383 7.60943 5.72388C7.85948 5.97392 7.99996 6.31306 7.99996 6.66669C7.99996 7.40002 8.59996 8.00002 9.33329 8.00002C9.68691 8.00002 10.0261 7.85954 10.2761 7.60949C10.5261 7.35945 10.6666 7.02031 10.6666 6.66669C10.6666 5.93335 11.2666 5.33335 12 5.33335H14.1133"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.33337 14.6334V12C7.33337 11.6464 7.19289 11.3073 6.94284 11.0572C6.69279 10.8072 6.35366 10.6667 6.00003 10.6667C5.64641 10.6667 5.30727 10.5262 5.05722 10.2762C4.80718 10.0261 4.6667 9.687 4.6667 9.33337V8.66671C4.6667 8.31309 4.52622 7.97395 4.27618 7.7239C4.02613 7.47385 3.68699 7.33337 3.33337 7.33337H1.3667"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_374_38">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "flag":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.66663 10C2.66663 10 3.33329 9.33337 5.33329 9.33337C7.33329 9.33337 8.66663 10.6667 10.6666 10.6667C12.6666 10.6667 13.3333 10 13.3333 10V2.00004C13.3333 2.00004 12.6666 2.66671 10.6666 2.66671C8.66663 2.66671 7.33329 1.33337 5.33329 1.33337C3.33329 1.33337 2.66663 2.00004 2.66663 2.00004V10Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66663 14.6667V10"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "dot":
      return (
        <svg
          width="4"
          height="5"
          viewBox="0 0 4 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.5" width="4" height="4" rx="2" fill="#619ACF" />
        </svg>
      );
    case "pills":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_374_32)">
            <path
              d="M4.66671 8.00004C6.50766 8.00004 8.00004 6.50766 8.00004 4.66671C8.00004 2.82576 6.50766 1.33337 4.66671 1.33337C2.82576 1.33337 1.33337 2.82576 1.33337 4.66671C1.33337 6.50766 2.82576 8.00004 4.66671 8.00004Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3333 14.6667C13.1743 14.6667 14.6667 13.1743 14.6667 11.3333C14.6667 9.49238 13.1743 8 11.3333 8C9.49238 8 8 9.49238 8 11.3333C8 13.1743 9.49238 14.6667 11.3333 14.6667Z"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 11.3334H14.6667"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.30664 7.02664L7.02664 2.30664"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_374_32">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "search":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 17.5L13.9167 13.9166"
            stroke="#619ACF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      case "filters":
        return (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 3.33337H11.6667"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.33333 3.33337H2.5"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 10H10"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66667 10H2.5"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 16.6666H13.3333"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 16.6666H2.5"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.6667 1.66663V4.99996"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66666 8.33337V11.6667"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.3333 15V18.3333"
              stroke="#619ACF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
    default:
      return null;
  }
};

export default Icon;
