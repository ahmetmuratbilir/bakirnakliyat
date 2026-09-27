import Link from "next/link";

const VARIANTS = {
  primary: "bg-copper-600 text-white shadow-sm hover:bg-copper-700",
  navy: "bg-navy-900 text-white shadow-sm hover:bg-navy-800",
  whatsapp: "bg-whatsapp text-white shadow-sm hover:bg-whatsapp-dark",
  outline: "bg-white text-navy-900 ring-1 ring-inset ring-line-strong hover:ring-navy-900",
  light: "bg-white text-navy-900 shadow-sm hover:bg-navy-50",
  ghostDark: "text-white ring-1 ring-inset ring-white/35 hover:bg-white/10 hover:ring-white/60",
};

const SIZES = {
  md: "min-h-11 px-4 text-[0.9375rem] gap-2",
  lg: "min-h-13 px-6 text-base gap-2.5",
};

/**
 * Tek buton bileşeni. href "tel:", "mailto:" veya "http" ile başlıyorsa <a>,
 * iç sayfaysa next/link kullanır. Dokunma alanı en az 44px.
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconRight: IconRight,
  nowrap = true,
  className = "",
  children,
  ...rest
}) {
  const classes = [
    "inline-flex items-center justify-center rounded-btn font-semibold",
    nowrap ? "whitespace-nowrap" : "py-2.5 text-center",
    "transition-[background-color,box-shadow,color,translate] duration-200 active:translate-y-px",
    VARIANTS[variant],
    SIZES[size],
    className,
  ].join(" ");

  const content = (
    <>
      {Icon && <Icon aria-hidden="true" className="size-5 shrink-0" strokeWidth={2} />}
      <span>{children}</span>
      {IconRight && <IconRight aria-hidden="true" className="size-4.5 shrink-0" strokeWidth={2.25} />}
    </>
  );

  const isExternal = /^https?:\/\//.test(href);
  if (isExternal || /^(tel|mailto):/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
