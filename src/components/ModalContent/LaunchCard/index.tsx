import styled from 'styled-components';
import { PastLaunchDetails } from '../../../store/reducer/pastLaunchesReducer/type';

interface LaunchCardProps {
  pastLaunch: PastLaunchDetails;
}

const Heading = styled.h3`
  margin-top: 20px;
  margin-bottom: 5px;
`;

const LinksArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const LaunchCard = (props: LaunchCardProps) => {
  const { pastLaunch } = props;

  return (
    <div>
      <h2>
        {pastLaunch.mission_name}({pastLaunch.id})
      </h2>
      <Heading>Launched On</Heading>
      <div>{new Date(pastLaunch.launch_date_local).toDateString()}</div>

      <Heading>Site</Heading>
      <div>{pastLaunch.launch_site.site_name_long}</div>

      <Heading>Rocket</Heading>
      <div>{pastLaunch.rocket.rocket_name}</div>

      <Heading>Ships</Heading>
      {pastLaunch.ships.length > 0 ? (
        pastLaunch.ships.map((shipDetail) => (
          <div key={shipDetail.name}>
            <a href={shipDetail.image} target="_blank" rel="noreferrer">
              {shipDetail.name}
            </a>
            ({shipDetail.home_port})
          </div>
        ))
      ) : (
        <div>None</div>
      )}

      <Heading>Links</Heading>
      <LinksArea>
        {pastLaunch.links.article_link !== null && (
          <a
            href={pastLaunch.links.article_link}
            target="_blank"
            rel="noreferrer"
          >
            Read here &gt;&gt;
          </a>
        )}
        {pastLaunch.links.video_link !== null && (
          <a
            href={pastLaunch.links.video_link}
            target="_blank"
            rel="noreferrer"
          >
            Watch here &gt;&gt;
          </a>
        )}
        {!pastLaunch.links.article_link && !pastLaunch.links.video_link && (
          <div>None</div>
        )}
      </LinksArea>
    </div>
  );
};

export default LaunchCard;
