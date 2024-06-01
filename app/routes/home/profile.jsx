import profileImgLarge from '~/assets/images/pics_of_me/profile-large.jpg';
import profileImgPlaceholder from '~/assets/images/pics_of_me/profile-placeholder.jpg';
import profileImg from '~/assets/images/pics_of_me/profile.jpg';
//import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import React, { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {  styleReset, Button, ScrollView, TextInput} from 'react95';
import styled from 'styled-components';
5
// pick a theme of your choice
import original from 'react95/dist/themes/original';


const ProfileText = ({ visible, titleId }) => (
  
  <Fragment>



    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Welcome to my portfolio!" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    Feel free to browse my projects and interests. As a full-stack developer, I leverage cloud technologies to craft secure, scalable, and adaptable solutions.  I'm particularly passionate about my <Link href="/projects/volkihar-knight">GenAI text-to-video projects, so check them out</Link>  – I think you'll find them really cool!
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my free time I like to practice Brazilian Jiu Jitsu, play video games. I’m always down for hearing
      about new projects, so feel free to connect with me.

      Cheers!
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <ThemeProvider theme={original}>

              <div style={{ width: 400 }}>
              <div style={{ display: 'flex' }}>

        
                </div>


                </div>

              </ThemeProvider>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  this is what i look like 
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling in an overexposed selfie."
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
