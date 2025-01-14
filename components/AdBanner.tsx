import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AdBannerProps {
  imageUrl: string;
  linkUrl: string;
  altText: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ imageUrl, linkUrl, altText }) => {
  return (
    <div className="my-4 text-center">
      <Link
        target="_blank"
        href={`${linkUrl} `}
        className=" transition-all  ml-1 "
        rel="noopener noreferrer"
      >
        <Image
          width={336}
          height={280}
          src={imageUrl}
          alt={altText}
          className="mx-auto max-w-full h-auto border border-primary hover:border-4"
        />
      </Link>
    </div>
  );
};

export default AdBanner;
