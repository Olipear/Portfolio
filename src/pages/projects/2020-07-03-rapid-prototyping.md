---
templateKey: project-entry
date: 2020-07-03T16:06:08.432Z
featuredproject: true
title: Rapid prototyping
description: "This proof of concept was part of a wider investigation into how
  vitsoe could improve the purchase process for the 606 Shelving System. "
featuredimage: /img/furnituretoolfeatured.jpg
featuredlink: https://www.youtube.com/watch?v=8SOaF-Motuo&feature=youtu.be
featuredlinklabel: See my presentation
sections:
  - body_html: " "
    heading: Overview
    intro: ""
    headerimage: /img/about.png
    body: >-
      #### Role


      In this project I took on a product designer role. 


      Getting stuck into the development work where needed, whilst providing direction and design for the rest of the team. 


      #### Team


      In addition to myself, the development team consisted of two senior developers, and a junior dev.


      #### Project Length


      The project was scheduled for 2 weeks initially, but was extended to 1 month.
  - heading: Brief
    headerimage: /img/brief-_-problem.png
    standout: false
    intro: This prototype was part of an ongoing UX review of the sales process for
      their shelving system.
    body: >-
      #### Background


      Briefly*:* 606 is a modular shelving system. 'E-tracks' are directly attached to walls or posts. Various components such as shelves, tables, and cabinets are attached to tracks with pins. 


      The sales process was inquiry led, planners (salespeople) would design the shelving system on behalf of customers.


      I was researching the entire sales process for 606 in depth. This included interviews with planners, behaviour analysis on the website, and even AI assisted sentiment analysis on the web inquiry form.


      #### Pain points


      * Planners wasted a lot of time on providing quotes for customers that could never afford the system. Customers were often unwilling to provide their budget upfront.

      * Planners found many customers who made inquiries didn't understand the basic concepts of the shelving system. 

      * Customers were hostile to the planning process. "Just let me buy it" was a common theme in customer feedback.

      * Customers were being put off from buying into a modular system they could add to over time, because components were not available to purchase online. 

      * Customers who went through the process appreciated planner's expertise - (clear survivor bias here).


      #### An exercise in the possible


      The idea of a customer facing drawing tool was far from a new idea within the business, but had been met with scepticism in the past. The key issue was that the various rules were viewed as too complex to implement in a web based tool. 


      Therefore, the main aim of this prototype was to prove that a sufficiently complex tool could be created to follow these rules.


      #### Requirements


      * System rules would need to be applied; for example a table can only be attached at a specific height.

      * Customers should be able to use the tool with no prior knowledge of the shelving system.

      * Having used the tool a customer should understand more about the system. It should be informative and educational.

      * It needed to inform customers of prices.
  - heading: Research & Discovery phase
    intro: "Most of my research on the 606 sales process was in hand. Now I focused
      on what makes a good furniture planner. "
    standout: false
    headerimage: /img/research.png
    body: >-
      #### Competitor tools


      I found nearly all of them were staged, allowing users to define the wall area first, pick tracks then place components in separate sections. 


      I looked at many different tools, but Ikea's Algot planner stood head and shoulders above all the other examples I looked at.


      ![Screenshot of Ikea's Algot planner](/img/algot-planner-screenshot.jpg "Screenshot of Ikea's Algot planner")


      There were several key features which I recognised as UX design to learn from: 


      * Users can skip to step 3 by selecting from a list of templated examples. Giving them an immediate price, and promoting uses of the product a customer might not have considered. These can be filtered by size and room.

      * The interface is simple, and offers multiple ways for a user to complete a task. For example the wall dimensions can be set by dragging handles, or by clicking on measurement labels and typing in a number.

      * Measurements on the system visualisation can be toggled, providing important information without visual clutter.

      * Contextual labels instruct users on the function of each UI element. These shake a couple of times to draw attention, but would disappear once the controls were used.

      * I was particularly enamoured with the dynamic illustrations on the component section. It let users know what would fit on different shelves by using common objects rather than relying on measurements. 

      * Once complete, a unique sharable link was generated so that is could be shared with a partner or housemate.


      I would apply many of these lessons to my work on this prototype.
  - heading: Wireframing and design
    intro: "The prototype evolved continually as we built it. Adding features in
      series to avoid leaving anything half finished. "
    headerimage: /img/design-_-solution.png
    standout: false
    body: >-
      #### Wireframes


      After sketching out some ideas on paper, I made these low-fi mockups. One of our development team was remote, XD it made it easy to share and keep updated with any changes I made. 


      ![Mockup of dimensions screen](/img/screen-2.jpg "Mockup of dimensions screen")


      The wall dimensions would be entered into simple inputs; the time spent on making this into a draggable area was better spent on the core functionality. 


      ![Mockup of tracks screen](/img/screen-2-1.jpg "Mockup of tracks screen")


      Using total system dimensions rather than measurements from walls would allow us to ignore the placement on walls altogether, e-tracks would always be centered.


      The wall dimensions were still requirements for the sales process, and they also allowed the tracks to be filtered down by height.


      ![Mockup of tracks screen part 2](/img/screen-2-1-–-1.jpg "Mockup of tracks screen")


      For this initial version, we would allow placement of the tacks anywhere. Tracks placed far away would snap to 90, and when placed closer would snap to 65.


      I also started wanted to introduce some guidance here, making sure the user was unable to continue without at least one bay. 


      ![Mockup of tracks screen part 3](/img/screen-2-1-–-2.jpg "Mockup of tracks screen")


      I already had in mind at this stage, that the functionality of the 2nd and 3rd stages should be similar if not identical. This was one of the reasons I decided against having bays. 


      ![Mockup of components screen](/img/screen-3.jpg "Mockup of components screen")


      Again components would be added to the bays with drag and drop functionality. We initially used colour coding to indicate whether a component would be allowed 


      #### Minimum viable product


      These were light on detail, but by the end of the two weeks we had built this design with all the basic requirements met. Using libraries for both the drag and drop functionality, and the rules engine saved us a lot of time.


      The prototype at this point could validate E-track placement using the wall dimensions, and component placement using a rules engine. It showed prices, used drag and drop, and allowed filtering of components by type. 


      #### Two week extension


      With such great progress being shown, we were given another two weeks to work on it. 


      Having the core functionality in place meant I could start to be more ambitious with features, especially with the informative and educational aspects which were lacking in the initial version. 


      #### More features


      * Much more guidance would be provided, tooltips, warnings, and instructions for each stage. 

      * We would add in colour customisation (the shelving comes in 6 colours)

      * We would add an additional category for validation. Warnings would be included separately to errors. 

      * We would add the option to switch to inches.

      * We would add the ability to change currency

      * We would generate a sharable link


      Features such as multiple currencies and the shareable link were tasks I gave to our senior developers. Importantly they could get to work on these features without having to wait for me to come up with a visual design. 


      This provided me a bit of breathing space to put more thought into the UX of the tool. 


      #### Instruction messages


      ![Mockup of new layout](/img/your-space-landing-–-3.jpg "Mockup of new layout")


      This header bar would be consistent across all stages, which one space for informational messages. Breadcrumb navigation would be used so users could see how far along in the process they were.


      #### Gamification


      In games, mechanics are introduced early on that are then built upon  later in the game. For example a gap in an early level can only be passed by jumping. In later levels the designer knows that the player understands how to jump, and can rely on this when adding in other mechanics and challenges. 


      Applying this concept to the tool, I ensured there was a consistent visual language for interactions. 


      ![Consistent visual language ](/img/interaction-options.jpg "Consistent visual language ")


      This let the configurator to build up complexity without over-reliance on instruction messages and hints, which are often overlooked by users.


      #### Adding difficulty


      In the first prototype the tracks could be snapped into bays from anywhere in the wall area. Even though this was much easier, it wasn't consistent with the components stage.


      ![Illustration of changes to drop targets](/img/drop-targets.jpg "Illustration of changes to drop targets")


      Reducing the snapping area to match the components section taught the user how to use the next section, where large snapping areas weren't practical.


      #### Guarantees


      To continue from the second section, a user must have created at least a single bay structure. So I could guarantee by the third stage:  


      * They had selected an item from the list. Learning blue meant selection.

      * They had dragged and dropped a track into the green area. Learning the function of the green drop targets. 

      * They had seen the colour change from red to unshaded as they dragged it into the green area. Learning that the illustration changes from red when placed correctly. 


      #### Contextual labels & instructions


      Instruction messages were added to tell users what they should be doing at each step of the process, contextual labels would be used to explain the product. 


      Keeping these two functions separate, all instructions would appear in the same place in the grey header bar. To draw attention to these messages, I added the animated the pointing hand. 


      The tooltips followed the same colour scheme as the the other interactions, with the addition of ubiquitous warning and information icons.
  - body_html: " "
    heading: Outcomes
    intro: The tool was received well by the company.
    body: >-
      #### Long term plans


      The tool proved the point we wished to make; a web-based planning tool could be sufficiently complex to follow as many rules as necessary. It also showed that it was within the reach of even a small development team.


      This project, and along with research I carried out, provided the impetus for the company to re-prioritise crucial digital infrastructure work. This would provide the necessary framework to support a tool such as this.
    headerimage: /img/outcomes.png
other_projects: More projects
featuredpost: false
---
