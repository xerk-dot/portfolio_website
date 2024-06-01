



import volkiharBackgroundLarge from '~/assets/images/football/v0002.mp4';
import volkiharBackgroundPlaceholder from '~/assets/images/football/v0001.mp4';
import volkiharBackground from '~/assets/images/football/v0001.mp4';


import volkiharBannerLarge from '~/assets/images/new_american_vineyard/0001.png';
import volkiharBannerPlaceholder from '~/assets/images/new_american_vineyard/0001.png';
import volkiharBanner from '~/assets/images/new_american_vineyard/0001.png';
import volkiharBookLarge from '~/assets/images/new_american_vineyard/0001.png';
import volkiharBookPlaceholder from '~/assets/images/new_american_vineyard/0001.png';
import volkiharBook from '~/assets/images/new_american_vineyard/0001.png';
import volkiharEnderalLarge from '~/assets/images/new_american_vineyard/0001.png';
import volkiharEnderalLogoLarge from '~/assets/images/new_american_vineyard/0001.png';
import volkiharEnderalLogoPlaceholder from '~/assets/images/new_american_vineyard/0001.png';
import volkiharEnderalLogo from '~/assets/images/new_american_vineyard/0001.png';
import volkiharEnderalPlaceholder from '~/assets/images/new_american_vineyard/0001.png';
import volkiharEnderal from '~/assets/images/new_american_vineyard/0001.png';
import volkiharSlide1Large from '~/assets/images/new_american_vineyard/0001.png';
import volkiharSlide1 from '~/assets/images/new_american_vineyard/0001.png';
import volkiharSlide2Large from '~/assets/images/new_american_vineyard/0001.png';
import volkiharSlide2 from '~/assets/images/new_american_vineyard/0001.png';
import volkiharSlide3Large from '~/assets/images/new_american_vineyard/0001.png';
import volkiharSlide3 from '~/assets/images/new_american_vineyard/0001.png';
import volkiharSlidePlaceholder from '~/assets/images/new_american_vineyard/0001.png';
import { Button } from '~/components/button';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { VolkiharLogo } from './volkihar-logo';
import styles from './volkihar-knight.module.css';



















const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const Armor = lazy(() => import('./armor').then(module => ({ default: module.Armor })));

const title = 'text-to-video workflows';
const description =
  'are needed. models alone wont manufacture your perfect gonzo-film. you need to refine your craft and consider exploring:\n\nPreprocessing: how are you preparing the input for the model?\n\nModel Selection and Control: Are you using different pipelines for specific models, or have you created a flexible pipeline that adapts to various models? How do you control model parameters like video length, style, or content detail within the pipeline?\n\nPostprocessing: What happens to the generated video after the model outputs it? How do you apply postproduction to refine the final product?\n\nBy examining these aspects of your pipeline configuration, we can gain valuable insights into how to tailor text-to-video models for specific needs and achieve the best possible results.';

const roles = ['Stable Diffusion, Midjourney (ComfyUI)', 'Python, Jupyter Notebook', 'Adobe Creative Cloud'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};



export function VolkiharKnight() {
  return (
    <Fragment>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.2}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        {/*linkLabel="Get the mod"
      url="https://www.nexusmods.com/skyrimspecialedition/mods/4806/"*/}




        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          
          
            

          </ProjectSectionContent>
        </ProjectSection>
        {/** 
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.armor}>
              <Suspense>
                <Armor alt="3D model of the Volkihar Knight armor" />
              </Suspense>
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>Armor design</ProjectSectionHeading>
              <ProjectSectionText>
                As a player I noticed there weren’t any heavy armor options for the
                Volkihar faction. This kinda sucks when you’ve specialised in heavy armor
                and decide to join the faction and discover they all wear light armor.
              </ProjectSectionText>
              <ProjectSectionText>
                My solution was to create a mod that combines meshes from the Volkihar
                faction armor with heavy plate armor. The mod builds upon textures and
                meshes from the base game, so it unifies with Skyrim’s overall aesthetic.
                I combined and modified the meshes in 3DS Max. To establish a cohesive
                design across the set, I edited existing textures, and designed custom
                textures in Photoshop.
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        */}
        <ProjectSection>
          <ProjectSectionContent>
            <Suspense>
              <Carousel
                placeholder={volkiharSlidePlaceholder}
                images={[
                  {
                    srcSet: `${volkiharSlide1} 960w, ${volkiharSlide1Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'A female character wearing the black coloured armor set.',
                  },
                  {
                    srcSet: `${volkiharSlide2} 960w, ${volkiharSlide2Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'A close up of the custom gauntlets design.',
                  },
                  {
                    srcSet: `${volkiharSlide3} 960w, ${volkiharSlide3Large} 1920w`,
                    sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                    alt: 'A female character wielding a sword and wearing the red coloured armor.',
                  },
                ]}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={`${volkiharEnderal} 1280w, ${volkiharEnderalLarge} 1920w`}
              width={1280}
              height={720}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          {/** 
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Image
                srcSet={`${volkiharEnderalLogo} 180w, ${volkiharEnderalLogoLarge} 360w`}
                width={180}
                height={200}
                placeholder={volkiharEnderalLogoPlaceholder}
                alt="The Enderal game logo"
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <ProjectSectionHeading>Featured in Enderal</ProjectSectionHeading>
              <ProjectSectionText>
                I was super stoked to have my work featured in the major standalone mod
                Enderal, which won best fan creation at the game awards in 2016. Within
                the game my armor design can be found being used for the Wandering Mage
                armor set.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevron-right"
                href="https://store.steampowered.com/app/933480/Enderal_Forgotten_Stories/"
              >
                View on Steam
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
          */}
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
