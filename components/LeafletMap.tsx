import dynamic from "next/dynamic"; // Composant LeafletMap chargé dynamiquement
export const LeafletMap = dynamic(() => import("./AfriqueMap"), { ssr: false });
