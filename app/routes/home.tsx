import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div>
      <img
        src="/hello.png"
        alt="Hello, React Route v7!"
        className="text-center mx-auto"
      />

      <Welcome />
    </div>
  );
}
