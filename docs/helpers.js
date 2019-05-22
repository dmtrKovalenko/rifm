import * as React from 'react';

export const EmbedCodesandbox = ({ href }) => {
  const iframeStyle = {
    width: '100%',
    height: 500,
    border: 0,
    borderRadius: 4,
    overflow: 'hidden',
  };
  return (
    <iframe
      src={`https://codesandbox.io/embed/${href}?fontsize=14`}
      title="istarkob/rifm: case-enforcement"
      style={iframeStyle}
      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    />
  );
};
