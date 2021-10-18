import React, { useState, useEffect} from 'react';
import styled from '@emotion/styled';

// import InstagramEmbed from 'react-instagram-embed';

const Card =styled.img`
justify-self: center;
width: 300px;
height: 300px;
background-position: center;
background-repeat: no-repeat;
`

const Grid = styled.div`
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`



const url = 'https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":40346689}';

const IG = () => {

    const [insta, setInsta] = useState([]);

    useEffect(()=> {
        fetch(url)
            .then((data) => data.json())
            .then((data) => {
                const picArray = data.data.user.edge_owner_to_timeline_media.edges;
                setInsta(picArray);
            });
    }, [])


    return (
        <div>
            <Grid>
                {insta.map((photo) => (
                    <Card src={photo.node.display_url} key={photo.node.id} />
                ))}
            </Grid>
        </div>
    );
};

export default IG



