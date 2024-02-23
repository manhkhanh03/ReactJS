import React from 'react'

export default function Loading({ className = ""}) {
  return (
      <div className={`spinner-border ${className}`} role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
  );
}
