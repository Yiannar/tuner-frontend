import axios from "axios";
import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from "react-router-dom"
import Albums from './Albums'
const API = process.env.REACT_APP_API_URL;


function SongDetails () {
    const {id}= useParams()
    const [song, setSong] = useState([])
    const navigate = useNavigate()

    const deleteSong = ()=>{
        axios
        .delete(`${API}/songs/${id}`)
        .then(
            ()=>{
                navigate(`/songs`)
            }, 
            (error) => console.error(error)
        )
        .catch((c)=> console.warn("catch", c))
    };

    const handleDelete = ()=>{
        deleteSong();
    }

    useEffect(()=>{
        axios 
        .get(`${API}/songs/${id}`)
        .then((response)=>{
            console.log(response.data)
            setSong(response.data)
        })
        .catch((c)=>{
            console.warn("catch", c)
        })
    }, [id]);

    return (
        <article>
            <h3>{song.is_favortie ? <span>⭐️</span>: null} {song.name}</h3>
            <h5>
                <span>
                    <a>{song.name}</a>
                </span>
            </h5>
            <h6>{song.artist}</h6>
            <p>{song.album}</p>
            <div className="showNav">
                <div>
                    <Link to={`/songs`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/songs/id/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
                        <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            
        </article>
    );
};

export default SongDetails;