import phoneTexture2Large from '~/assets/images/model_images/two_phones/textToVideo1-large.jpg';
import phoneTexture2Placeholder from '~/assets/images/model_images/two_phones/textToVideo1-placeholder.jpg';
import phoneTexture2 from '~/assets/images/model_images/two_phones/textToVideo1.jpg';

import phoneTextureLarge from '~/assets/images/model_images/two_phones/textToVideo2-large.jpg';
import phoneTexturePlaceholder from '~/assets/images/model_images/two_phones/textToVideo2-placeholder.jpg';
import phoneTexture from '~/assets/images/model_images/two_phones/textToVideo2-login.jpg';

import laptopTexture from '~/assets/images/model_images/handkerchief-dark-large.jpg';
import laptopTextureLarge from '~/assets/images/model_images/handkerchief-dark-large.jpg';
import laptopTexturePlaceholder from '~/assets/images/model_images/handkerchief-dark-placeholder.jpg';

import { Model } from '~/components/model';
import { StoryContainer } from '../../../.storybook/story-container';
import { deviceModels } from './device-models';

export default {
  title: 'Model',
};

const modelStyle = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 };

export const Phone = () => (
  <StoryContainer padding={0}>
    <Model
      style={modelStyle}
      cameraPosition={{ x: 0, y: 0, z: 11.5 }}
      alt="Phone models"
      models={[
        {
          ...deviceModels.phone,
          position: { x: -0.6, y: 0.8, z: 0.1 },
          texture: {
            srcSet: `${phoneTexture} 375w, ${phoneTextureLarge} 750w`,
            placeholder: phoneTexturePlaceholder,
          },
        },
        {
          ...deviceModels.phone,
          position: { x: 0.6, y: -0.8, z: 0.4 },
          texture: {
            srcSet: `${phoneTexture2} 375w, ${phoneTexture2Large} 750w`,
            placeholder: phoneTexture2Placeholder,
          },
        },
      ]}
    />
  </StoryContainer>
);

export const Laptop = () => (
  <StoryContainer padding={0}>
    <Model
      style={modelStyle}
      cameraPosition={{ x: 0, y: 0, z: 8 }}
      alt="Laptop model"
      models={[
        {
          ...deviceModels.laptop,
          position: { x: 0, y: 0, z: 0 },
          texture: {
            srcSet: `${laptopTexture} 800w, ${laptopTextureLarge} 1920w`,
            placeholder: laptopTexturePlaceholder,
          },
        },
      ]}
    />
  </StoryContainer>
);
