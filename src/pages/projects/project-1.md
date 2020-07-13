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
      #### Background


      The Vitsoe 620 chair and footstool is a modular system; multiple chairs can be affixed together to create sofas. The chair comes in six leather colours, two plastic colours, and high-back or low-back. A swivel can be added to single chairs but not sofas. 


      #### Business goals


      In addition to increasing sales of their product; it was also to allow their salespeople to concentrate on the more complex sales process of their modular shelving system, 606. 


      Furthermore, the company planned on launching a new linen upholstery option in 2020. We would need to update the UI of the configurator to account for this.
  - heading: Research & Discovery phase
    intro: >
      Now I had a clear idea of what needed to be done, I started by looking at
      what we had, and where it was failing.
    standout: false
    headerimage: /img/research.png
    body: >-
      #### User stories


      Having previously created personas, I spoke to Vitsoe's sales teams to identify pain points for both the customer and business. Using these I then defined an exhaustive list of user stories the new interface would need to satisfy. 


      These are some of the stories which would address the biggest pain points: 


      * A new customer needs to understand the modularity, and customisation options available on the 620

      * A new customer should not be surprised leather texture has natural scarings and patternations.

      * An existing customer should be able to buy a footstool separately.

      * Customers should be comfortable buying the chair without seeing one in person.


      #### Previous product page


      Looking at the the existing product configuration page it was obvious where some of these paint points were arising. 


      ![Previous buy page for the 620 chair](/img/original-page.jpg "The previous buy page for the 620 chair")


      ### Poor product visualisation was at the heart of it.


      The use of the line drawing here was most culprit when it came to customer confusion on the leather texture.


      The seat picker communicated the modularity of the product clearly, and succinctly.


      The one photo of the chair was from an odd angle making it difficult to see the texture clearly. 


      There was no photography of the footstool at all, and it could only be added to a chair purchase as an add-on item. 


      The mobile version was responsive, so this page was very long, and the summary with price breakdown was below all the controls. Most significantly, this meant the Add to basket button was very far down the page. 


      #### Quick fixes


      Realising that this project would take some time, I looked at what could be done in the short term.


      ![Screenshot of page with some quick improvements added.](/img/low-effort-improvements.jpg "A few minor improvements.")


      ### It took me an afternoon to make these simple css and HTML changes.


      * Increased the right column from 3 to 4 columns (of 12). 

      * Removed the other two line drawings at the top, and moved the preview photo to the right column. 


      Implementing these changes straight away gave me an opportunity to measure any improvements. These changes didn't impact sales over four months, however that in itself told me the larger line-drawings were superfluous.


      #### Behaviour analysis


      With an average of ~2 online sales per month, it was practical to look at each purchase journey over a year long period.


      * Most purchasers would spend weeks deliberating over their purchase, returning to the site many times.

      * During this deliberation the gallery page was the most commonly visited. 

      * No purchases were made on mobile, but the gallery was popular here too.


      When I looked at the larger sample of non-purchasers, I saw that many people were 


      #### Competitor evaluation


      The 620 chair really has one key competitor, the better known [Eames chair](https://www.vitra.com/en-gb/product/lounge-chair). The other competition is designer furniture from places like Made.com. 


      For a chair, the seat customisation options were relatively unique, most just dealt with colour variations. So I also looked at more complex examples outside of furniture such as the [Ray-Ban configurator](https://www.ray-ban.com/uk/customise) tool. 


      * All similar products had far more product visualisation, most had 360deg views, and / or high resolution photography which could be zoomed in on. The Eames chair had very good renders.

      * Similar customisable products often broke up the process into stages, this was especially popular in the car examples I looked at. Furniture examples tended to use dropdown sections, so one decision was being made at a time. 


      #### Product visualisation


      My research was all pointing me towards this being the most significant improvement I could make. Before getting further into the design process I wanted to know we had to work with.


      The existing images in the gallery and the buy page, were the only product photography the company had.


      Therefore any improvement would require an investment in new photography or product renders. 


      One of the major issues was that the 620 chair, had 48 different combinations for a single chair. That's excluding the possible combinations for sofas and footstools. 


      So early on the idea of visualising sofa combinations was discarded, we would focus on the single chair, and rely on the gallery for visualisation of sofas. 


      Next was the question of whether it was possible to create a spinner. 


      ### In order to assess this, we created a [quick proof of concept](http://620poc.s3-website.eu-west-2.amazonaws.com/).


      This piece of work, completed in a two week sprint, helped us decide on the next steps.


      * Initially using a single 3D model to render in browser seemed like a good option. However the browser plugins we looked at couldn't achieve the quality we were looking for.

      * We looked at several libraries to create spinner functionality, but they fell apart when we introduced product customisation. It was actually quite straightforward to create that functionality in React ourselves. 

      * We quickly realised that managing these images was going to be challenging. With 8 angles per chair, it would be 384 images, before optimising into different resolutions. 

      * Even with images taken using my phone, it looked great. It sold the idea of a spinner to management.


      We decided ro use renders for several reasons. 


      * Taking product photography of the various chair options would require a lot of stock worth thousands of pounds. 

      * The company had CAD models of all their products, so all that would need to be done is texturing the model.

      * Once the textured model was created it would be an asset which could be reused in future marketing and other visualisations. 

      * Renders could be changed and adjusted, if new colours or variations on the product were introduced for example. 

      * I had the skills necessary to create the renders, eliminating the need for external resource.
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

      * The configurator should save the current selection in a cookie so a returning user does not lose their selections.


      #### Initial wireframes


      My very first wireframes are usually on paper, but to discuss more developed ideas I draw them digitally. 


      ![Wireframe of a staged configurator](/img/wireframe-staged.png "Wireframe of a staged configurator")


      I looked at staging the configurator, but this impeded the informative aspects of the seat picker. Users might not initially realise the chair can be turned into a sofa if it was split out like this. 


      ![Wireframe showing controls in nested accordions](/img/wireframeaccoridans.png "Wireframe showing controls in nested accordions")


      For discrete sections, I started out exploring an accordion layout. I also considered a pills option, where the customisation headings could be easily visible on mobile, but the options were still hidden. 


      ![Wireframe with toggles](/img/wireframe-binary-toggles.jpg "Wireframe with toggles")


      I looked at how simplifying the controls for customisation might be made more compact by changing binary choices into toggles. 


      ![Wireframe show controls which scroll with page](/img/wireframe-scrolling-controls.png "Wireframe show controls which scroll with page")


      This is one of the later wireframes I made, where I decided that controls should scroll with the rest of the content on the page. Allowing the user to see the price and selection changes they were making at all times. 


      #### Moving to hi-fi prototypes


      At this stage I had the decided to take the following ideas forward to prototype in higher fidelity: 


      * I was going to leave the seat picker mostly as it was. 

      * I wanted to have the cost and buy button always visible whilst customising the chair - on desktop at least.

      * When selecting anything to do with colour, a preview or visualisation needed to be shown alongside it. The shell and leather colour needed to be shown together.

      * The footstool picker would be a mirror of the chair picker, with all relevant UI elements duplicated entirely.


      Although I'd decided against a fully staged approach, at this point I knew the order I wanted the configurator to be used.


      1. Customise the colour, back, and feet options 

      2. Move on to pick the number of seats

      3. Show gallery links and further information to help deliberation.

      4. At all times show the selection, price and buy button. 


      As always, the best place to start is on mobile. Designing for mobile first really forces you to cut everything down to what's absolutely necessary in a design. 


      ![Image of prototype for mobile which uses accordion section that can be scrolled](/img/prototype-acordion-scrolling-section.jpg "Prototype for mobile version")


      This prototype was a result of trying to ensure the configuration controls could be used whilst keeping the visualisation in view. 


      Even when I later expanded the scrollable area, users would unintentionally begin page scrolling when selecting different customisation options. 


      It also didn't show all of the customisation options available, something I'd wanted the layout to do. 


      Then I hit on a solution that would show all the options available whilst giving enough space to work properly on mobile. Modal overlays.


      TODO (image of inbetween mockup)


      Although it stopped the user from seeing a live update of the visualisation, using a fullscreen modal meant I could show them the close up image of the leather texture when selecting a colour, the existing images were well suited for this. 


      There were no other modals on the site at the time, so I ensured the button style adhered to the established visual language used elsewhere for in-page navigation. [The contact page was the main previous example of it's usage.](https://www.vitsoe.com/contactus) 


      I started on the desktop layout now.


      TODO (desktop hi-fi mockup)


      Using the extra space available on desktop, I put all colour decisions into one modal, again showing the close up photography to inform the decision. 


      I decided to treat high-back and swivel base, as add-on items with a checkbox - as the footstool had been previously. This was a representation of the choice, since they were an additional cost. I did consider using these on mobile, but I didn't want to reduce visibility of the seat picker.


      #### Testing & refinement


      The testing we carried out was internal, we also sent out hi-fi mockups of the design to remote sales teams for feedback. 


      The most valuable feedback was for the copy. The majority of the labelling for this page was directed by this feedback. 


      Other small changes we made at this stage were: 


      * Added in help text next to the seat picker - to direct customers to planners where they had an existing seat they wanted to extend, or for larger commercial orders.

      * The inclusion of the 621 table alongside the footstool, since it is a companion to the 620 chair.
  - heading: "Implementation "
    intro: "Once the final design was agreed upon, I could join the other two
      developers on our team to look at implementation. "
    headerimage: /img/implementation.png
    standout: false
    body: >-
      #### Technology


      From the earlier prototype and research, the team decided that the configurator page would be built in a self-contained react app. This would make it easier to migrate when eventually the website was moved away from the custom implementation of Yii 1.1 php framework.


      Keeping this longer term ambition in mind, we wanted to make sure we built everything to scale. New apis, data transport structures, components etc would need to work for all of Vitsoe's products. 


      The prototype had also ruled out using a library for the spinner functionality because of the level of customisation the product needed to visualise. 


      #### Data transport design


      We wanted to make sure the front-end was data driven, to support scalability, for this reason throughout this process I was constantly checking that this structure could be applied to vitsoe's other products. 


      ![Snapshot of whiteboard showing ideas for data transport structure](/img/data-design-discussion.jpg "Whiteboard excerpt showing discussion of data transport structures")


      Sitting around a large screen with my graphics tablet was a great substitute for an interactive whiteboard, and really sped up the process of agreeing upon a structure.


      Below is the initial version of the data transport structure which would drive the front-end components.


      ```

      {
          "name": "620_chair",
          "category": "620 Chair Programme",
          "family": "620 Chair Programme",
      	"options": [
      		{
      			"name": "back",
      			"type": "binary",
      			"values": [
      				{ "lowback": "620 1" },
      				{ "highback": "620 2" }
      			],
      			"dimensions_affect": "height"
      		},
      		{
      			"name": "base",
      			"type": "binary",
      			"values": [
      				{ "feet": "010" },
      				{ "swivel": "020" }
      			]
      		},
      		{
      			"name": "additional_seats",
                  "type": "seat_picker",
      			"values": [1, 2, 3, 4],
      			"rules": [
      				{
      					"condition": [ 2, 3, 4 ],
      					"exclude": [
      						{ "base": ["2"] }
      					]
      				}
      			],
      			"dimensions_affect": "width"
      		},
      		{
      			"name": "Shell_colour",
      			"type": "colour_picker",
      			"values": [
      				{ "Off-white": " W " },
      				{ "Black":  " M " }
      			]
      		},
      		{
      			"name": "upholstery",
      			"type": "suboption",
      			"values": [
      				{
      					"name": "leather",
      					"type": "colour_picker",
      					"values": [
      						{ "red": "RED" },
                              { "olive_green": "OLI" },
                              { "cinnamon": "CIN" },
                              { "chocolate": "CHO" },
                              { "black": "BLA" }
      					]
      				},
      				{
      					"name": "linen",
      					"type": "colour_picker",
      					"values": [
                              { "natural": "NAT" },
                              { "loaden": "LOD" }
      					]
      				}
      			]
      		}
      		]
      }

      ```


      This format could tell the react app exactly how to structure the product customisation options. 


      Prices and stock could be retrieved by adding all the values of the options together to make a product SKU. 


      All the CMS content was written with the values as keys, so it could be easily accessed.


      #### Adaptive, data driven UI


      Each option has a type, which has a corresponding react component. 


      When the type was 'group' the control would be displayed inside a modal. On mobile groups are ignored, all controls were put inside a modal. 


      For 'binary' type options a checkbox is used on desktop, and a radio input with images is used on mobile. And so on for colour pickers.


      All of these product configuration controls are reusable, and can be applied to all of vitsoe's products. The exception to this is the seat_picker type, which would only ever be used in this context. 


      #### Optimisation 


      From the earlier prototype we knew optimisation of the large number of images would be challenging. Being renders, I was able to programatically save the output into several resolutions, including a 50px thumbnail. 


      The multiple resolutions allowed me to implement lazy loading, but I had to try a few different strategies to get good results. 


      Initially I had all the images for a specific configuration load together, lazy loading in at 50px then to the correct high resolution images. With 16 images in a rotation, this was still far too slow. 


      The solution was to carefully manage the order in which the images loaded. 


      1.  The current image (wherever it is in the rotation) loads its 50px thumbnail.

      2. Once the first is loaded, it triggers the two adjacent images to load their thumbnail, and so on around the rotation.

      3. Once all thumbnails are loaded, the same process is repeated for the full resolution images


      TODO (replace with diagram)


      This meant:


      * The user was never shown a blank space, the thumbnails loaded very quickly.

      * The user could immediately begin to spin the image even if the full resolution images weren't loaded. Reducing any confusion around the functionality of the spinner. 

      * When changing configuration options the interface responded promptly.


      To make this clearer, I added in a small loading bar along the top of the frame. The loading bar goes to 50% on the thumbnails, and the remainder when the full resolution is loaded. The loading bar then fades out after a couple of seconds so it's not distracting.
  - body_html: " "
    heading: Testing
    intro: "Since the previous prototypes could not emulate the spinner
      functionality, this round of testing was important for evaluating it's
      functionality. "
    headerimage: /img/research.png
    body: >-
      As well as device testing, I created a short test in which users needed to
      carry out specific tasks to evaluate the interface. I intentionally chose
      subjects who were outside of the sales team and were recent hires, so that
      their knowledge of the product was comparatively limited.  


      Starting from the home page of the site I asked them to buy specific configurations of chairs, footstools and sofas. After observing them complete the tasks, I asked them a few simple questions about the product, such as whether specific combinations were possible (e.g. swivel bases are not compatible with sofa configurations). 


      * One user completed the task without interacting with the spinner at all, not realising it was interactive. This resulted in the addition of the 3D icon in the lower left corner. 

      * During device testing I found on the smallest devices the confirm button was below the fold. I decided to move this to the top of the screen so that it would always be visible and in the same place.

      * Again during device testing, laptops with smaller screens could not display the full height of the current selection. We had to limit it's movement so that it would stop scrolling level with the informational content below the product configurator. 

      * Overall the feedback was very positive. Most users enjoyed interacting with the spinner, and immediately opened the correct modals when customising the product.
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


      * Despite the pandemic, Footstools have sold ~38% more over the same period this year that last year.

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
