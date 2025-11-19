import React from 'react';
export default function IconLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">{children}</a>
  );
}
