---
templateKey: project-entry
date: 2020-06-22T13:16:57.702Z
featuredproject: true
title: Adaptive UI example
description: In selling this design icon I went for an adaptive interface design
  and was very successful in improving sales.
featuredimage: /img/620-image.jpg
featuredlink: https://www.vitsoe.com/gb/620/buy
featuredlinklabel: See it live
sections:
  - heading: Brief
    headerimage: /img/brief-_-problem.png
    standout: false
    intro: Sales of Vitsoe's 620 chair and footstool product were relatively low.
      The majority of sales were happening in their retail spaces or via
      salespeople. Since Vitsoe only operated 4 physical shops worldwide,
      providing a better online experience was the most effective way of
      improving sales.
    body: "#### User stories\r

      \r

      Adapting personas I'd made early on during my time at Vitsoe, the
      first stage was to create, and agree upon a list of user stories I'd be
      looking to satisfy. \r

      \r

      Some of the most important ones were: \r

      \r

      * A new customer needs to understand the adaptability of the 620
      (many customers didn't understand extra components were needed to add two
      chairs together)\r

      * A new customer needs to understand the leather texture has natural
      scarings and patternations. (complaints had been made about scars in the
      past)\r

      * An existing customer should be able to buy a footstool separately
      (at the time footstools could only be bought online with a chair, as an
      addon item)\r

      * Customers should be comfortable buying the chair without seeing
      one in person. (since there were only four shops worldwide)\r\n"
  - heading: Research & Discovery phase
    intro: >
      Now I had a clear idea of what needed to be done, I started by looking at
      what we had, and where it was failing.
    standout: false
    headerimage: /img/research.png
    body: "#### Previous page\r

      \r

      ![Previous buy page for the 620 chair](/img/original-page.jpg \"The
      previous buy page for the 620 chair\")\r

      \r

      ### The Most obvious issue was poor product visualisation.\r

      \r

      The initial line drawing was taking up the entire page upon opening,
      which could explain the high bounce rate on this page. It was also a
      duplication of the seat picker element below.\r

      \r

      The seat picker element worked well however, it communicated the
      modularity of the product clearly, and succinctly.\r

      \r

      The one image of the chair was from an odd angle, but it did at
      least show a close up of the leather texture. \r

      \r

      The footstool could not be purchased on it's own, and had no
      photograph at all. Sales of the footstool were extremely low, less than
      one every 2 months. \r

      \r

      The mobile version was responsive, so this page was very long, and
      the summary with price breakdown was right at the bottom of the page.\r

      \r

      #### Quick fixes\r

      \r

      Realising that this project would take some time, I looked at what
      could be done in the short term.\r

      \r

      ![Screenshot of page with some quick improvements
      added.](/img/low-effort-improvements.jpg \"A few minor improvements.\")\r

      \r

      ### It took me an afternoon to make these simple css and HTML
      changes.\r

      \r

      * Increased the right column from 3 to 4 columns (of 12). \r

      * Got rid of the other two line drawings at the top, and moved the
      preview photo to the right column. \r

      \r

      Implementing these changes straight away also gave me further
      opportunity to measure any improvements and see if my assumptions were
      correct. \r

      \r

      #### Behaviour analysis\r

      \r

      The low sales meant it was difficult to look at page statistics when
      trying to see what lead to goal completions. However this made it
      practicable to use the user explorer in google analytics to look at each
      user's journey through the site. \r

      \r

      * Purchasers would spend weeks deliberating over their purchase,
      this made sense for such an expensive purchase. \r

      * The most popular page in the 620 area was the gallery page, this
      supported my theory that better product visualisation was crucial for
      improving sales.\r

      * No purchases were made on mobile, but the gallery was popular here
      too. I noticed that purchasers would use the mobile gallery during their
      deliberation phase. \r

      * Unlike the [621 table](olipear.com), the initial introduction page
      didn't seem to be a point of abandonment. This was unexpected, and stopped
      me from emulating the page structure I had used there as I originally
      planned. \r

      \r

      #### Competitor evaluation\r

      \r

      The 620 chair really has one key competitor, the better known [Eames
      chair](https://www.vitra.com/en-gb/product/lounge-chair). The other
      competition is designer furniture from places like Made.com. \r

      \r

      For a chair, the seat customisation options were relatively unique,
      most just dealt with colour variations. So I also looked at more complex
      examples outside of furniture such as the [Ray-Ban
      configurator](https://www.ray-ban.com/uk/customise) tool. \r

      \r

      * All similar products had far more product visualisation, most had
      360deg views, and / or high resolution photography which could be zoomed
      in on. The Eames chair had very good renders.\r

      * Similar customisable products often broke up the process into
      stages, this was especially popular in the car examples I looked at.
      Furniture examples tended to use dropdown sections, so one decision was
      being made at a time. \r

      \r

      \r

      \r

      #### Product visualisation\r

      \r

      My research was all pointing me towards this being the most
      significant improvement I could make. Before getting further into the
      design process I wanted to know we had to work with.\r

      \r

      The existing images in the gallery and the buy page, were the only
      product photography the company had.\r

      \r

      Therefore any improvement would require an investment in new
      photography or product renders. \r

      \r

      One of the major issues was that the 620 chair, had 48 different
      combinations for a single chair. That's excluding the possible
      combinations for sofas and footstools. \r

      \r

      So early on the idea of visualising sofa combinations was discarded,
      we would focus on the single chair, and rely on the gallery for
      visualisation of sofas. \r

      \r

      Next was the question of whether it was possible to create a
      spinner. \r

      \r

      ### In order to assess this, we created a [quick proof of
      concept](http://620poc.s3-website.eu-west-2.amazonaws.com/). \r

      \r

      This piece of work, completed in a two week sprint, helped us decide
      on the next steps.\r

      \r

      * Initially using a single 3D model to render in browser seemed like
      a good option. However the browser plugins we looked at couldn't achieve
      the quality we were looking for.\r

      * We looked at several libraries to create spinner functionality,
      but they fell apart when we introduced product customisation. It was
      actually quite straightforward to create that functionality in React
      ourselves. \r

      * We quickly realised that managing these images was going to be
      challenging. With 8 angles per chair, it would be 384 images, before
      optimising into different resolutions. \r

      * Even with images taken using my phone, it looked great. It sold
      the idea of a spinner to management.\r

      \r

      We decided ro use renders for several reasons. \r

      \r

      * Taking product photography of the various chair options would
      require a lot of stock worth thousands of pounds. \r

      * The company had CAD models of all their products, so all that
      would need to be done is texturing the model.\r

      * Once the textured model was created it would be an asset which
      could be reused in future marketing and other visualisations. \r

      * Renders could be changed and adjusted, if new colours or
      variations on the product were introduced for example. \r

      * I had the skills necessary to create the renders, eliminating the
      need for external resource.\r\n"
  - heading: Wireframing and design
    intro: "Now I had a good idea of the key aspects that needed to be included in
      my design. "
    headerimage: /img/design-_-solution.png
    standout: false
    body: >-
      #### Features


      From the user stories and research I came up with a list of features, the key additions were:


      * A 360deg spinner would be used to visualise the product.

      * Each customisation decision should be made in a distinct section

      * The texture of the product was crucial, close up images of the leather needed to be included when choosing colour

      * Footstools should be their own product on equal footing *(hurhur)* to the chair.

      * The mobile experience is mostly in support of a later purchase on desktop, the spinner needs to work well on mobile devices. 


      #### Initial wireframes


      My very first wireframes are usually on paper, but to discuss more developed ideas I draw them digitally. 


      ![Wireframe of a staged configurator](/img/wireframe-staged.png "Wireframe of a staged configurator")


      I looked at staging the configurator, but this means impedes the informative aspects of the seat picker. Users might not initially realise the chair can be turned into a sofa if it was split out like this. 


      ![Wireframe showing controls in nested accordions](/img/wireframeaccoridans.png "Wireframe showing controls in nested accordions")


      For discrete sections, I started out exploring an accordion layout. I also considered a pills option, where the customisation headings could be easily visible on mobile, but the options were still hidden. 


      ![Wireframe with toggles](/img/wireframe-binary-toggles.jpg "Wireframe with toggles")


      I looked at how simplifying the controls for customisation might be made more compact by changing binary choices into toggles. 


      ![Wireframe show controls which scroll with page](/img/wireframe-scrolling-controls.png "Wireframe show controls which scroll with page")


      This is one of the later wireframes I made, where I decided that controls should scroll with the rest of the content on the page. Allowing the user to see the price and selection changes they were making at all times. 


      #### Moving to hi-fi prototypes


      At this stage I had the decided to take the following ideas forward to prototype in higher fidelity: 


      * I was going to leave the seat picker mostly as it is, and directly beneath the spinner.

      * I wanted to have the controls on desktop scroll along the right to make it easier to see how customisation changed pricing. 

      * The footstool couldn't be equal as a section on the page even if it could be bought separately. It needed to have it's own page. 


      As always, the best place to start is on mobile. It's not just about screen size, but designing for mobile first really forces you to cut everything down to what's absolutely necessary in a design. 


      ![Image of prototype for mobile which uses accordion section that can be scrolled](/img/prototype-acordion-scrolling-section.jpg "Prototype for mobile version")


      This prototype was a result of trying to ensure the configuration controls could be used without excessive scrolling. In an earlier version you would need to scroll up and down the page excessively, to see how your selection changed the visualisation. 


      The scrollable area was much too small to work properly on mobile, even with scroll-snapping. Users would unintentionally begin page scrolling. 


      It also didn't show all of the customisation options available, something I'd wanted the layout to do. 


      From here, I tried splitting them out into their own accordions, but that lead back around to the initial problem of page scrolling. 


      I started to consider the possibility of a staged configurator on mobile, but then I hit on a solution that was the best of both worlds: Modal overlays.
  - heading: "Implementation "
    intro: "Once the final design was agreed upon I looked to designing the
      architecture of the page. "
    headerimage: /img/implementation.png
    standout: false
    body: >-
      #### Background


      The existing vitsoe website was built on an outdated PHP framework called Yii, we were running Yii 1.1, which was already several years surpassed by Yii 2.XX (TODO lookup version).


      So from the outset of the project, and when coming up with the design it had already been decided we would build the new page in React. We would be building all the functionality required as a self-contained app. In future it was planned that the website would be moved to a new platform and the react app would be easier to migrate in this form. 


      Knowing this my final design for the page was quite ambitious; I would certainly have approached the project differently had it not been decided early on that we would be building it in a new framework.


      #### 3D spinner functionality


      During the design process I had decided early on that visualisation of the product was a major point for improvement.


      I came up with several proposals for how we could achieve these improvements, and worked closely with the creative director to ensure that we would be able to source media for this. 


      In the end, renders were decided upon for the following reasons: 


      * It was more practical to generate the huge number of images required to create a smooth spinner. with photography we could have only realistically done a maximum of 8 angles, and that would have been 384 photos. 

      * For photography of all the 48 different chair combinations, either thousands of pounds worth of stock would be needed. Because of Vitsoe's standards, this wouldn't have been used for resale. At best, if the one chair was disassembled and rebuilt, it would tie up several assembly team members and days worth of photographer's and studio time. 

      * It was an investment, the 3D models could be rendered in multiple contexts for different use cases. - After the project was complete they were used in an instagram story promotion for example.
other_projects: More projects
featuredpost: false
---
