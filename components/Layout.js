"use client";
import { useRouter } from 'next/navigation';

export default function Layout({ children }) {
  const router = useRouter();
  
  return (
    <div>
      <main>
        {children}
      </main>
    </div>
  );
}