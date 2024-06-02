import profileImgLarge from '~/assets/images/pics_of_me/profile-large.jpg';
import profileImgPlaceholder from '~/assets/images/pics_of_me/profile-placeholder.jpg';
import profileImg from '~/assets/images/pics_of_me/profile.jpg';

import hImg from 'app/assets/images/cyberpunk_ui/letters/h.png';
import eImg from 'app/assets/images/cyberpunk_ui/letters/e.png';
import nImg from 'app/assets/images/cyberpunk_ui/letters/n.png';
import rImg from 'app/assets/images/cyberpunk_ui/letters/r.png';
import yImg from 'app/assets/images/cyberpunk_ui/letters/y.png';

import divider8Img from 'app/assets/images/cyberpunk_ui/dividers/divider8.png';
import shape1Img from 'app/assets/images/cyberpunk_ui/shapes/shape1.png';

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

    Glad you found me. 
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    Feel free to browse my projects and explore my interests. I'm driven by accelerating  technology to create a more open, decentralized, and user-centric world. I am especially passionate when building tools which champion and forward individual liberty and autonomy. 

</Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
Technological change requires free markets and individual ingenuity as the engines of understanding. As a result, I am a strong advocate for open-source development methodologies. My best work is via voluntary contributions when I am incentivized with mutually-beneficial interactions.
</Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">

I place strong emphasis on personal responsibility. When individuals are ultimately accountable for the consequences of their choices, organizations foster a culture of self-reliance and sound decision-making. 

</Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
Social order is neither defined nor dictated by rigid processes; rather, behavior is regulated by normatives and influences. So, reach out and let's rely on one another for support and honest feedback. If everything is left to be, each of us can specialize and develop our own perceptions and expectations. Fuck dogma.

    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    P.S. --- I'm particularly passionate about my <Link href="/projects/textToVideo">GenAI text-to-video projects, so check them out</Link>  --– I think you'll find them really cool!


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
              <div className={styles.name}>

                <Image
                      reveal
                      cyberpunkAccent
                      delay={100}
                      srcSet={`${divider8Img} 480w, ${divider8Img} 960w`}
                      width={100}
                      height={100}
                      sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                      alt="h"
                  />
                </div>

              <ProfileText visible={visible} titleId={titleId} />

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
                  width={1960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling in an overexposed selfie."
                />

                


                <div className={styles.name}>
                  <Image
                      reveal
                      cyberpunkAccent
                      delay={100}
                      srcSet={`${hImg} 480w, ${hImg} 960w`}
                      width={100}
                      height={100}
                      sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                      alt="h"
                    />
                    <Image
                      reveal
                      cyberpunkAccent
                      delay={100}
                      srcSet={`${eImg} 480w, ${eImg} 960w`}
                      width={100}
                      height={100}
                      sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                      alt="e"
                    />
                    <Image
                      reveal
                      cyberpunkAccent
                      delay={100}
                      srcSet={`${nImg} 480w, ${nImg} 960w`}
                      width={100}
                      height={100}
                      sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                      alt="n"
                    />
                    <Image
                      reveal
                      cyberpunkAccent
                      delay={100}
                      srcSet={`${rImg} 480w, ${rImg} 960w`}
                      width={100}
                      height={100}
                      sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                      alt="r"
                    />
                    <Image 
                      reveal
                      cyberpunkAccent
                      delay={100}
                      srcSet={`${yImg} 480w, ${yImg} 960w`}
                      width={100}
                      height={100}
                      sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                      alt="y"
                    />
                </div>
              </div>

            </div>


          </div>
        )}
      </Transition>
    </Section>
  );
};
