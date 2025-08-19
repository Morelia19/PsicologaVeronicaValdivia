import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="bg-white px-[161px] py-[13px] font-sans">
            <div className='flex flex-row justify-between items-center'>
                <Link to="/" className='text-[30px] hover:opacity-80 transition-opacity'>
                    Mentes<span className='font-bold text-[#6ABFAA]'>Geniales</span>
                </Link>

                <nav className='flex gap-8'>
                    <Link to="/" className='text-gray-800 hover:text-[#6ABFAA] transition-colors'>Inicio</Link>
                    <Link to="/servicios" className='text-gray-800 hover:text-[#6ABFAA] transition-colors'>Servicios</Link>
                    <Link to="/sobre-mi" className='text-gray-800 hover:text-[#6ABFAA] transition-colors'>Sobre mí</Link>
                </nav>

                <Link 
                    to="/contacto" 
                    className="bg-[#6ABFAA] hover:bg-[#5aaa96] text-white font-medium py-2 px-6 rounded-[18px] transition-colors"
                >
                    Contáctame
                </Link>
            </div>
        </header>
    )
}