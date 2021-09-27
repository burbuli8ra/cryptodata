/* eslint-disable no-extend-native */
import { withLoader } from 'hocs';
import { getCurrencyPrice } from 'utils/functions';
import Styled from './styled';

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const getLinkTitle = title => title.replace(/_/g, ' ').capitalizeFirstLetter();

const formatLinks = links => {
  const getLinkNode = (isEmpty, key, node) => {
    if (isEmpty) return null;

    return (
      <Styled.Link key={key}>
        <Styled.LinkTitle>
          {getLinkTitle(key)}:
        </Styled.LinkTitle>
        {node}
      </Styled.Link>
    );
  };

  const getLink = key => {
    let isEmpty = true;
    let node;

    // String values
    if (typeof links[key] === 'string') {
      let url;

      switch (key) {
        case 'facebook_username':
          url = `https://www.facebook.com/${links[key]}`;
          break;
        case 'twitter_screen_name':
          url = `https://twitter.com/${links[key]}`;
          break;
        default:
          url = links[key];
      }

      isEmpty = !links[key];
      node = (
        <Styled.LinkTexts>
          <a href={url} rel="noopener noreferrer" target="_blank">
            {url}
          </a>
        </Styled.LinkTexts>
      );
    }

    // Array values
    if (Array.isArray(links[key])) {
      const filteredLinks = links[key].filter(Boolean);

      isEmpty = !filteredLinks.length;
      node = (
        <Styled.LinkTexts>
          {filteredLinks.map((link, index) => (
            <>
              <a href={link} rel="noopener noreferrer" target="_blank">
                {link}
              </a>
              {index < (filteredLinks.length - 1) && ', '}
            </>
          ))}
        </Styled.LinkTexts>
      );
    }

    // Object values
    if (typeof links[key] === 'object' && !Array.isArray(links[key])) {
      isEmpty = !links[key] || !Object.keys(links[key]).length;

      if (!isEmpty) {
        node = <Styled.List>{formatLinks(links[key])}</Styled.List>;
      }
    }

    return getLinkNode(isEmpty, key, node);
  };

  return Object.keys(links).map(key => getLink(key));
};

const formatStatistics = statistics => {
  return (
    <Styled.List>
      {Object.keys(statistics).map(key => {
        if (!statistics[key]) return null;

        return (
          <li>
            <strong>{getLinkTitle(key)}:</strong>
            {' '}
            {statistics[key]}
          </li>
        )
      })}
    </Styled.List>
  )
};

const CoinInfo = ({ coin }) => {
  if (!Object.keys(coin).length) return null;

  return (
    <>
      <h2>{coin.name}</h2>
      <Styled.Info>
        <img alt={coin.id} src={coin.image} height={50} width={50} />
        <Styled.Price title="Current Price">
          {getCurrencyPrice(coin.currentPrice)}
        </Styled.Price>

        <Styled.Label>Description</Styled.Label>
        <Styled.Text
          dangerouslySetInnerHTML={{ __html: coin.description }}
        />

        {!!Object.keys(coin.links).length && (
          <>
            <Styled.Label>Links</Styled.Label>
            <Styled.List>{formatLinks(coin.links)}</Styled.List>
          </>
        )}

        {!!Object.keys(coin.socialStatistics).length && (
          <>
            <Styled.Label>Social Statistics</Styled.Label>
            {formatStatistics(coin.socialStatistics)}
          </>
        )}

        <Styled.Label>GitHub Statistics</Styled.Label>
        {formatStatistics(coin.gitHubStatistics)}

        <Styled.Label>Reputation Scores</Styled.Label>
        {formatStatistics(coin.reputation)}

        <Styled.Label>Price Change</Styled.Label>
        {formatStatistics(coin.priceChange)}

        <Styled.Label>Last 24 hours</Styled.Label>
        {formatStatistics(coin.lastDay)}

        <Styled.Label>From coin creation</Styled.Label>
        {formatStatistics(coin.fromCreation)}
      </Styled.Info>
    </>
  );
};

const CoinInfoWithLoader = withLoader(CoinInfo);

export { CoinInfoWithLoader as default, CoinInfo };
