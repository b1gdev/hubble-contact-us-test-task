import Container from "../components/Container";
import {
  ListItem,
  ListItemText,
  ListItemTitle,
  ListItemLink,
  ListStack,
  ListWrapper,
} from "../components/List";

const List = ({ items }) => {
  return (
    <ListWrapper>
      <Container>
        <ListStack>
          {items.map(({ id, title, linkText, linkPath, text }) => (
            <ListItem key={id}>
              <ListItemTitle>{title}</ListItemTitle>
              <ListItemLink href={linkPath}>{linkText}</ListItemLink>
              <ListItemText dangerouslySetInnerHTML={{ __html: text }} />
            </ListItem>
          ))}
        </ListStack>
      </Container>
    </ListWrapper>
  );
};

export default List;
