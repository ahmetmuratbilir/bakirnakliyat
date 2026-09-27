/**
 * Bölüm başlığı: üst etiket (eyebrow) + başlık + açıklama.
 * `as` ile başlık seviyesi korunur (varsayılan h2).
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Tag = "h2",
  id,
  onDark = false,
  action,
  className = "",
}) {
  const centered = align === "center";
  return (
    <div
      className={[
        "mb-10 sm:mb-12",
        centered ? "mx-auto max-w-2xl text-center" : "flex flex-col gap-5 md:flex-row md:items-end md:justify-between",
        className,
      ].join(" ")}
    >
      <div className={centered ? "" : "max-w-2xl"}>
        {eyebrow && (
          <p className={`eyebrow ${onDark ? "eyebrow-on-dark" : ""} ${centered ? "justify-center" : ""}`}>
            {eyebrow}
          </p>
        )}
        <Tag
          id={id}
          className={`mt-3 text-h2 font-extrabold ${onDark ? "text-white" : "text-navy-900"}`}
        >
          {title}
        </Tag>
        {description && (
          <p className={`mt-4 text-lead ${onDark ? "text-navy-100" : "text-muted"}`}>{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
