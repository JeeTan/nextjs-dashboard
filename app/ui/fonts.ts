import { Inter, Lusitana } from 'next/font/google';

// 指定字体
export const inter = Inter({ subsets: ['latin'] });

// 辅助字体
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});