import React from "react";

class MovieList extends React.Component {

    render() {
        //console.log("getdataget==" + this.props.movieList.length)
        let movieListData = this.props.movieList.map((result, key) => {
            //console.log("key=" + key)
            //console.log(result.page.content_items.content)
            return result.page.content_items.content.map((item, index) => {
                console.log(item.name)
                return (
                    <div key={index} class=" ">
                        <div className="img">
                            <img className="w-20" src={`Slices/${item.posterimage}`} alt={item.name} />
                        </div>
                        <div className="caption">
                            <p>{item.name}</p>
                        </div>

                    </div>



                )
            });
        });
        return (
            <div className="inline-grid grid-cols-3 gap-x-4 " >
                {movieListData}
            </div >
        )
    }
}

export default MovieList;


