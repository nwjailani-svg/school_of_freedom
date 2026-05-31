import React from 'react';

// True for absolute http(s) URLs, which should open in a new tab.
export const isExternal = (href) =>
  typeof href === 'string' && /^https?:\/\//i.test(href);

// Anchor styled as a primary/secondary button.
// - Pass `label` for a plain text button, or `children` for custom content
//   (e.g. an icon next to the label).
// - External links automatically get target/rel set.
const LinkButton = ({
  label,
  children,
  href = '#',
  variant = 'primary',
  className = '',
  ...props
}) => {
  const external = isExternal(href);
  const variantClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${variantClass} ${className}`.trim()}
      aria-label={label}
      {...props}
    >
      {children ?? label}
    </a>
  );
};

export default LinkButton;
