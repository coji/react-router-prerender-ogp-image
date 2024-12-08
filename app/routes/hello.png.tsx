import { ImageResponse } from '@vercel/og';

export const loader = () => {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Hello React Router v7
      </div>
    ),
    {
      width: 300,
      height: 100,
    }
  );
};
