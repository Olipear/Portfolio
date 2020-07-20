---
templateKey: project-entry
date: 2020-06-22T13:16:57.702Z
featuredproject: true
title: Adaptive UI example
description: A luxury interface for a luxury product
featuredimage: /img/620-image.jpg
featuredlink: https://www.vitsoe.com/gb/620/buy
featuredlinklabel: See it live
sections:
  - body_html: " "
    heading: Overview
    body: >-
      #### Role


      UX design, UI design, Front-end development, Information architecture, Product renders


      #### Team


      One senior developer who worked on React Redux portions, built the api and server side controller. Our junior developer wrote all the functional and unit tests.


      #### Write-up focus


      In this write up I've chosen to focus on the UI design and Front-end development of the chair configurator. Other work I carried out on the 620 area of the site has been omitted to keep this write up focused.
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


      In addition to increasing sales of their product; they wanted to move existing offline sales online. This was for salespeople to focus on the more complex sales process of their modular shelving system. 


      Furthermore, the company planned on launching a new upholstery option in 2020. So a new configurator would be need that could account for this. 


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


      The use of the line drawing here was the most likely culprit when it came to customer confusion on the leather texture. The photography that was present had poor visibility.


      The full-width images at the start of page also took up the entire screen on every device above mobile. 


      There was no photography of the footstool at all, and it could only be added to a chair purchase as an add-on item. 


      #### Purchase journeys


      Low sales meant it was practical to look at each purchase journey over a year long period. 


      * Most purchasers would spend weeks deliberating over their purchase, returning to the site many times.

      * During this deliberation the gallery page was the most commonly visited.

      * Users would 'play' with the colour configurations after viewing the gallery. It seemed like they were getting ideas for colour combinations from the gallery over the configurator. 

      * No purchases were made on mobile, but the gallery was popular here too.


      #### User behaviour


      When I looked at the much larger group of non-purchasers, I saw that only 45% of users were interacting with any of the configuration options. The large illustration taking up the entire screen on desktop could have been the cause of this. I wanted to make sure my design allowed the configuration options to viewed on first page-load. 


      Of those 47% adjusted the number of chairs, but then only 20% went on to change the colour. I hypothesised that this could be because adding even one seat increased the price to almost £14,000. This could easily be putting people off. For this reason I decided the seat picker should come after other configuration controls in the future UI. 


      #### Competitor evaluation


      The 620 chair really has one key competitor, the better known [Eames chair](https://www.vitra.com/en-gb/product/lounge-chair). I also looked at more complex examples outside of furniture such as the [Ray-Ban configurator](https://www.ray-ban.com/uk/customise) tool, and the luxury car market. 


      * I noted that products in that price range emphasised high quality product visualisation. With 360deg views, high resolution photography, and zoom features.

      * Similar customisable products often broke up the process into stages. Many examples used accordions. Letting customers make one decision was being made at a time was important. 


      #### Product visualisation


      My research so far was pointing me towards this being an area in need of significant improvement. 


      Unfortunately, the existing images on the buy page was the only product photography available. I recommended to business stakeholders that either new photography or renders would be needed before any UI changes could be effective.


      ### We created a [quick proof of concept](http://620poc.s3-website.eu-west-2.amazonaws.com/), in order to assess the practicality a product spinner.


      * Rendering 3D models in-browser couldn't achieve the quality we were looking for. 

      * Most libraries couldn't support the level of customisation we needed. Using React was the easiest way of building this functionality.

      * There would be a lot of images per rotation, so optimisation would be crucial.


      Renders were chosen over photography, principally because photography would have required a lot of expensive stock, and I had the skills to create renders in-house. A huge cost saving for the company. It would also grant the company a reusable, updatable asset which could be used in marketing.
  - heading: Design
    intro: From the user stories and research I had a clear list of features to be
      included in the new UI.
    headerimage: /img/design-_-solution.png
    standout: false
    body: >-
      * A 360deg spinner would use renders to visualise the product.

      * Each customisation decision should be made in a distinct section.

      * Customisation options should be visible without needing to scroll further down.

      * Close up photography needed to be included when choosing colour to show the texture of the leather.

      * Footstools should be treated as a separate product, not an addon item.

      * The number of seats should be selected after the other customisation options.


      #### Initial wireframes


      I looked at staging the configurator, but this impeded the informative aspects of the seat picker. Users might not initially realise the chair can be turned into a sofa if it was split out like this. 


      ![Wireframe of a staged configurator](/img/wireframe-staged.png "Wireframe of a staged configurator")


      I then moved onto accordion layouts. Where the customisation headings could be easily visible, especially on mobile.


      ![Wireframe showing controls in nested accordions](/img/wireframeaccoridans.png "Wireframe showing controls in nested accordions")


      Wanting to make more use of screen space, I looked at how existing controls could be simplified. Using switches or checkboxes for binary choices for example.


      ![Wireframe with toggles](/img/compact-ui-ideas.jpg "Wireframe with toggles")


      #### Moving to prototypes


      I started prototyping with just mobile layouts first, since this presented the largest challenge in terms of keeping the configuration controls as compact as possible. 


      ![Image of prototype for mobile which uses accordion section that can be scrolled](/img/prototype-acordion.jpg "Prototype for mobile version")


      Even when expanded the scrollable area, users would unintentionally begin page scrolling when selecting different customisation options. It also didn't show all of the customisation options available, at a glance a user might not realise there were back or feet options.


      When splitting these out into their own accordion sections, it forced users to scroll up and down the page to see the visualisation update.


      I found using a full screen modal overlay could provide the space needed and more, allowing me to show an additional close up image of the product. The full visualisation was still just a button tap away.


      ![](/img/in-between-mockup.jpg)


      This succinctly showed the user which aspects could be customised, and compartmentalised decision making. Using an image in the colour modal gave users the material and colour information they needed to make a decision.


      The modal button adhered to the established visual language used elsewhere for in-page navigation. [The contact page was the main previous example of it's usage.](https://www.vitsoe.com/contactus) So I'd managed to avoid introducing any new UI elements.


      ![](/img/desktop-hi-fi-mockup.jpg)


      The modal for colour choices was carried over to the desktop because of the advantage a close up photograph provided to the decision about colour. 


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


      Keeping this longer term ambition in mind, we wanted to make sure we built everything to scale. New apis, data transport structures, components etc would need to scale to all Vitsoe's products. 


      #### Data transport design


      We wanted to make sure the front-end was data driven, so I was constantly checking that this structure could be applied to vitsoe's other products. 


      ![Snapshot of whiteboard showing ideas for data transport structure](/img/data-design-discussion.jpg "Whiteboard excerpt showing discussion of data transport structures")


      Sitting around a large screen with my graphics tablet was a great substitute for an interactive whiteboard. It sped up the process of agreeing upon a structure, and kept our remote developer involved. 


      #### Adaptive, data driven UI


      ![](/img/component-breakdown.jpg)


      The JSON data structure we came up with, describes a product and it's customisation options. Each option has a type such as 'colour' or 'binary', to tell the front-end how it should be displayed. In this case, which react component to render.


      Options can be grouped, for example shell colour and leather colour were grouped into materials. When on a mobile device, groups are ignored, and all child options are put inside a modal. 


      ### The use of this system across other products would greatly improve the UX of the site.


      For example; when all colour selection interfaces use the same component, it guarantees a consistent user experience for users when selecting colour on any of vitsoe's products. Additionally it makes it really easy to update for developers.


      #### Optimisation


      From the earlier prototype we knew optimisation of the large number of images would be challenging. 


      Rendering out to multiple resolutions allowed me to implement lazy loading, but I had to try a few different strategies to get good results. 


      Initially I used a simple lazy loading strategy for all the images in a rotation.  But for 16 images this was still far too slow. 


      The solution was to carefully manage the order in which the images loaded.


      ![](/img/image-load-order.jpg)


      This loading strategy was simple and highly effective.


      To make this even clearer, I added in a small loading bar along the top of the frame. The loading bar goes to 50% on the thumbnails, and the remainder when the full resolution is loaded.


      #### For developers


      I don't have the source code for this project, but if you have react devtools installed you can check out my component structure on the live site.
  - body_html: " "
    heading: Testing
    intro: "Since the previous prototypes did not emulate the spinner functionality,
      this round of usability testing was important for evaluating this
      functionality. "
    headerimage: /img/outcomes.png
    body: >-
      As well as device testing, I carried out task-driven usability testing.
      Although this was internal, I chose subjects who were outside of the sales
      team and were more recent hires.


      Starting from the home page of the site I asked them to buy specific configurations of chairs, footstools and sofas. After observing them complete the tasks, I asked them a few simple questions about the product, such as whether specific combinations were possible (e.g. swivel bases are not compatible with sofa configurations). 


      * One user completed the task without interacting with the spinner at all, not realising it was interactive. This resulted in the addition of the 3D icon in the lower left corner. 

      * During device testing I found on the smallest devices the confirm button in modals was below the fold. I decided to move this to the top of the screen so that it would always be visible and in the same place.

      * The switch to the the footstool in the top left was mis-tapped on touch devices. It was too small and too close to the modal buttons. Since it was linked to on other pages, and beneath the configurator, we decided to remove this navigation. 


      Overall the feedback was very positive. Most users were quick to complete the tasks and could answer my questions.


      #### Further results


      As the last project I completed at Vitsoe, I don't have the usual follow up data I would need to properly assess it. Therefore I've kept this write-up focused on the UI design and development of the configurator. 


      If you'd like to see an example of how I would usually measure the results of UX design changes, please check out the 621 table project.
other_projects: More projects
featuredpost: false
---
