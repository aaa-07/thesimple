import Header from '@/components/organisms/header';
import HomeTemplate from '@/components/templates/home';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <HomeTemplate />
    </div>
  );
}
