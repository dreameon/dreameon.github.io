import React from 'react'
import '../css/index.css'
import ImageCard from '../ImageCard'
import businessCards from './business cards.png'
import brandName from './brand name.svg'
import logoDraft1 from './logo draft.png'
import logoDraft2 from './logo draft 2.png'
import mascotDraft from './mascot draft.png'
import mascotCat from './mascot cats.png'
import mascotFinal from './mascot final.png'
import logoFont from './logo font.png'
import fonts from './fonts.svg'
import logoFinal from './logo final.png'


function Puripalette() {
    return (
      <div className="project">
        <div className="project-overview">
          <div className="title"> puripalette </div>
          <div className="project-synopsis">
            A small business rebranding project
          </div>
        </div>
        <div class="project-container">
          <div class="h1-flex">
            <h1>Design</h1>
            <hr />
          </div>
          <div className="text-block">
            <section>
              <h2>Idea Generation, Motivation, and Research</h2>
              <p>
                I founded my small art business, Oh My Dreameon, in 2018, where
                I sold enamel pins and other art that I designed. In the first 2
                years, I was able to reach 1,200 followers on Instagram and sold
                $3000 worth of goods. As it was primarily a side hobby to my
                studies, there was limited brand planning conducted; instead, I
                was focused on simply designing new artwork to sell.
              </p>
              <p>
                In 2023, I completed my studies and had more time to involve
                myself in my small business once again. I wanted to branch into
                the home decor and fashion industry and hence decided to rebrand
                and implement necessary changes to formally make Oh My Dreameon
                into a well-maintained small business.
              </p>
              <p>The branding revamp would have three parts:</p>
              <ol>
                <li> Developing a new brand name</li>
                <li>Designing a logo and other necessary assets</li>
                <li>Formulating a palette (colour scheme)</li>
              </ol>
            </section>
            <section>
              <h3>Mission</h3>
              <p>
                The idea to revamp my business came to me while I was completing
                my exchange studies in Japan, where I saw many products with a
                “cute” aesthetic that didn’t exist in Canada yet. I observed
                many North American tourists as they visited Japan, and noticed
                that they gravitated towards this aesthetic. Their love for
                these products, coupled with the rise of Japanese animation
                (anime) in the West, inspired me to create a local product where
                my customers could enjoy this style without travelling all the
                way to Japan. As such, I decided to make the company's mission
                to deliver a cute, dreamy, and princess-like lifestyle to North
                America.
              </p>
            </section>
            <section>
              <h3>Target Market Analysis</h3>
              <p>
                Based on Etsy consumer data and Instagram insights, Oh My
                Dreameon’s market consisted of mainly females in their 20s to
                30s, with an interest in anime and Japanese pop culture, who
                reside in the United States and Canada. Although the product
                selection would be slightly different after the rebranding, the
                target market should not change as much. This belief was
                supported by competitor analysis of peers - other small business
                - who also successfully transitioned from enamel pins to
                fashion, plushies, and home decor, while still retaining their
                key target market.
              </p>
            </section>
          </div>

          <div className="text-block">
            <section>
              <h2>Conceptualization</h2>
              <h3>Brand Name</h3>
              <p>
                One of the flaws of Oh My Dreameon’s branding was that the name
                was too long for people to remember. As the business’ main
                presence is on Instagram, the handle, which did not allow for
                spaces or special characters, needed to be relatively simple for
                prospective and current customers to remember and to type. From
                competitor analysis, it appeared that most successful small
                business art accounts had a handle that was four syllables or
                fewer for memorability as well as simplicity.
              </p>
              <div className="center-flex" style={{ padding: "32px 0 32px 0" }}>
                <img
                  src={brandName}
                  alt="Name brainstorming"
                  style={{ width: "80%", height: "auto" }}
                />
              </div>
              <p>
                After considering the practical requirements, I listed potential
                candidates for the name that aligned with the desired branding.
                I wanted the new name to embody our new mission.
              </p>

              <p>
                With Purinpalette being the most memorable, I settled on that
                name. However, realizing that this word was difficult to
                pronounce with an American accent, I altered the name to
                Puripalette instead.
              </p>
            </section>
            <section>
              <h3>Logo and Assets</h3>
              <p>
                To go along with a memorable name, I needed a fitting logo. I
                first tried using the name as the logo, but it looked too plain
                and unmemorable.
              </p>
              <ImageCard
                src={logoDraft1}
                alt="The first draft of the logo, created before the name change into Puripalette"
                width="30%"
              />
              <p>
                I then considered a play on words with the Japanese Kanji
                character for princess and combining it with other shapes for
                the logo, but found several issues with the logo. Firstly, it
                lacked memorability; as not many people from my target market
                are Japanese, they may not understand nor remember it. Secondly,
                the character is difficult to read as a logo. Although cute,
                once the heart and moon were included, it didn’t look like the
                original character anymore and as such was indecipherable.
                Moreover, the thin lettering would be difficult to see from
                afar, when tabling at conventions and other markets.
              </p>
              <ImageCard
                src={logoDraft2}
                alt="The second draft of the logo, using the Japanese kanji character for princess, 姫"
                width="50%"
              />
              <p>
                As such, I decided to create a mascot, which I would use as my
                logo. After drawing a few different animals, I chose a ragdoll
                as my mascot, as this particular cat breed gives a regal air
                while remaining cute with its thick and fluffy coat. To
                perfectly align with the princess theme, I added a tiara to the
                ragdoll.
              </p>
              <ImageCard
                src={mascotDraft}
                alt="Different potential mascots for Puripalette (from left-right, top-down order) cats, otters, the long-tailed tit, and a pudding bear"
                width="50%"
              />
              {/* <div style={{display:'flex', alignItems:'baseline', width:'100%', alignItems:'baseline', justifyContent:'center'}}> */}
              <ImageCard
                src={mascotCat}
                alt="Drafts of the princess ragdoll"
                width="50%"
              />
              <ImageCard
                src={mascotFinal}
                alt="Final princess ragdoll logo"
                width="30%"
              />
              <p>
                For the typography of the logo, I wanted a font that gave off a
                sweet ambience, looked elegant, but also retained a bit of youth
                and cuteness. I also considered letter case and stylization,
                which would alter how the brand is perceived (e.g., if the name
                is all lowercase, it appears more casual and less intimidating,
                but less proper, and if it were capitalized then it’d seem more
                proper, but less approachable). Ultimately, after trying out
                different styles, I decided to use Parisienne as the logo font.
                For the Japanese version, I also looked at different fonts and
                ultimately chose yosugara due to its authenticity and
                simplicity.
              </p>
              <div>
                <ImageCard
                  src={fonts}
                  alt="Variations of the name with different fonts and stylizations"
                  width="50%"
                />
                  <ImageCard
                    src={logoFont}
                    alt="Testing Puripalette mascot with different fonts"
                    width="50%"
                  />
                  <ImageCard
                    src={logoFinal}
                    alt="Final logo, with font"
                    width="30%"
                  />
              </div>
            </section>
            <section>
              <h3>Colour Scheme</h3>
              <p>
                For the colour scheme, I went with pink and white to match the
                princess aesthetic. However, as there are many different shades
                of pink, there were quite a few different options to choose
                from. I proceeded to draft different business cards in different
                colours and styles, eliminating those that align less with the
                initial desired aesthetic. As of writing, I am still in the
                middle of deciding between the different colour schemes.
              </p>
              <p>
                I am aware that the current colour scheme is a bit difficult to
                read so I will continue to think of improvements to balance
                aesthetic with legibility and accessibility.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
}

export default Puripalette