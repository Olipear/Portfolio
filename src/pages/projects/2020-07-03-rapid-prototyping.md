---
templateKey: project-entry
date: 2020-07-03T16:06:08.432Z
featuredproject: true
title: Rapid prototyping
description: This short proof of concept was part of a wider investigation into
  how vitsoe could improve the purchase process for the 606 Shelving System.
featuredimage: /img/furnituretoolfeatured.jpg
featuredlink: https://www.youtube.com/watch?v=8SOaF-Motuo&feature=youtu.be
featuredlinklabel: See my presentation
sections:
  - heading: Brief
    headerimage: /img/brief-_-problem.png
    standout: false
    intro: This prototype was part of a larger effort to improve online sales of the
      606 Shelving system.
    body: >-
      #### Background


      Briefly*:* 606 is a modular shelving system. 'E-tracks' are directly attached to walls or posts. Various components such as shelves, tables, and cabinets are attached to tracks with pins. There are two bay widths for components, 65cm and 90cm.  It's also relevant to mention the system is *very* expensive.


      The sales process for a new shelving system is complex, the majority of the sales process was handled by 'planners' (essentially salespeople). Planners would be trained to understand the limitations of the system, for example specific wall-types would limit the weight the system could hold.


      Planners would receive inquiries via a webform on the website, or sometimes via direct email. They then take that inquiry and create a 'drawing' (a plan for the system which includes all measurements). The drawing was made using an outdated, but well built Java desktop application. This application was central to the business, and interfaced with stock systems, their CRM (salesforce), and the website. 




      #### Leading up to the prototype


      I was researching the entire sales process for 606 in depth. This included interviews with planners, behaviour analysis on the website, and even AI assisted sentiment analysis on the web inquiry form.


      I found: 


      * Planners wasted a lot of time on providing quotes for customers that could never afford the system.

      * Planners found many customers who made inquiries didn't understand the basic concepts of the shelving system. e.g. there are two set bay widths.

      * Users were navigating away from a page called 'what's the cost' to the brochure download page to use a pdf download of the pricelist. The 'what's the cost' page did not have prices for individual components, but instead had example prices for complete systems.

      * Users didn't pay much attention to the informational pages in the 606 area of the site, and often skipped straight to the inquiry form. Information was generally poor, for example there was no complete list of components which could be hung on the tracks.

      * Users were hostile to being asked their budget directly on the webform. Often when they did enter a number, it was too low for even the smallest system.

      * Users would enter impractical wall dimensions in the webform, e.g. 55cm wide, when the smallest bay width is 65cm. 

      * Specific fields on the webform were able to reliably predict when an inquiry would never lead to a sale.

      * Initially most customers hated the idea of having to go through a salesperson. "Just let me buy it" was a common theme in customer feedback. 

      * Customers who went through the process appreciated planner's expertise (there is obvious survivor bias here).


      #### An exercise in the possible


      Creating a new customer-facing tool was not the only option discussed or presented to management. However my research indicated it would have the largest impact in addressing the many issues with the sales experience I found. 


      The idea of a customer facing drawing tool was far from a new idea within the business, but had been met with scepticism in the past. The key issue was that the various rules were viewed as too complex to implement in a web based tool. The existing desktop application had been expensive and taken months to build using an external development studio. 


      Therefore, the main aim of this prototype was to prove that a sufficiently complex tool could be created to follow these rules.


      The requirements of this prototype were explicitly laid out: 


      * A list of rules which needed to be followed, for example tables must only be allowed at a specific height etc. 

      * It should be educational/ informative. Customers should be able to use the tool with no prior knowledge of the shelving system.

      * It needed to show prices


      The project was scheduled to last two weeks, but after progress was shown it was extended an additional two weeks. 


      As 'UX developer' I was part of the development team, which consisted of a further 2 senior developers, and a junior developer.
  - heading: Research & Discovery phase
    intro: "Much of the research was in hand, once the go-ahead was given for the
      prototype, I conducted further research on what makes a good furniture
      planner. "
    standout: false
    headerimage: /img/research.png
    body: >-
      #### Competitor tools


      Having researched and understood the problems I was trying to solve, I went straight into examining other similar tools. 


      I found nearly all of them were staged, allowing users to define the wall area first, pick tracks then place components in separate sections. 


      Ikea's Algot planner was really head and shoulders above all the other examples I looked at. Other Ikea planners used a 3D plugin, but the algot used a simpler 2D illustrated interface, making it easy to understand. 


      ![Screenshot of Ikea's Algot planner](/img/algot-planner-screenshot.jpg "Screenshot of Ikea's Algot planner")


      There were several key features which I recognised as UX design to learn from: 


      * Users can skip to step 3 by selecting from a list of templated examples. Giving them an immediate price, and promoting uses of the product a customer might not have considered. These can be filtered by size and room.

      * The interface is simple, and offers multiple ways for a user to complete a task. For example the wall dimensions can be set by dragging handles, or by clicking on measurement labels and typing in a number.

      * Measurements on the system visualisation can be toggled, providing important information without visual clutter.

      * Contextual labels instruct users on the function of each UI element. These shake a couple of times to draw attention, but would disappear once the controls were used.

      * I was particularly enamoured with the dynamic illustrations on the component section. It let users know what would fit on different shelves by using common objects rather than relying on measurements. 

      * Once complete, a unique sharable link was generated so that is could be shared with a partner or housemate. 


      The Atlas A4S builder unlike the the Algot planner did not take into account wall dimensions, or positioning on the wall. Instead it displayed system dimensions, and let the user decide what would fit. I could see this would be advantageous not just because it removes an unnecessary decision, but it would make the interface much simpler. 


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


      The wall dimensions were still useful for the planning process, but also allowed the tracks to be filtered down by height, and limited the with of the system including safe space either side for accessing pins. 


      I think this was the right balance to take between AS4 and Algot's approaches. 


      ![Mockup of tracks screen part 2](/img/screen-2-1-–-1.jpg "Mockup of tracks screen")


      For this initial version, we would allow placement of the tacks anywhere. Tracks placed far away would snap to 90, and when placed closer would snap to 65.


      I also started wanted to introduce some guidance here, making sure the user was unable to continue without at least one bay. 


      ![Mockup of tracks screen part 3](/img/screen-2-1-–-2.jpg "Mockup of tracks screen")


      Editing the tracks by dragging them out of the wall area was one of the reasons we decided against adding entire bays as with the Algot planner. 


      An earlier sketch used buttons to add and remove additional bays, but I wanted to avoid the poor experience the Kyriptonite tool had, and stick to drag and drop.


      ![Mockup of components screen](/img/screen-3.jpg "Mockup of components screen")


      Again components would be added to the bays with drag and drop functionality. We initially used colour coding to indicate whether a component would be allowed 


      These were light on detail, but by the end of the two weeks we had built these mockups with the core functionality. Using libraries for both the drag and drop functionality, and the rules engine saved us a lot of time.


      The prototype at this point could validate E-track placement using the wall dimensions, and component placement using a rules engine. It showed prices, used drag and drop, and allowed filtering of components by type. 


      We had met the basic requirements, but the informative aspect was still lacking.


      #### Two week extension


      Having the core functionality in place meant we could start to be more ambitious with our goals. My mockups became more detailed, and we looked at some of the features we'd initially pegged as 'nice to have'. 


      * Much more guidance would be provided, tooltips, warnings, and instructions for each stage. 

      * We would add in colour customisation

      * We would add an additional category for validation. Warnings would be included separately to errors. 

      * We would add the option to switch to inches.

      * We would add the ability to change currency

      * We would generate a sharable link


      Features such as multiple currencies and the shareable link were tasks I could leave to our senior developers. Importantly they could get to work on these features without having to wait for me to come up with a visual design. 


      This allowed me a bit of time to put more thought into the UX of the tool. 


      ![Mockup of new layout](/img/your-space-landing-–-3.jpg "Mockup of new layout")


      The grey bar was to be used for all instructional and informational messages. Initially it would drop down when required, but later I decided to have it visible all the time so that users would always know where to look for guidance. 


      I also decided at this stage to make the components list vertical. This provided a better aspect ratio for the active area. The horizontal list provided an area that was wide and short, but entering sensible wall dimensions required a rectangular wall to be significantly scaled down to fit. 


      The major focus was the drag and drop functionality and deciding how to explain to users why certain components couldn't or shouldn't be placed in specific places. 


      #### Drag and drop interactions


      Components already snapped to the tracks as they were placed, but I wanted to make it visually clear where they could be placed. 


      ![Interaction designs](/img/interaction-options.jpg "Interaction designs")


      The first panel were initial ideas of how to show various interactions. I decided against using green for valid placements so I could reserve that colour for drop targets. Each colour is then exclusive to its function.


      Custom cursors were another option I explored, iconography reinforced the colour coding. However once I started adding in tooltips they became a distraction. 


      Drop targets were copied from the Algot planner at first; the arrow elements were good visual clues. But when applied to the etrack drop targets this style no longer worked. So I changed it to simple semi-transparent blocks with Strong borders.  


      #### Gamification


      In games, mechanics are introduced early on that are then built upon  later in the game. For example a gap in an early level can only be passed by jumping. In later levels the designer knows that the player understands how to jump, and can rely on this when adding in other mechanics and challenges. 


      Applying this concept to the tool, I ensured there was a consistent visual language for interactions. Allowing the configurator to build up complexity without over-reliance on instruction messages and hints, which are often overlooked by users.


      In the first prototype the tracks could be snapped into bays from anywhere in the wall area. 


      TODO insert diagram showing change of soft drop targets to hard drop targets.


      This wasn't consistent with the behaviour in the components stage, even though it made it easier to use. Reducing the snapping area to match the components section taught the user how to use the next section, where large snapping areas weren't practical or desirable.


      We had already added validation to each stage, so that a user could not continue without having created at least one bay. To complete the section a user must have at dragged and dropped more than one track onto the green target area. 


      This validation now guaranteed: 


      * They had selected an item from the list. Learning blue meant selection.

      * They had dragged and dropped a track into the green area. Learning the function of the green drop targets. 

      * They had seen the colour change from red to unshaded as they dragged it into the green area. Learning that the illustration changes from red when placed correctly. 


      At one point, I made it a requirement that the user must delete at least one track, with accompanying instruction messages. This would guarantee they understood how to delete a component. However when testing this quickly became irritating, it was removed because we could not guarantee a user would go through this task only once. 


      #### Tool tips & instructions


      Instructions were added to instruct users what they should be doing at each step of the process, tool tips would be used to explain the product. 


      Keeping these two functions separate, all instructions would appear in the same place in the grey header bar. To draw attention to these messages, I added the animated the pointing hand. 


      Tooltips appeared first on the wall dimensions stage, since the user could only enter one dimension at a time, the wall would always be either too short or too narrow initially. The red tooltip would always appear at this point, explaining what the bay widths of the shelving system were. 


      Of course the tooltips followed the same colour scheme as the the other interactions, with the addition of ubiquitous warning and information icons. 


      The tooltips were especially valuable in the components section, teaching users about the rules of the shelving system.
  - body_html: " "
    heading: Outcomes
    intro: The tool was received well by the company.
    body: >-
      #### Well polished for a prototype


      Ensuring the features were always achievable, and relying on libraries to do the heavy lifting meant there were no half finished features in the prototype.


      The visual design is very minimalist, giving it the look of a finished product, without a great deal of effort put into styling. The most time consuming aesthetic feature were important functional elements such as the drag and drop interactions and tooltips. 


      Upper-management can often lack imagination when evaluating prototypes such as these, especially when coming from a non-technical background. Presenting the prototype in this state avoided common distractions on 'why it looks funny?', and kept focus on the business objectives it fulfilled. Of course this can still be a double edged sword, with management and stakeholders asking, 'why can't we launch this?'. 


      #### Long term plans


      The tool proved the pointed we wished to make; a web-based planning tool could be sufficiently complex enough to follow as many rules as necessary. It also showed that it was within the reach of even a small development team.


      The business however was in no position at the time start to start changing their sales process. As previously mentioned the existing Java app interfaced with every aspect of the company's technology stack, making it extremely difficult to alter. 


      The project provided the impetus to prioritise this long overdue infrastructure work.
other_projects: More projects
featuredpost: false
---
