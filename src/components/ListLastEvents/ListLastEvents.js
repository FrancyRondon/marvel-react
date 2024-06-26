import { Card, Header } from "semantic-ui-react";
import "./ListLastEvents.scss";
import Container from "../Container/Container";
import useFetch from "../../hooks/useFetch";

export default function ListLastEvents() {

  
  const lastEventsFetch = useFetch(
    `${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`
  );
    console.log("aqui", lastEventsFetch);

  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>
      
      <Container bg="light">
        <Card.Group itemsPerRow={5}>
          <p>Los eventos...</p>
          <p>Los eventos...</p>
          <p>Los eventos...</p>
          <p>Los eventos...</p>
          <p>Los eventos...</p>
        </Card.Group>
      </Container>
    </div>
  );
}
