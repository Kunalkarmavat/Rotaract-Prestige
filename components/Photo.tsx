import { img } from "@/lib/site";

type Props = {
  file: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

// Plain <img> on purpose: photos are hosted outside the app (old site or /public),
// so there is no image-loader config to maintain.
export default function Photo({ file, alt, className, priority }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={img(file)}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
