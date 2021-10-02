import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 100px;  
`;


export const Img = styled.img`
  height: 100px;
  clip-path: circle();  
`;


export const Header = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  color: #555;

  p {
    font-weight: normal;
  }
  span {
    font-size: 22px;
  }
`;

export const Playlists = styled.div`
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

`;

export const Playlist = styled.div`

`;

export const Infos = styled.div`
  display: flex;

  h3 {
    font-size: 22px;
    color: #333;
  }

  p {
    font-weight: normal;
  }

`;

export const PlaylistButton = styled.button`
  border: none;
  width: 90%;

`;


export const Content = styled.div`
  display: flex;
`;

export const Musics = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 80px 0;
  display: flex;
  width: 40%;
`;

export const Music = styled.div`
  display: flex;
  color: #FFF;
`;


