import profile from '../../assets/images/profile.png'


const Header = () => {
    return (
        <header className='container px-10 py-4 mx-auto'>

            <div className='flex flex-row justify-between items-center border-b-2 border-[#11111126] py-6'>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;