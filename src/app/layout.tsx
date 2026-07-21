import type { Metadata } from 'next'; import './style.css';
export const metadata:Metadata={title:'Manashjyoti Bora — Creative Frontend Engineer',description:'An Android-native full stack developer from Assam, India.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
