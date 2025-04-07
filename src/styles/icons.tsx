export interface IconProps {
    name: string;
    className?: string;
  }
  const Icon = ({ name }: IconProps) => {
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
  
      default:
        return null;
    }
  };
  
  export default Icon;