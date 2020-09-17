import React from 'react'

export const Padding: React.FC<{top?: string}> = ({ top = '1rem', children }) => (
  <div style={{ paddingTop: top }}>
    {children}
  </div>
)
