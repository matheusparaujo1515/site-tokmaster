import React from 'react';

export default function Logo({ className = "" }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/images/logo.png"
        alt="TokMaster Instituto de Beleza"
        style={{ height: '52px', maxHeight: '56px', width: 'auto', display: 'block', objectFit: 'contain' }}
        className={className}
      />
    </div>
  );
}
