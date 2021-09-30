import styled from 'styled-components';

export const Container = styled.div`
  padding: 100px 180px;  
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

  /* background: #000; */
`;
