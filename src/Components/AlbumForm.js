import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumForm(props){

const {id} = useParams()
const { albumDetails } = props;

const [album , setAlbum] = useState({
    name:'', 
    artist:'', 
    release:'', 
    length:'',
     genre:'', 
     label :'',
});

const handleTextChange= (event) =>{
    setAlbum({...album,[event.target.id]: event.target.value})
}

useEffect(()=>{
    if(albumDetails){
        setAlbum(albumDetails)
    }
}, [id, albumDetails, props])

const handleSubmit = (event) =>{
    event.preventDefault()
    props.handleSubmit(album, id)
    if (albumDetails){
        props.toggleView()
    }
    setAlbum({
        name:'', 
        artist:'', 
        release:'', 
        length:'',
         genre:'', 
         label :'',
         songs_id: id,
    })
} 
return(
    <div>
        {props.children}
        <form onSubmit={handleSubmit}>
            <label htmlFor="albumName">Name</label>
            <input
            id="albumName"
            value={album.name}
            type= 'text'
            onChange={handleTextChange}
            placeholder="Album Name"
            required
            />
             <label htmlFor="artist">Artist</label>
            <input
            id="artist"
            value={album.artist}
            type= 'text'
            onChange={handleTextChange}
            placeholder="Artist"
            required
            />
             <label htmlFor="release">Release</label>
            <input
            id="release"
            value={album.release}
            type= 'text'
            onChange={handleTextChange}
            placeholder="Album Name"
            required
            />
        </form>
    </div>
)

}