export default function Info() {
    return (
        <>
            <header>
                <img src="/images/picture-of-me.png" />
                <div className="titles">
                    <h1 className="name">Octavio Camacho</h1>
                    <p className="job">Fullstack Developer</p>
                    <a href="#" className="website">octaviocamacho.website</a>
                </div>
                <div className="my-links">
                    <a className="email"><i class="fa-solid fa-envelope"></i>Email</a>
                    <a className="linkedin"><i class="fa-brands fa-square-linkedin"></i>LinkedIn</a>
                </div>
            </header>
        </>
        
    );
}