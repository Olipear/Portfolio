---
templateKey: project-entry
date: 2020-06-22T13:16:57.702Z
featuredproject: true
title: Adaptive UI example
description: "In this project improving the UI would have the largest impact. "
featuredimage: /img/620-image.jpg
featuredlink: https://www.vitsoe.com/gb/620/buy
featuredlinklabel: See it live
sections:
  - heading: Brief
    headerimage: /img/brief-_-problem.png
    standout: false
    intro: >
      Vitsoe relied on its physical retail spaces for most of the sales of their
      620 chair and footstool. Online purchases were often preceded by a shop
      visit.
    body: >-
      #### Business goals


      In addition to increasing sales of their product; they wanted to move existing offline sales online. This was for salespeople to focus on the more complex sales process of their modular shelving system. 


      Furthermore, the company planned on launching a new upholstery option in 2020. So the solution would have to be flexible enough to account for this.


      #### User stories


      Having created personas for previous UX projects, I spoke to Vitsoe's sales teams to identify pain points in the 620 sales process. Using these I then defined an exhaustive list of user stories the new interface would need to satisfy. 


      These are some of the stories which would address the biggest pain points: 


      * A new customer needs to understand the modularity, and customisation options available on the 620

      * A new customer should not be surprised leather texture has natural scarings and patternations.

      * An existing customer should be able to buy a footstool separately.

      * Customers should be comfortable buying the chair without seeing one in person.
  - heading: Research & Discovery phase
    intro: >
      Now I had a clear idea of what needed to be done, I started by looking at
      what we had, and where it was failing.
    standout: false
    headerimage: /img/research.png
    body: >-
      #### Previous product page


      ![Previous buy page for the 620 chair](/img/original-page.jpg "The previous buy page for the 620 chair")


      ### Poor product visualisation was at the heart of it.


      The use of the line drawing here was most culprit when it came to customer confusion on the leather texture. The photography that was present was had poor visibility.


      There was no photography of the footstool at all, and it could only be added to a chair purchase as an add-on item. 


      #### Quick improvements


      ![Screenshot of page with some quick improvements added.](/img/low-effort-improvements.jpg "A few minor improvements.")


      ### It took me an afternoon to make these simple css and HTML changes.


      * Increased the right column from 3 to 4 columns (of 12) on desktop and tablet. 

      * Removed the other two line drawings at the top, and moved the preview photo to the right column so it was always visible. 


      These changes didn't impact sales over four months, however that in itself told me the larger line-drawings were superfluous.


      #### Behaviour analysis


      With an average of ~2 online sales per month, it was practical to look at each purchase journey over a year long period.


      * Most purchasers would spend weeks deliberating over their purchase, returning to the site many times.

      * During this deliberation the gallery page was the most commonly visited. 

      * No purchases were made on mobile, but the gallery was popular here too.


      When I looked at the larger sample of non-purchasers, I saw that only 45% of users were interacting with any of the configuration options. The large illustration taking up the entire screen on desktop could be the cause of this. Configuration options should therefore always be visible on first page load. 


      Of those 47% adjusted the number of chairs, the next highest interaction rate was changing the leather colour at 20%. Even adding one chair increased the price to almost £14,000. This could be immediately putting people off. For this reason I decided the seat picker should come after other configuration controls in the future UI. 


      #### Competitor evaluation


      The 620 chair really has one key competitor, the better known [Eames chair](https://www.vitra.com/en-gb/product/lounge-chair). I also looked at more complex examples outside of furniture such as the [Ray-Ban configurator](https://www.ray-ban.com/uk/customise) tool, and the luxury car market. 


      * I noted that products in that price range emphasised high quality product visualisation. With 360deg views, high resolution photography, and zoom features.

      * Similar customisable products often broke up the process into stages. Many examples used dropdowns or accordions, so one decision was being made at a time. 


      #### Product visualisation


      My research so far was all pointing me towards this being an area in need of significant improvement. 


      The existing images in the gallery and the buy page, were the only product photography the company had.


      Therefore any improvement would require an investment in new photography or product renders. 


      ### We created a [quick proof of concept](http://620poc.s3-website.eu-west-2.amazonaws.com/), in order to assess the practicality a product spinner.


      * Rendering 3D models in-browser couldn't achieve the quality we were looking for.

      * Simple libraries couldn't support the level of customisation we needed. Using React was the fastest way of building this functionality.

      * There would be a lot of images per rotation, so optimisation would be crucial.


      Renders were chosen over photography for several reasons. 


      * Photography for all the variants would require a lot of stock worth thousands of pounds. 

      * The company had CAD models of all their products, so all that would need to be done is texturing the model.

      * Once the textured model was created it would be an asset which could be reused in future marketing and other visualisations. 

      * Renders could be changed and adjusted, the upcoming new upholstery option would be easier to add later. 

      * I had the necessary skills, eliminating the need for external resource.


      Renders would still require the
  - heading: Wireframing and design
    intro: From the user stories and research I started out with a clear list of
      features to be included in a new interface.
    headerimage: /img/design-_-solution.png
    standout: false
    body: >-
      #### Features


      * A 360deg spinner would use renders to visualise the product.

      * Each customisation decision should be made in a distinct section

      * Close up images of the leather needed to be included when choosing colour to show the texture of the leather.

      * Footstools should be treated as a separate product, not an addon item.

      * The number of seats should come after the other customisation options.


      #### Initial wireframes


      I looked at staging the configurator, but this impeded the informative aspects of the seat picker. Users might not initially realise the chair can be turned into a sofa if it was split out like this. 


      ![Wireframe of a staged configurator](/img/wireframe-staged.png "Wireframe of a staged configurator")


      I then moved onto accordion layouts. Where the customisation headings could be easily visible, especially on mobile.


      ![Wireframe showing controls in nested accordions](/img/wireframeaccoridans.png "Wireframe showing controls in nested accordions")


      Wanting to make more use of screen space, I looked at how existing controls could be simplified. Using switches or checkboxes for binary choices for example.


      ![Wireframe with toggles](/img/wireframe-binary-toggles.jpg "Wireframe with toggles")


      In this sketch I decided that configuration options should scroll with the rest of the content on the page, allowing the user to see the price and selection changes they were making at all times. 


      ![Wireframe show controls which scroll with page](/img/wireframe-scrolling-controls.png "Wireframe show controls which scroll with page")




      #### Moving to prototypes


      I decided to start prototyping with just mobile layouts first, since this presented the largest challenge in terms of keeping the configuration controls as compact as possible. 


      ![Image of prototype for mobile which uses accordion section that can be scrolled](/img/prototype-acordion-scrolling-section.jpg "Prototype for mobile version")


      This prototype was a result of trying to ensure the configuration controls could be used whilst keeping the visualisation in view. 


      Even when expanded the scrollable area, users would unintentionally begin page scrolling when selecting different customisation options. 


      It also didn't show all of the customisation options available, something I'd wanted the layout to do. 


      Then I hit on a solution that would show all the options available whilst giving enough space to work properly on mobile. Modal overlays.


      TODO (image of inbetween mockup)


      This succinctly showed the user which aspects could be customised, and compartmentalised decision making. Using an image in the colour option gave users the texture and colour information they needed to make a decision.


      The button style adhered to the established visual language used elsewhere for in-page navigation. [The contact page was the main previous example of it's usage.](https://www.vitsoe.com/contactus) 


      TODO (desktop hi-fi mockup)


      The modal for colour choices was carried over to the desktop because it forced the user to see photography of the leather texture whilst making a decision about colour. 


      High-back, and swivel are options which bear an additional cost, so it made sense to represent these as addons. I also used checkboxes here because it saved some vertical space.


      Reducing the size of the controls allowed them to be displayed next to the spinner visualisation on tablet and above. 


      #### Testing & refinement


      The most valuable feedback I received from internal testing was for the copy. 


      * 'Seats' was changed to 'Turn your chair into a sofa'

      * Colour select areas would include the wording 'Full grain leather' in a subheading.

      * 621 table would be included alongside the footstool, since it was designed to accompany the chair. 

      * Added in help text above the seat picker 

      * The inclusion of the 621 table alongside the footstool, since it is a companion to the 620 chair.
  - heading: "Implementation "
    intro: Once the final design was agreed upon, I joined the other two developers
      on our team to build it.
    headerimage: /img/implementation.png
    standout: false
    body: >-
      #### Technology


      From the earlier prototype and research, the team decided that the configurator page would be built in a self-contained react app. This would make it easier to migrate when eventually the website was moved away from the custom implementation of Yii 1.1 php framework.


      Keeping this longer term ambition in mind, we wanted to make sure we built everything to scale. New apis, data transport structures, components etc would need to work for all of Vitsoe's products. 


      #### Data transport design


      We wanted to make sure the front-end was data driven, to support scalability, for this reason throughout this process I was constantly checking that this structure could be applied to vitsoe's other products. 


      ![Snapshot of whiteboard showing ideas for data transport structure](/img/data-design-discussion.jpg "Whiteboard excerpt showing discussion of data transport structures")


      Sitting around a large screen with my graphics tablet was a great substitute for an interactive whiteboard. It sped up the process of agreeing upon a structure, and kept our remote developer involved. 


      #### Adaptive, data driven UI


      The JSON data structure we came up with, describes a product and it's customisation options. Each option has a type such as 'colour' or 'binary', to tell the front-end how it should be displayed. In this case, which react component to render.


      Options can be grouped, for example shell colour and leather colour were grouped into materials. When on a mobile device, groups are ignored, and all child options are put inside a modal. 


      ### The use of this system across other products will greatly improve the UX of the site.


      For example; when all colour selection interfaces use the same component, it guarantees a consistent user experience for users when selecting colour on any of vitsoe's products. Additionally it makes it really easy to update for developers.


      #### Optimisation


      From the earlier prototype we knew optimisation of the large number of images would be challenging. 


      Rendering out to multiple resolutions allowed me to implement lazy loading, but I had to try a few different strategies to get good results. 


      Initially I used a simple lazy loading strategy for all the images in a rotation.  But for 16 images this was still far too slow. 


      The solution was to carefully manage the order in which the images loaded. 


      1. The current image (wherever it is in the rotation) loads its 50px thumbnail.

      2. Once the first is loaded, it triggers the two adjacent images to load their thumbnail, and so on around the rotation.

      3. Once all thumbnails are loaded, the same process is repeated for the full resolution images


      TODO (replace with diagram)


      This meant:


      * The user was never shown a blank space, the thumbnails loaded very quickly.

      * The user could immediately begin to spin the image even if the full resolution images weren't loaded. Reducing any confusion around the functionality of the spinner. 

      * When changing configuration options the interface responded promptly.


      To make this even clearer, I added in a small loading bar along the top of the frame. The loading bar goes to 50% on the thumbnails, and the remainder when the full resolution is loaded.
  - body_html: " "
    heading: Testing
    intro: "Since the previous prototypes could not emulate the spinner
      functionality, this round of usability testing was important for
      evaluating its functionality. "
    headerimage: /img/research.png
    body: >-
      As well as device testing, I carried out task-driven usability testing.
      Although this was internal, I chose subjects who were outside of the sales
      team and were more recent hires.


      Starting from the home page of the site I asked them to buy specific configurations of chairs, footstools and sofas. After observing them complete the tasks, I asked them a few simple questions about the product, such as whether specific combinations were possible (e.g. swivel bases are not compatible with sofa configurations). 


      * One user completed the task without interacting with the spinner at all, not realising it was interactive. This resulted in the addition of the 3D icon in the lower left corner. 

      * During device testing I found on the smallest devices the confirm button in modals was below the fold. I decided to move this to the top of the screen so that it would always be visible and in the same place.


      Overall the feedback was very positive. Most users were quick to complete the tasks and could answer my questions.
  - body_html: " "
    heading: Results
    intro: Launching the changes in February 2020, it's difficult to gauge the
      results at time of writing.
    headerimage: /img/brief-_-problem.png
    body: >-
      #### What I've heard


      This project was my last with vitsoe, leaving just a few weeks after putting this page live. Therefore I don't have access to the same level of data I did on projects like the 621 table redesign TODO (add link). 


      There's also the global pandemic and subsequent global economic crisis which has seen a reduction in sales everywhere. 


      What I have been passed on by ex-colleagues is that:


      * Footstools sales increased ~38% compared the same period last year

      * 620 chair sales have fallen slightly*

      * Anecdotally, sales have shifted from shops/ salespersons to online. Even those who visit shops, tend to buy later using the online tool rather than through a salesperson *(to their dismay)*. 


      *\*This was not split for online / offline sales. I recall in March 2019 there was a large commercial order which would throw these numbers off . Also the pandemic is likely to have affected sales.*


      Additionally, I've seen the renders I created show up in instagram stories, promoting the 620 chair. So those assets are already being utilised outside of their primary purpose. 


      #### What I'd be measuring if I were still with Vitsoe


      I would be looking at the custom events I put in, to see that the spinner was being used by most visitors, particularly on mobile. Then if they were subsequently more or less likely to move further along the purchase journey as a result of using this feature.


      I would be using the events to check that all the controls were being and used across devices. 


      I would want to check the rate that users found their way to the footstool configurator. Having removed the initial switch at the top of the page I'd want to see that the link below had enough visibility.


      Behavioural data like this can reveal problems or user behaviours that are totally unexpected, these are often the most valuable insights. 


      I'd also want to take a better look at sales. I'd want to see those anecdotes about the shift in sales backed up with data. I would also be looking at the rate of sales across all products, to see if the drop in 620 was more or less than the drop in sales of other products. I would be tracking marketing efforts to account for the effects of they might have had.


      All of this would inform further potential improvements to the existing interface.
other_projects: More projects
featuredpost: false
---
