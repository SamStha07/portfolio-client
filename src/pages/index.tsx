import type { NextPage } from 'next';
import ButtonComponent from '@/components/button.component';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <ButtonComponent />
    </div>
  );
};

export default Home;
