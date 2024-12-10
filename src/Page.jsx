import {useState, useEffect} from 'react';

export default function Page(){
    const API_URL_PHOTOS = "https://api.unsplash.com/photos/?client_id=kmdedf9je7eDAm6dfUaNLmMEIY51RBKBGT6nEHBS2ZY";
    const API_URL_SEARCH = "https://api.unsplash.com/search/photos/?client_id=kmdedf9je7eDAm6dfUaNLmMEIY51RBKBGT6nEHBS2ZY";
    const [images, setImages] = useState();
    const [total, setTotal] = useState();
    const [page, setPage] = useState(1);
    const [keyword, setKeyword] = useState("");

    const searchImage = async (url) => {
        const response = await fetch(url);

        const data = await response.json();
        // eslint-disable-next-line no-console
        console.log(data);
        setImages(data);
        setTotal(data.total);
    };

    useEffect((e) => {
        if(keyword !== '' && keyword.length >= 3){    
            let url = `${API_URL_SEARCH}&page=${page}&query=${keyword}&per_page=${12}`;       
            searchImage(url);
        }else{
            //let url = `${API_URL_PHOTOS}&page=${page}&per_page=${12}`;
            let url = `${API_URL_SEARCH}&page=${page}&query=sky&per_page=${12}`;
            searchImage(url);
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, keyword]);

    return (
        <div className="mx-3 my-3">
            <div className='flex flex-wrap justify-items-center'>
                <label className='text-md text-gray-600'>
                    Find Images:
                    <input id='find' className='w-64 border border-gray-400 rounded-md ml-2 p-1'
                        onChange={(e) => {
                            setKeyword(e.target.value);
                            /*if (keyword.length > 3) {
                                searchImage(keyword);
                            }*/

                        }}
                    />
                </label>
            </div>

            <div className='text-lg text-blue-600 my-2'>Available Images {total}</div><hr></hr>
            <div className='grid md:grid-cols-3 sm:grid-cols-1'>
            {images ? (
                images.results.map((image) => (
                    <div key={image.id} className='flex w-fit my-3 mx-3 rounded-lg shadow-md'>
                        <img src={image.urls.thumb} alt='No Image' className='rounded-lg grow'></img>
                        <div className='flex flex-wrap mt-2'>
                            <div className='text-md text-red-800 ml-2'>{image.alt_description}</div>
                            <div className='text-sm text-stone-500 ml-2'>{image.description}</div>                            
                        </div>
                    </div>
                ))
            ) : (                
                    <div>No Data</div>                               
            )}
            
            </div>
            <div className='flex flex-row mt-2 ml-3 mb-3'>
                <button onClick={()=>{setPage(page-1)}} className='rounded-md bg-slate-300 p-1 mr-2 text-sm'>Prev</button>
                <button className='rounded-md bg-blue-300 p-1 mr-2 text-sm'>{page}</button>
                <button onClick={()=>{setPage(page+1)}} className='rounded-md bg-slate-300 p-1 text-sm'>Next</button>
            </div>
        </div>
    )
}