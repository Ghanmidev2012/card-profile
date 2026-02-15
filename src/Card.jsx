import pic from './assets/WIN_20260215_11_23_49_Pro.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-img" src={pic} alt="card"height={120} />
            <h2 className='card-title'>GD12</h2>
            <p className='card'>My name is adam ghanmi i live in morocco i 13 years old.</p>
            <a href='https://ghanmidev.netlify.app/' target='_blank'>
            <button>my website</button>
            </a>
        </div>
    );
}

export default Card