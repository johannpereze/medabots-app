import { CSSProperties } from "react";

interface PixelIconProps {
  name: string;
  width?: number;
  style?: CSSProperties;
}

export default function PixelIcon({ name, width = 30, style }: PixelIconProps) {
  switch (name) {
    case "eye":
      return (
        <svg
          width={`${width}px`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          viewBox="0 0 24 24"
        >
          <path
            d="M8 6h8v2H8V6zm-4 4V8h4v2H4zm-2 2v-2h2v2H2zm0 2v-2H0v2h2zm2 2H2v-2h2v2zm4 2H4v-2h4v2zm8 0v2H8v-2h8zm4-2v2h-4v-2h4zm2-2v2h-2v-2h2zm0-2h2v2h-2v-2zm-2-2h2v2h-2v-2zm0 0V8h-4v2h4zm-10 1h4v4h-4v-4z"
            fill="currentColor"
          />
        </svg>
      );
    case "eye-closed":
      return (
        <svg
          width={`${width}px`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          viewBox="0 0 24 24"
        >
          <path
            d="M0 7h2v2H0V7zm4 4H2V9h2v2zm4 2v-2H4v2H2v2h2v-2h4zm8 0H8v2H6v2h2v-2h8v2h2v-2h-2v-2zm4-2h-4v2h4v2h2v-2h-2v-2zm2-2v2h-2V9h2zm0 0V7h2v2h-2z"
            fill="currentColor"
          />
        </svg>
      );
    case "moon":
      return (
        <svg
          width={`${width}px`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          style={style}
          viewBox="0 0 24 24"
        >
          <path d="M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4h2v4h2v-8h-2v2h-2v2Zm-6 0v2h6v-2h-6Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Z" />
        </svg>
      );
    case "sun-alt":
      return (
        <svg
          fill="currentColor"
          width={`${width}px`}
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          viewBox="0 0 24 24"
        >
          <path d="M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg
          fill="currentColor"
          width={`${width}px`}
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          viewBox="0 0 24 24"
        >
          <path
            d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z"
            fill="currentColor"
          />
        </svg>
      );
    case "info-box":
      return (
        <svg
          fill="currentColor"
          width={`${width}px`}
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          viewBox="0 0 24 24"
        >
          <path
            d="M3 3h2v18H3V3zm16 0H5v2h14v14H5v2h16V3h-2zm-8 6h2V7h-2v2zm2 8h-2v-6h2v6z"
            fill="currentColor"
          />
        </svg>
      );
    case "user":
      return (
        <svg
          fill="currentColor"
          width={`${width}px`}
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          viewBox="0 0 24 24"
        >
          <path
            d="M15 2H9v2H7v6h2V4h6V2zm0 8H9v2h6v-2zm0-6h2v6h-2V4zM4 16h2v-2h12v2H6v4h12v-4h2v6H4v-6z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return (
        <svg
          width={`${width}px`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={style}
          viewBox="0 0 24 24"
        >
          <path
            d="M5 3H3v2h2V3zm4 0H7v2h2V3zM7 19h2v2H7v-2zM5 7H3v2h2V7zm14 0h2v2h-2V7zM5 11H3v2h2v-2zm14 0h2v2h-2v-2zM5 15H3v2h2v-2zm14 0h2v2h-2v-2zM5 19H3v2h2v-2zm6-16h2v2h-2V3zm2 16h-2v2h2v-2zm2-16h2v2h-2V3zm2 16h-2v2h2v-2zm2-16h2v2h-2V3zm2 16h-2v2h2v-2z"
            fill="currentColor"
          />
        </svg>
      );
  }
}
