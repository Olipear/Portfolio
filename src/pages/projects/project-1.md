---
templateKey: project-entry
date: 2020-06-22T13:16:57.702Z
featuredproject: true
title: Adaptive UI example
description: In selling this design icon I went for an adaptive interface design
  and was very sucessful in improving sales. I also had fun making those lovely
  renders!
featuredimage: /img/620-image.jpg
featuredlink: https://www.vitsoe.com/gb/620/buy
featuredlinklabel: See it live
sections:
  - heading: Brief
    headerimage: /img/brief-_-problem.png
    standout: false
    intro: >-
      Sales of Vitsoe's 620 chair and footstool product we relatively low. The
      majority of sales were happening in their retail spaces or via direct
      communication with planners.


      Due to the product's nature, this isn't especially unusual, since most people would want to sit in one before purchase. However, since Vitsoe only operated 4 physical shops worldwide, improving online sales was important. 
  - heading: Research & Discovery phase
    intro: Now I'd fixed some of the more obvious problems I started to look at
      larger improvements that could be made.
    standout: false
    headerimage: /img/research.png
    body: >-
      #### Competitor evaluation


      At almost £7000, the 620 chair really had one main competitor, the much better known 'Eames chair', retailing at around £5000. The other key competition were from places like Made.com, and other designer outlets. However even the most expensive chairs from sites like Made.com were not directly competing, so I broadened my search to include other high end luxury good. 


      Since another relatively unique feature of the 620 was it's customisation options, I found the luxury car market to be good case studies to look to.
  - heading: Wireframing and design
    intro: After identifying some of the key use cases and looking closely at how
      our competitors handled similar UI challenges I moved on to creating
      several wireframes
    headerimage: /img/design-_-solution.png
    standout: false
    body: >-
      #### Features 


      I had come up with the following list of features that should be included in the new interface.  * The product needed to be shown either from multiple angles or with a 360 spin


      * The texture of the product was crucial, close up images of the leather needed to be included when choosing colour

      * Footstools should be their own product on *equal footing* (heh) to the chair.

      * Clear indication of price for the different customisation options available. 

      * Clear indication of product dimensions.

      * Clear indication of lead times for delivery.
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
