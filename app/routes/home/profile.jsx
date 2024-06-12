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
import square8Img from 'app/assets/images/cyberpunk_ui/squares/square8.png';
import window2Img from 'app/assets/images/cyberpunk_ui/windows/window2.png';
import grid4Img from 'app/assets/images/cyberpunk_ui/grids/grid4.png';
import grid3Img from 'app/assets/images/cyberpunk_ui/grids/grid3.png';
import ruler6Img from 'app/assets/images/cyberpunk_ui/rulers/ruler_6.png';

import data6Img from 'app/assets/images/cyberpunk_ui/data/data6.png';


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
      <DecoderText text="welcome to my portfolio!" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
    feel free to browse my projects and explore my interests. 
    
    
</Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">

    join me in crafting user-centric solutions that champion individual liberty and can bring forth an open and decentralized world.


</Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">

     the free market is a powerful engine of understanding --- in it, i grew desensitized to beliefs, to people and their bodies, to every offensive thing --- i became confident when i encompassed what i wanted, and became even more confident when i extended myself. 

</Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">
fraternity is honesty. but it is not dictated by rigid processes; rather, its behavior is regulated by normatives and influences. so, reach out and let's rely on one another for support and honest feedback. if everything is left to be, each of us can specialize and develop our own perceptions and expectations. fuck dogma. 

    </Text>

    <Text className={styles.description} data-visible={visible} size="l" as="p">

 (p.s. check out my <Link href="/projects/textToVideo">gen-ai text-to-video projects</Link> cause i think you'll find them really cool!)

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



            </div>

            <div className={styles.column}>

              <div className={styles.rightSide}>
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
                 <div className={styles.grid4Img}>
                  <Image
                        cyberpunkAccent
                        reveal
                        delay={100}
                        srcSet={`${grid4Img} 480w, ${grid4Img} 960w`}
                        sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                        width={100}
                        height={100}
                        alt="grid4"
                    />
                </div> 
 
                <div className={styles.grid3Img}>
                  <Image
                        cyberpunkAccent
                        reveal
                        delay={100}
                        srcSet={`${grid3Img} 480w, ${grid3Img} 960w`}
                        sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                        width={100}
                        height={100}
                        alt="grid3Img"
                    />
                </div>
 
                <div className={styles.ruler6Img}>
                  <Image
                        cyberpunkAccent
                        reveal
                        delay={100}
                        srcSet={`${ruler6Img} 480w, ${ruler6Img} 960w`}
                        sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                        width={100}
                        height={100}
                        alt="ruler6Img"
                    />
                </div>

              </div>


                <div className={styles.profileBoxImg}>

                  <Image 
                      cyberpunkAccent
                      reveal
                      delay={100}
                      srcSet={`${square8Img} 480w, ${square8Img} 960w`}
                      width={100}
                      height={100}
                      sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                      alt="square8"
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
