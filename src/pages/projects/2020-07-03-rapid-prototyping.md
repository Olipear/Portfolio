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


      Other competitor tools provided examples of pitfalls to avoid: 


      * The Kriptonite configurator was incredibly frustrating to use although aesthetically it was very pretty. Moving components on bays required users to click arrows repeatedly, you were not able to drag and drop items.
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


      #### Three step process


      Staging the configurator was unquestionably going to be the most effective way of
other_projects: More projects
featuredpost: false
---
