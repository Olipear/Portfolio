---
templateKey: project-entry
date: 2020-07-03T16:06:08.432Z
featuredproject: true
title: Rapid prototyping
description: This proof of concept was part of a wider investigation into how
  vitsoe could improve the purchase process for the 606 Shelving System.
featuredimage: /img/furnituretoolfeatured.jpg
featuredlink: https://www.youtube.com/watch?v=8SOaF-Motuo&feature=youtu.be
featuredlinklabel: See my presentation
sections:
  - body_html: " "
    heading: Overview
    intro: "This project was a proof of concept which informed longer term business
      objectives. "
    headerimage: /img/about.png
    body: >-
      #### Role


      In this project I took on a product designer role. Getting stuck into the development work whilst providing direction and design. 


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


      Briefly*:* 606 is a modular shelving system. 'E-tracks' are directly attached to walls or posts. Various components such as shelves, tables, and cabinets are attached to tracks with pins. There are two bay widths for components, 65cm and 90cm. 


      The majority of the sales process is handled by 'planners' (essentially salespeople), who would be trained to understand the limitations of the system.


      Planners would receive inquiries via a webform, or direct email. They used a  Java desktop app to create a plan for the shelving system. 


      The entire digital infrastructure of the company is built around this application, interfacing with stock, accounting, customer and account systems.


      #### Leading up to the prototype


      I was researching the entire sales process for 606 in depth. This included interviews with planners, behaviour analysis on the website, and even AI assisted sentiment analysis on the web inquiry form.


      Some of the key pain points were: 


      * Planners wasted a lot of time on providing quotes for customers that could never afford the system. Customers were often unwilling to provide their budget upfront.

      * Planners found many customers who made inquiries didn't understand the basic concepts of the shelving system. 

      * Customers hated the idea of having to go through a salesperson. "Just let me buy it" was a common theme in customer feedback.

      * Customers were being put off from buying into a system they could add to over time, because they didn't like the idea of having to call or email someone to do so. 

      * Customers who went through the process appreciated planner's expertise - management were blind to the survivor bias here.


      #### An exercise in the possible


      The idea of a customer facing drawing tool was far from a new idea within the business, but had been met with scepticism in the past. The key issue was that the various rules were viewed as too complex to implement in a web based tool. 


      Therefore, the main aim of this prototype was to prove that a sufficiently complex tool could be created to follow these rules.


      The requirements of this prototype were explicitly laid out: 


      * Rules which planners would apply would need to be followed - for example specific components should not be hung in certain places.

      * Customers should be able to use the tool with no prior knowledge of the shelving system.

      * Having used the tool a customer should understand more about the system. It should be informative and educational.

      * It needed to inform customers of prices.


      As 'UX developer' I also part of the development team, consisting of four developers.
  - heading: Research & Discovery phase
    intro: "Once the go-ahead was given for the proof of concept, looked at what
      makes a good furniture planner. "
    standout: false
    headerimage: /img/research.png
    body: >-
      #### Competitor tools


      I found nearly all of them were staged, allowing users to define the wall area first, pick tracks then place components in separate sections. 


      Ikea's Algot planner was really head and shoulders above all the other examples I looked at.


      ![Screenshot of Ikea's Algot planner](/img/algot-planner-screenshot.jpg "Screenshot of Ikea's Algot planner")


      There were several key features which I recognised as UX design to learn from: 


      * Users can skip to step 3 by selecting from a list of templated examples. Giving them an immediate price, and promoting uses of the product a customer might not have considered. These can be filtered by size and room.

      * The interface is simple, and offers multiple ways for a user to complete a task. For example the wall dimensions can be set by dragging handles, or by clicking on measurement labels and typing in a number.

      * Measurements on the system visualisation can be toggled, providing important information without visual clutter.

      * Contextual labels instruct users on the function of each UI element. These shake a couple of times to draw attention, but would disappear once the controls were used.

      * I was particularly enamoured with the dynamic illustrations on the component section. It let users know what would fit on different shelves by using common objects rather than relying on measurements. 

      * Once complete, a unique sharable link was generated so that is could be shared with a partner or housemate. 


      The Atlas A4S builder unlike the the Algot planner did not take into account wall dimensions, or positioning on the wall. Instead it displayed system dimensions, and let the user decide what would fit. This gave the user all the information they needed to make sure it fit, without demanding they had their wall dimensions to hand.


      Other competitor tools provided examples of pitfalls to avoid. The Kriptonite configurator was incredibly frustrating to use although aesthetically it was very pretty. Moving components on bays required users to click arrows repeatedly. Drag and drop functionality is far superior.
  - heading: Wireframing and design
    intro: "The prototype evolved continually as we built it. Adding features in
      series to avoid leaving anything half finished. "
    headerimage: /img/design-_-solution.png
    standout: false
    body: >-
      #### Initial features


      For the initial 2 week project I had decided the tool would: 


      * Be staged in three sections - wall dimensions - track placement - component placement

      * Adding tracks and components should use drag and drop functionality

      * The list of components should be filterable 


      #### Wireframes


      After sketching out some ideas, I went straight into XD to create low-fi mockups. One of our development team was remote, so it made it easy to share and keep updated with any changes I made. I also made sure that any interaction and frontend elements I wasn't working on myself, were handled by a dev who could be physically present, so I could use pen and paper to sketch out ideas that weren't covered in the mockups. 


      ![Mockup of dimensions screen](/img/screen-2.jpg "Mockup of dimensions screen")


      The wall dimensions needed to be exact for Vitsoe's planning process, having a draggable wall size was probably not desirable, and I wanted to save our efforts for the following, more complex sections. 


      ![Mockup of tracks screen](/img/screen-2-1.jpg "Mockup of tracks screen")


      Using system dimensions rather than measurements from walls, would allow us to ignore the placement on walls altogether, the tracks would always be centered. 


      The wall dimensions were still requirements for the sales process, and they also allowed the tracks to be filtered down by height.


      ![Mockup of tracks screen part 2](/img/screen-2-1-–-1.jpg "Mockup of tracks screen")


      For this initial version, we would allow placement of the tacks anywhere. Tracks placed far away would snap to 90, and when placed closer would snap to 65.


      I also started wanted to introduce some guidance here, making sure the user was unable to continue without at least one bay. 


      ![Mockup of tracks screen part 3](/img/screen-2-1-–-2.jpg "Mockup of tracks screen")


      Editing the tracks by dragging them out of the wall area was one of the reasons we decided against adding entire bays as with the Algot planner. 


      ![Mockup of components screen](/img/screen-3.jpg "Mockup of components screen")


      Again components would be added to the bays with drag and drop functionality. We initially used colour coding to indicate whether a component would be allowed 


      These were light on detail, but by the end of the two weeks we had built these mockups with this core functionality. Using libraries for both the drag and drop functionality, and the rules engine saved us a lot of time.


      The prototype at this point could validate E-track placement using the wall dimensions, and component placement using a rules engine. It showed prices, used drag and drop, and allowed filtering of components by type. 


      #### Two week extension


      With such great progress being shown, we were given another two weeks to work on it. 


      Having the core functionality in place meant we could start to be more ambitious, especially with the informative aspects. My mockups became more detailed, and we looked at some of the features we'd initially marked as 'nice to have'. 


      * Much more guidance would be provided, tooltips, warnings, and instructions for each stage. 

      * We would add in colour customisation

      * We would add an additional category for validation. Warnings would be included separately to errors. 

      * We would add the option to switch to inches.

      * We would add the ability to change currency

      * We would generate a sharable link


      Features such as multiple currencies and the shareable link were tasks I gave to our senior developers. Importantly they could get to work on these features without having to wait for me to come up with a visual design. 


      This provided me a bit of breathing space to put more thought into the UX of the tool. 


      ![Mockup of new layout](/img/your-space-landing-–-3.jpg "Mockup of new layout")


      The grey bar was to be used for all instructional and informational messages. Initially it would drop down when required, but later I decided to have it visible all the time so that users would always know where to look for guidance. 


      #### Gamification


      In games, mechanics are introduced early on that are then built upon  later in the game. For example a gap in an early level can only be passed by jumping. In later levels the designer knows that the player understands how to jump, and can rely on this when adding in other mechanics and challenges. 


      Applying this concept to the tool, I ensured there was a consistent visual language for interactions. 


      ![Consistent visual language ](/img/interaction-options.jpg "Consistent visual language ")


      This let the configurator to build up complexity without over-reliance on instruction messages and hints, which are often overlooked by users.


      In the first prototype the tracks could be snapped into bays from anywhere in the wall area. 


      TODO insert diagram showing change of soft drop targets to hard drop targets.


      This wasn't consistent with the behaviour in the components stage, even though it made it easier to use. Reducing the snapping area to match the components section taught the user how to use the next section, where large snapping areas weren't practical or desirable.


      To complete the section a user must have at dragged and dropped more than one track onto the green target area. So I could guarantee by the third stage:  


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
      #### Well polished for a prototype


      Ensuring the features were always achievable, and relying on libraries to do the heavy lifting meant there were no half finished features in the prototype.


      The visual design is minimalist, giving it the look of a finished product, without a great deal of effort put into styling. The most time consuming aesthetic feature were important functional elements such as the drag and drop interactions and tooltips. 


      Upper-management can often lack imagination when evaluating prototypes such as these, especially when coming from a non-technical background. Presenting the prototype in this state avoided common distractions on 'why it looks funny?', and kept focus on the business objectives it fulfilled. Of course this can be a double edged sword, with management and stakeholders asking, 'why can't we launch this?'. 


      #### Long term plans


      The tool proved the point we wished to make; a web-based planning tool could be sufficiently complex to follow as many rules as necessary. It also showed that it was within the reach of even a small development team.


      The business however was in no position to start changing their sales process. As previously mentioned, the existing Java app interfaced with every aspect of the company's technology stack.


      This project, and along with research I carried out, provided the impetus for the company to re-prioritise this crucial infrastructure work. This obviously a huge task and work on this is still ongoing at time of writing.
other_projects: More projects
featuredpost: false
---
