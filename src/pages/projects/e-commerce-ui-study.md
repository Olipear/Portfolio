---
templateKey: project-entry
date: 2020-07-21T10:03:28.515Z
featuredproject: true
title: UI design and development
description: A luxury interface for a luxury product
featuredimage: /img/620-featured.jpg
featuredlink: https://www.vitsoe.com/gb/620/buy
featuredlinklabel: See it live
sections:
  - body_html: " "
    heading: About
    body: >-
      #### Role


      UX design, UI design, Front-end development, Information architecture, Product renders


      #### Team


      Myself, one senior developer and one junior developer.
    headerimage: /img/about.png
  - heading: Brief
    headerimage: /img/brief-_-problem.png
    standout: false
    intro: >
      Vitsoe relied on its physical retail spaces for most of the sales of their
      620 chair and footstool. Online purchases were often preceded by a shop
      visit.
    body: >-
      #### Business goals


      * Increase sales of their 620 chair & footstool.

      * Shift existing sales online.

      * Reduce reliance on salespeople for sales, answer customer questions online.

      * Update the interface to allow the addition of a new upholstery option.
  - heading: Defining the problem
    intro: "I started by looking for where the experience needed improvement. "
    standout: false
    headerimage: /img/research.png
    body: >-
      #### Pain points


      I collaborated with sales teams across the company to get an idea of what they were being asked, and why customers were choosing to order  through them rather than online. 


      * The modularity of the chair was poorly understood.

      * Their were often complaints about the leather texture, it was not as uniform as customers expected.

      * Some customers were not happy with the colour when they received the product.

      * Customers couldn't buy a footstool one it's own.


      #### Source


      ![Previous buy page for the 620 chair](/img/620-original-landing-page.jpg "Previous buy page for the 620 chair")


      ![Previous buy page for the 620 chair](/img/620-original-landing-page-2.png "Previous buy page for the 620 chair")


      This was the is what a customer is first presented with when they click 'configure and buy'.


      ### Poor product visualisation was at the heart of it.


      * The line drawing was not suitable for visualising a £6.5k product.

      * The line drawing took up far too much screen space, the configuration options were not visible without scrolling.

      * The photography available was not visible unless it was selected below the main image. 

      * The footstool could only be added to a chair purchase, and had no photography at all. 


      #### Purchase journeys


      Low sales meant it was practical to look at each purchase journey over a year long period. 


      * Most purchasers would spend weeks deliberating over their purchase, returning to the site many times.

      * During this deliberation the gallery page was the most commonly visited.

      * Users would 'play' with the colour configurations after viewing the gallery. It seemed like they were getting ideas for colour combinations from the gallery over the configurator. 

      * No purchases were made on mobile, but the gallery was popular for purchasers.


      #### User behaviour


      * Most users were not interacting with the configuration options.

      * Users that did configure the chair often stopped after adding an additional seat. - possibly because adding a seat more than doubles the price. 

      * Most users, even purchasers would spend a very brief time on the informational pages accompanying the purchase page. 


      #### Competitor evaluation


      The 620 chair really has one key competitor, the better known [Eames chair](https://www.vitra.com/en-gb/product/lounge-chair). I also looked at more complex examples outside of furniture such as the [Ray-Ban configurator](https://www.ray-ban.com/uk/customise) tool, and the luxury car market. 


      * Products in this price range emphasised high quality product visualisation. With 360deg views, high resolution photography, and zoom features.

      * Similar customisable products often broke up the process into stages. Many examples used accordions, forcing users to make one decision at a time. 




      #### Key points to address


      Having understood where improvements were needed, I defined a list of user stories the new configurator would need to satisfy. These are some of the points:


      * New product visualisations would be needed. 

      * Photography was needed for colour and texture decisions.

      * The footstool should have it's own configuration page.

      * The configurator needed to show the modularity and customisation options of the chair; without relying on other supporting pages.

      * Adding additional seats should be the last part of any staged, or segmented purchase process.
  - heading: Design
    intro: From the user stories and research I had a clear list of features to be
      included in the new UI.
    headerimage: /img/design-_-solution.png
    standout: false
    body: >-
      #### Product visualisation


      Existing images on the buy page were the only product photography available. Business stakeholders were advised that new photography, or renders were required.


      ### Our team created a [quick proof of concept](http://620poc.s3-website.eu-west-2.amazonaws.com/), in order to assess the practicality a product spinner.


      * Rendering 3D models in-browser couldn't achieve the quality we were looking for. 

      * Most libraries couldn't support the level of customisation we needed. Using React was the easiest way of building this functionality.

      * There would be a lot of images per rotation, so optimisation would be crucial.


      It was decided that renders would be preferable to photography, mainly for cost reasons. 




      #### Initial wireframes


      I looked at staging the configurator, but this impeded the informative aspects of the seat picker. Users might not initially realise the chair can be turned into a sofa if it was split out like this. 


      ![Wireframe of a staged configurator](/img/wireframe-staged.png "Wireframe of a staged configurator")


      I then moved onto accordion layouts. Where the customisation headings could be easily visible, especially on mobile.


      ![Wireframe showing controls in nested accordions](/img/wireframeaccoridans.png "Wireframe showing controls in nested accordions")


      Wanting to make more use of screen space, I looked at how existing controls could be simplified. Using switches or checkboxes for binary choices for example.


      ![Wireframe with toggles](/img/compact-ui-ideas.jpg "Wireframe with toggles")


      #### Moving to prototypes


      I started prototyping with just mobile layouts first, since this presented the greatest challenge.


      ![Image of prototype for mobile which uses accordion section that can be scrolled](/img/prototype-acordion.jpg "Prototype for mobile version")


      Even when I expanded the scrollable area, users would unintentionally begin page scrolling when selecting different customisation options. It also didn't show all of the customisation options available, at a glance a user might not realise there were back or feet options.


      When splitting these out into their own accordion sections, it forced users to scroll up and down the page to see the visualisation update.


      I found using a full screen modal overlay could provide the space needed, and more. This allowed me to show an additional close up image of the product, and the full visualisation was still just a button tap away.


      ![Mockup of modal design for mobile devices](/img/in-between-mockup.jpg "Mockup of modal design for mobile devices")


      This succinctly showed the user which aspects could be customised, and compartmentalised decision making. Using an image in the colour modal gave users both the material, and colour information they needed.


      The modal button adhered to the established visual language used elsewhere for in-page navigation. [The contact page was the main previous example of it's usage.](https://www.vitsoe.com/contactus) So I'd managed to avoid introducing any new UI elements.


      ![Mockup of desktop modal design](/img/desktop-hi-fi-mockup.jpg "Mockup of desktop modal design")


      The modal for colour choices was carried over to the desktop because of the advantage a close up photograph provided.


      This wasn't necessary for the the back and feet options. It made more sense to represent these as addons, and use checkboxes here.


      Now on all screen sizes, the customisation controls could be viewed alongside the spinner visualisation.
  - heading: "Implementation "
    intro: Once the final design was agreed upon, I joined the other two developers
      on our team to build it.
    headerimage: /img/implementation.png
    standout: false
    body: >-
      #### Technology


      From the earlier prototype and research, the team decided that the configurator page would be built in a self-contained react app. This would make it easier to migrate in a planned upgrade of the website's infrastructure.


      Keeping this longer term ambition in mind, we wanted to make sure we built everything to scale. New apis, data transport structures, components etc would need to serve all of Vitsoe's products. 


      #### Data transport design


      ![Snapshot of whiteboard showing ideas for data transport structure](/img/data-design-discussion.jpg "Whiteboard excerpt showing discussion of data transport structures")


      Sitting around a large screen with my graphics tablet was a great substitute for an interactive whiteboard. It sped up the process of agreeing upon a structure, and kept our remote developer involved. 


      The structure we came up with described a product and contained all of the information our front-end would need.


      #### Adaptive, data driven UI


      ![](/img/component-breakdown.jpg)


      The JSON structure we came up with, describes both customisation options, and how they should be displayed. Each option has a type such as 'colour' or 'binary', these directly correlate to a react component to render.


      Options can be grouped, for example shell colour and leather colour were grouped into materials. When on a mobile device, groups are ignored, and all child options are put inside a modal. The modal components are agnostic to the controls they might contain and simply act as containers. 


      ### The use of this system across other products would greatly improve the UX of the site in the future.


      #### Optimisation


      From the earlier prototype we knew optimisation of the large number of images would be challenging. 


      Rendering out to multiple resolutions allowed me to implement lazy loading, but I had to try a few different strategies to get good results. 


      I implemented a custom solution which managed the order the images loaded. As shown below.


      ![Diagram of image optimisation technique](/img/image-load-order.jpg "Diagram of image optimisation technique")


      This loading strategy was highly effective, users would only see a pixelated image for up to 2-3 seconds, and could interact with the spinner immediately. At no point does the spinner jump, freeze or otherwise change it's behaviour.


      To make this even clearer, I added in a small loading bar along the top of the frame. The loading bar goes to 50% on the thumbnails, and the remainder when the full resolution is loaded.


      #### For developers


      I don't have the source code for this project, but if you have react devtools installed you can check out my component structure on the live site.
  - body_html: " "
    heading: Testing
    intro: "Since the previous prototypes did not emulate the spinner functionality,
      this round of usability testing was important for evaluating this. "
    headerimage: /img/outcomes.png
    body: >-
      As well as device testing, I carried out task-driven usability testing.
      Although this was internal, I chose subjects who were outside of the sales
      team, and were more recent hires.


      Starting from the home page of the site I asked them to buy specific configurations of chairs, footstools and sofas. After observing them complete the tasks, I asked them a few simple questions about the product, such as whether specific combinations were possible (e.g. swivel bases are not compatible with sofa configurations). 


      * One user completed the task without interacting with the spinner at all, not realising it was interactive. This resulted in the addition of the 3D icon in the lower left corner. 

      * During device testing I found on the smallest devices the confirm button in modals was not visible without scrolling. I decided to move this to the top of the screen so that it would always be visible, and in the same place.

      * The switch to the the footstool in the top left was often mis-tapped on touch devices. It was too small, and too close to the modal buttons. Since the footstool was linked both on other pages, and beneath the chair configurator, we decided to remove this.


      Overall the feedback was very positive. Most users were quick to complete the tasks, and could answer my questions.


      #### Further results


      As the last project I completed at Vitsoe, I don't have the usual follow up data I would need to properly assess it. Therefore I've kept this write-up focused on the UI design and development of the configurator. 


      If you'd like to see an example of how I would usually measure the results of UX design changes, please check out the the ecommerce UX study below.
other_projects: More projects
featuredpost: false
---
