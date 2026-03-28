"use client";

import Link from "next/link";

const ProductItem = ({ item, index, marginBottom, moreType }) => {
  
  return (
    <>   
      <div className={`sb-menu-item sb-mb-${marginBottom}`}>
        <Link href={`/product`} className="sb-cover-frame">
            <img src={item.image} alt={item.title} />
            <div dangerouslySetInnerHTML={{__html : item.badge}} />
        </Link>
        <div className="sb-card-tp">
            <h4 className="sb-card-title"><Link href={`/product`}>{item.title}</Link></h4>
            <div className="sb-price"><sub>{item.currency}</sub> {item.price}</div>
        </div>
        <div className="sb-description">
            <p className="sb-text sb-mb-15">
                {item.text}
            </p>
        </div>
        <div className="sb-card-buttons-frame">
          {/* button */}
          {moreType != 2 ? (
          <Link href="/product" className="sb-btn sb-btn-2 sb-btn-gray sb-btn-icon sb-m-0">
            <span className="sb-icon">
              <img src="/img/ui/icons/arrow.svg" alt="icon" />
            </span>
          </Link>
          ) : (
          <Link href="/product" className="sb-btn sb-btn-gray">
            <span className="sb-icon">
              <img src="/img/ui/icons/arrow.svg" alt="icon" />
            </span>
            <span>Details</span>
          </Link>
          )}
          {/* button end */}
          {/* Order on Wolt button */}
          <a 
            href="https://wolt.com/en/pol/wroclaw/restaurant/kasturi-kuchnia-indyjska" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sb-btn"
          >
            <span className="sb-icon">
              <img src="/img/ui/icons/cart.svg" alt="icon" />
            </span>
            <span>Order on Wolt</span>
          </a>
          {/* button end */}
        </div>
      </div>
    </>
  );
};
export default ProductItem;