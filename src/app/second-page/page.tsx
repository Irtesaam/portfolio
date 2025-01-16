import Gallery from "./masonry";


export default function SecondPage() {
    return (
        <main>
            <div>
                <img src='/projects/bg.png' alt='Gallery Image' className="absolute h-screen w-full -z-10" />
                <h1 className='text-6xl pt-5 flex items-center justify-center font-bold'>Gallery</h1>
            </div>
            <Gallery />
        </main>
    );
}
