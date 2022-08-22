interface PixelIconProps {
  name: string;
  width?: number;
}

export default function PixelIcon({ name, width = 30 }: PixelIconProps) {
  switch (name) {
    case "eye":
      return (
        <svg
          width={`${width}px`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {" "}
          <path
            d="M8 6h8v2H8V6zm-4 4V8h4v2H4zm-2 2v-2h2v2H2zm0 2v-2H0v2h2zm2 2H2v-2h2v2zm4 2H4v-2h4v2zm8 0v2H8v-2h8zm4-2v2h-4v-2h4zm2-2v2h-2v-2h2zm0-2h2v2h-2v-2zm-2-2h2v2h-2v-2zm0 0V8h-4v2h4zm-10 1h4v4h-4v-4z"
            fill="currentColor"
          />{" "}
        </svg>
      );
    case "eye-closed":
      return (
        <svg
          width={`${width}px`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {" "}
          <path
            d="M0 7h2v2H0V7zm4 4H2V9h2v2zm4 2v-2H4v2H2v2h2v-2h4zm8 0H8v2H6v2h2v-2h8v2h2v-2h-2v-2zm4-2h-4v2h4v2h2v-2h-2v-2zm2-2v2h-2V9h2zm0 0V7h2v2h-2z"
            fill="currentColor"
          />{" "}
        </svg>
      );
    default:
      return (
        <svg
          width={`${width}px`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {" "}
          <path
            d="M5 3H3v2h2V3zm4 0H7v2h2V3zM7 19h2v2H7v-2zM5 7H3v2h2V7zm14 0h2v2h-2V7zM5 11H3v2h2v-2zm14 0h2v2h-2v-2zM5 15H3v2h2v-2zm14 0h2v2h-2v-2zM5 19H3v2h2v-2zm6-16h2v2h-2V3zm2 16h-2v2h2v-2zm2-16h2v2h-2V3zm2 16h-2v2h2v-2zm2-16h2v2h-2V3zm2 16h-2v2h2v-2z"
            fill="currentColor"
          />{" "}
        </svg>
      );
  }
}
