import '../styles/Header.css'

export const Header = ({ title }) => {
    return (
        <header className='header-container'>
            <nav>
                <div className='header-title'>
                    <a href='#!' className='title'>{title}</a>
                </div>
            </nav>
        </header>
    )
}

