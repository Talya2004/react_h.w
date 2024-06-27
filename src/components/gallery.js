import {useState} from 'react';
export default function Gallery({data}) {
    const imagesList = data;
    // let index = 0;
    const [index, setIndex] = useState(0); 
    const [showMore, setShowMore] = useState(false);   
    function handleNext() {
       setIndex(index +1)
    }
    function handlePrev() {
        setIndex(index -1);
    }
    function handleShowMore(){
        setShowMore(!showMore);
    }
    
    let paint = imagesList[index];
    return (
        <div className='gallery'>
            <button className="btn" onClick={handlePrev}> Previous </button>
            <button className="btn" onClick={handleNext}> Next </button>

            <h2>
                <i>{paint.description} </i> 
                by {paint.artist}
            </h2>
            <h3>  
                ({index + 1} of {imagesList.length})
            </h3>
            <img className="main-img" src={paint.url} />
            <button className='btn' onClick={handleShowMore}>{showMore ? "Show less": "Show more"}</button>
            {showMore && "Bla Bla Bla"}            
        </div>
        );
    }
    