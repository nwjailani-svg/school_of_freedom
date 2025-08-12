import React from 'react';
import NavLinkItem from './navlinkitem';
import ActionLink from './actionlinks';

export default function DesktopNav({ items, actions, onNavClick }) {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {items.map((item) => (
  <Link
    key={item.name}
    to={item.path}
    onClick={() => scrollToTarget(item.id)}
    className={`font-medium transition-colors duration-300 ${
      isActive(item.path)
        ? 'text-gold border-b-2 border-gold'
        : 'text-navy hover:text-gold'
    }`}
  >
    {item.name}
  </Link>
))}
      <div className="flex space-x-4">
        <ActionLink href={actions.donate.href} label={actions.donate.label} />
        <ActionLink href={actions.petition.href} label={actions.petition.label} variant="secondary" />
      </div>
    </div>
  );
}
