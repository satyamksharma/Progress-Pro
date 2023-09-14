import MainNav from "../components/MainNav";
import Main_Pic from "../assets/images/main.png";

function Home() {
    return (
        <>
            <MainNav />
            <section className=' mt-14 w-screen '>
                <div className=' flex'>
                    <div className=' flex'>
                        <h1 className=' flex justify-center items-center'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nam
                            quae repudiandae at, aliquam amet officia fugiat quo dolor? Eaque
                            tempore facilis tempora mollitia sapiente iure ratione nostrum atque.
                            Atque?
                        </h1>
                    </div>
                    <div>
                        <img
                            src={Main_Pic}
                            alt='main-img'
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
