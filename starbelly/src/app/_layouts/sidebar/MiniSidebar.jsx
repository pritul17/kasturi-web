import AppData from "@data/app.json";
import Link from "next/link";

const MiniSidebar = () => {
    return (
        <>
            <div className="sb-infobar-content">
                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>Contact</h4><i className="fas fa-arrow-down"></i>
                </div>
                <ul className="sb-list sb-mb-30">
                    <li>
                        <b>Address:</b>
                        <span>Komuny Paryskiej 45/2U,<br/>50-451 Wrocław, Poland</span>
                    </li>
                    <li>
                        <b>Working hours:</b>
                        <span>Mon-Sun: 12:00 - 22:00</span>
                    </li>
                    <li>
                        <b>Phone:</b>
                        <span><a href="tel:+48123456789" style={{color: 'inherit', textDecoration: 'none'}}>+48 123 456 789</a></span>
                    </li>
                    <li>
                        <b>Email:</b>
                        <span><a href="mailto:info@kasturi.pl" style={{color: 'inherit', textDecoration: 'none'}}>info@kasturi.pl</a></span>
                    </li>
                </ul>
                
                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>Our Specialties</h4><i className="fas fa-arrow-down"></i>
                </div>
                <ul className="sb-list sb-mb-30">
                    <li><i className="fas fa-check" style={{color: '#FEB600', marginRight: '10px'}}></i>Authentic Indian Cuisine</li>
                    <li><i className="fas fa-check" style={{color: '#FEB600', marginRight: '10px'}}></i>Tandoori Specialties</li>
                    <li><i className="fas fa-check" style={{color: '#FEB600', marginRight: '10px'}}></i>Vegetarian & Vegan Options</li>
                    <li><i className="fas fa-check" style={{color: '#FEB600', marginRight: '10px'}}></i>Natural Ingredients</li>
                    <li><i className="fas fa-check" style={{color: '#FEB600', marginRight: '10px'}}></i>Mała Czarna Coffee</li>
                </ul>

                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>Quick Links</h4><i className="fas fa-arrow-down"></i>
                </div>
                <ul className="sb-list sb-mb-30">
                    <li><Link href="/menu" style={{color: '#3F4F2A', textDecoration: 'none'}}>View Full Menu</Link></li>
                    <li><Link href="/reservation" style={{color: '#3F4F2A', textDecoration: 'none'}}>Make a Reservation</Link></li>
                    <li><Link href="/about" style={{color: '#3F4F2A', textDecoration: 'none'}}>About Us</Link></li>
                    <li><a href="https://wolt.com/en/pol/wroclaw/restaurant/kasturi-kuchnia-indyjska" target="_blank" rel="noopener noreferrer" style={{color: '#3F4F2A', textDecoration: 'none'}}>Order on Wolt</a></li>
                </ul>

                <hr />
                
                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>Why Choose Kasturi?</h4><i className="fas fa-arrow-down"></i>
                </div>
                <div className="sb-mb-30">
                    <p className="sb-text sb-text-sm" style={{lineHeight: '1.6'}}>
                        Experience the rich aromas of tradition with authentic Indian cuisine in the heart of Wrocław. 
                        We use only natural ingredients and traditional cooking methods to bring you the true taste of India.
                    </p>
                </div>
            </div>
            
            <div className="sb-info-bar-footer">
                <ul className="sb-social">
                    {AppData.social.map((item, key) => (
                    <li key={`mini-sidebar-social-item-${key}`}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" title={item.title}>
                            <i className={item.icon}></i>
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default MiniSidebar;