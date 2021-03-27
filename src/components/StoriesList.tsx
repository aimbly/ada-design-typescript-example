import { Flex, View, Text, withAccessibilityErrors } from 'ada-design';
import styled from 'styled-components';

const STORIES_LIST = [
  {
    image:
      'https://scontent.fplu17-1.fna.fbcdn.net/v/t1.0-9/96841357_10214480654924214_3014683664421224448_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHWSf-AUSrToLOYNwEV1j9DJH3LHM_elqkkfcscz96WqWGTDsujzq6YDum1LlC63Yk&_nc_ohc=mKw42wokQswAX_FNpVL&_nc_ht=scontent.fplu17-1.fna&oh=57d3c86835d90fde2b73e4644d784ea2&oe=60860BCD',
    alt: 'Story from Rafael Câmara',
    username: 'Rafael Câmara',
  },
  {
    image:
      'https://scontent.fplu17-1.fna.fbcdn.net/v/t1.0-9/20622253_1753824071312804_6202595082777611535_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE4en_LYQk2HFjzfPT_jXslV_DPf_4rnhBX8M9__iueEDhhKJnMjJLlncWrYG9gOTQ&_nc_ohc=SevNdeh1hacAX9LmNv-&_nc_ht=scontent.fplu17-1.fna&oh=4d87a1fe3df190d813d8ec455e78ff51&oe=6082DA8B',
    alt: 'Story from Marco Braga',
    username: 'Marco Braga',
  },
  {
    image:
      'https://scontent.fplu17-1.fna.fbcdn.net/v/t1.0-9/19420546_10207644258144392_2349911730659712874_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_eui2=AeEcBGM1hqIaZsHP8w3A8ub3WxPM0GaJkjhbE8zQZomSOJKIqiG3EgOsRt_8opIg9ms&_nc_ohc=tAd9QlkXvRQAX9Yf-YJ&_nc_ht=scontent.fplu17-1.fna&oh=5e231bc727f0873002a3b797bf8d50c6&oe=608623D5',
    alt: 'Story from Igor Caldeira',
    username: 'Igor Caldeira',
  },
  {
    image:
      'https://scontent.fplu17-1.fna.fbcdn.net/v/t1.0-9/66596555_2561558660555919_4062391612875997184_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeECf1fmzOvrj-bPOIl5WtbZh8izEgv8hwSHyLMSC_yHBDUpr4GaoKjRN2RSDctNwqg&_nc_ohc=WjIqXGF1zNsAX_ZE-a_&_nc_ht=scontent.fplu17-1.fna&oh=e880b6c1012be696cc6058b0ca8e882a&oe=608259DF',
    alt: 'Story from Flávia Gonzaga',
    username: 'Flávia Gonzaga',
  },
];

const StoriesList = () => {
  return (
    <Flex justifyContent="center" overflowX="scroll">
      {STORIES_LIST.map((story, storyIndex) => {
        return (
          <StyledStoryView key={storyIndex} position="relative" borderRadius={12} overflow="hidden" marginX={6}>
            <img src={story.image} height="160px" style={{ opacity: 0.6 }} />
            <Text position="absolute" fontWeight="bold" bottom={16} left={8}>
              {story.username}
            </Text>
          </StyledStoryView>
        );
      })}
    </Flex>
  );
};

const StyledStoryView = styled(View)`
  cursor: pointer;
  transition: filter 0.2s linear;

  &:hover {
    filter: brightness(1.1);
  }
`;

export default withAccessibilityErrors(StoriesList);
