import styled from '@emotion/styled/macro';
import { colors } from 'theme';

const flexContainer = `
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  color: ${colors.silver};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
  text-decoration: underline;
`;
Label.displayName = 'Label';

const Link = styled.li``;
Link.displayName = 'Link';

const LinkTitle = styled.div`
  display: inline-block;
  font-weight: 700;
  padding-right: 4px;
`;
LinkTitle.displayName = 'LinkTitle';

const List = styled.ul`
  ${flexContainer};
  justify-content: center;
  margin: 0;
  padding: 0;

  ul {
    margin-left: 32px;
  }
`;
List.displayName = 'List';

const LinkTexts = styled.div`
  display: inline-block;
  
  a {
    color: inherit;
  }
`
LinkTexts.displayName = 'LinkTexts';

const Price = styled.div`
  cursor: default;
  font-size: 18px;
`;
Price.displayName = 'Price';

const Text = styled.div`
  a {
    color: inherit;
  }
`;
Text.displayName = 'Text';

const Info = styled.div`
  ${flexContainer};
  
  ${Label} {
    margin-top: 48px;
  }

  ${Price} {
    align-self: center;
    margin-top: 8px;
  }
  
  img {
    align-self: center;
  }
`;
Info.displayName = 'Info';

export default {
  Label,
  Link,
  LinkTexts,
  LinkTitle,
  List,
  Info,
  Price,
  Text
};
