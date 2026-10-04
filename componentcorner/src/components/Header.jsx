import './Header.css';

function Header ({ storeName, products, contact, about, cartCount }) {
    return (
        <div className='header'>
            <h1 className='storename'>{storeName}</h1>
                <nav className='nav-menu'>
                    <a href='#products' className='nav-item'>{products}</a>
                    <a href='#contact' className='nav-item'>{contact}</a>
                    <a href='#about' className='nav-item'>{about}</a>
                </nav>
            <div className='cart-container'>
                <span className="cart-icon">🛒</span>
                <span className="cart-badge">{cartCount}</span>
            </div>
        </div>
    );
}

export default Header;