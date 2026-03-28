"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';

const DefaultFooter = () => {
  const asPath = usePathname();

  return (
    <>
        {/* footer */}
        <footer>
            <div className="container">
                <div className="sb-footer-frame">
                    <Link href="/" className="sb-logo-frame">
                        {/* logo img */}
                        <img 
                            src={AppData.header.logo.image} 
                            alt={AppData.header.logo.alt}
                            style={{
                                maxWidth: '60px',
                                maxHeight: '60px',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </Link>
                    <ul className="sb-social" style={{ gap: '15px' }}>
                        {AppData.social.map((item, key) => (
                        <li key={`footer-social-item-${key}`}>
                            <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title={item.title}
                                style={{
                                    fontSize: '24px',
                                    padding: '15px',
                                    minWidth: '54px',
                                    minHeight: '54px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <i className={item.icon}></i>
                            </a>
                        </li>
                        ))}
                    </ul>
                    <div className="sb-copy" style={{ fontSize: '15px', padding: '10px 0' }}>
                        {AppData.footer.copy}
                    </div>
                </div>
            </div>
        </footer>
        {/* footer end */}
    </>
  );
};
export default DefaultFooter;