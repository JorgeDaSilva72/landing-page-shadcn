import * as React from "react";

function TwitchIcon(props: React.SVGProps<SVGSVGElement> | undefined) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-tabler mb-4 icons-tabler-filled icon-tabler-brand-discord"
    >
      <g fill="#9146FF">
        <path d="M4.5 1L2 3.5v9h3V15l2.5-2.5h2L14 8V1H4.5zM13 7.5l-2 2H9l-1.75 1.75V9.5H5V2h8v5.5z" />

        <path d="M11.5 3.75h-1v3h1v-3zM8.75 3.75h-1v3h1v-3z" />
      </g>
    </svg>
  );
}

export default TwitchIcon;
