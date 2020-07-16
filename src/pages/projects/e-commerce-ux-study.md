---
templateKey: project-entry
date: 2020-07-10T11:08:10.177Z
featuredproject: true
title: E-Commerce UX study
description: "Improving sales for the 621 table involved changes across the the
  website and digital marketing. "
featuredimage: /img/slide-20-–-1.jpg
featuredlink: https://www.vitsoe.com/621
featuredlinklabel: See it live
sections:
  - body_html: " "
    heading: "Brief "
    intro: "As Vitsoe's most accessible product in terms of price point, the 621
      table was a gateway product that led on to further sales. "
    body: >-
      #### Objectives


      The 621 table was the first product I was asked to look at in terms of improving online sales. 


      This meant the UX process I went through here was the most comprehensive, and would go on to inform later work on other products.
    headerimage: /img/brief-_-problem.png
  - body_html: " "
    heading: Research
    headerimage: /img/research.png
    intro: One of the first things I implemented when starting out at Vitsoe was
      google analytics, and custom events tracking.
    body: >-
      #### Resources


      My main resource was google analytics, I had set up custom event tracking on things like product customisation, videos and galleries 6 months earlier.


      There were some large gaps that I'm aware could have significantly improved my UX process. Social media marketing was untracked, email promotions did not use trackable links, and I would not have access to customers for interviews, focus groups or user testing. 


      My window to the customer was via the sales teams, wherever possible I used them to better understand customer motivations and frustrations. 


      #### Personas


      The UX personas I created involved a lot of collaboration with the most experienced Vitsoe salespeople, along with website usage data. 


      ![UX Personas page 1](/img/personas-1.jpg "UX Personas page 1")


      ![UX Personas page 2](/img/personas-2.jpg "UX Personas page 2")


      These were representative of both Vitsoe's existing customer base, and their target market. The 606 shelving system is Vitsoe's main product, so they are built with this in mind. With information like their living situation being highly relevant. 


      I could then adapt these base personas where needed for a specific project. For example, in the base persona Hans owns a shelving system from a competitor, and wants to purchase additional components from Vitsoe. For this project he would own a 620 chair and want to buy the 621 table to accompany it.


      #### Conflicting business goals


      Vitsoe wanted to be 'the gatekeeper for Dieter Rams'. Large portions of the website are taken up with the career, history and philosophy of the designer's work. These pages were ranked at the top of search engines for 'Dieter Rams', driving a huge volume of traffic to the site. 


      The company also has its own publication 'Vitsoe voice'; a collection of lifestyle and design articles. Many featured vitsoe products, but they would often be features on an interesting Vitsoe customer, or Rams's design philosophy. 


      ![Previous homepage layout](/img/previous-homepage.jpg "Previous homepage layout")

       Only 4% of users would navigate to Vitsoe voice from the homepage despite its prominence here. When I looked into readership, I found most were existing customers, and they were arriving here via email newsletters.

      Website usage showed neither the editorial nor the Rams pages were driving sales. The most popular entry point for the site was a page explaining Rams's 10 principles of design, a mouse heatmap showed most visitors were copy-pasting these principles before leaving the site. Very few of these users ever visited other parts of the site, or returned.


      Meanwhile sales teams were reporting back to me that many customers, even existing customers, were surprised to learn that Vitsoe had an online shop at all. 


      ### It was clear that the website was trying to serve several different purposes and not doing any of them well.


      I had to confront the business owners with some difficult questions about what their business goals for the website were. They reaffirmed that they wanted the site to be first and foremost a tool for selling online.


      #### Site behaviour


      Now looking closer at the 621 area, split into four pages, I found this to be a microcosm of the larger issues I'd found. 


      TODO: add diagram of original page structure in 621 


      Links from elsewhere on the site pointed at the introduction section, and with the path /621, it was also the most popular entry point for organic searches for the product. Of the 70% that didn't leave the site from here, less than half visited other pages within the 621 area.


      Prominent links took users away of the 621 area entirely, back to pages about Dieter's career and the good design principles. 


      Overall just 9% of users who reached one of the other 621 pages ever reached the buy page. 


      The pages were heavy on text were lacking substance on the product itself. With a page titled 'Design and History', it added to the impression this could be an informational site about Dieter Rams rather than an online shop. 


      #### Purchase page


      The purchase page was commonly the last page in a user journey, where customers were making a purchase decision. Few people went back to gallery and detail pages, but this was likely because they had already had an opportunity to see these. Of course those who deliberated longer and spent a lot of time circling through the various pages were much more likely to make a purchase. 


      The UI itself was well laid out. 90% of those that didn't bounce interacted with the customisation controls, so their purpose seemed to be clear enough. 


      #### Stock messages


      One area for concern was the delivery information, which gave an estimate, and when stock was below 10, a low stock warning. At the time Vitsoe was struggling with stock levels and production, so this message was often showing. 


      I delved into the stock calculations on the backend and found they were being calculated incorrectly. I worked with the production team to rectify this immediately.
  - body_html: " "
    heading: "Design "
    intro: "This was mostly a UX design, I needed to change very little of the UI
      itself. "
    headerimage: /img/design-_-solution.png
    body: >-
      #### Making the product center of attention


      The deeper issues with the perception of the site were the first thing I needed to address. 


      TODO: insert homepage mockup here. 


      This proposed layout simply shifted elements around, meaning it carried a low development cost. 


      Other changes that supported this;


      *  'Products' was changed to 'Online shop'.

      * Links were changed from 'read more' to 'Buy online' or 'Configure and buy'

      * Links for products were pointed at purchase pages, rather than introduction pages.


      #### Working with marketing


      Even moving it to the bottom of the page, I never discounted the value the editorial had. I used tracking of ecommerce conversion to highlight specific articles that were driving sales, even with what appeared to be existing customers. Articles that focused on products were better at driving sales.


      I also built the marketing team a dashboard in Google Data Studio. I helped start to measure how effective their newsletters, social media, and articles were at driving sales. 


      #### Fixing the user flow


      The existing structure was laid out perfectly for users who would visit each page, read all the content contained, and move onto the next section. The reality is that people don't use websites like this.


      TODO: insert UX design page here. 


      Essentially my strategy was to simplify, following Dieter's own rules, anything that was not strictly supporting the products function should be removed. 


      I was able to eliminate one page entirely, with the introduction page and design history page containing mostly duplicated information. 


      I also changed the order these pages would appear. Making /621 the purchasing page. The design and details page came after, for those who had seen the product for sale and wished to read more about it.


      #### Gallery content


      The galleries were important for building aspiration, and also played a role in the 621's gateway strategy. Gallery images for the table often featured other vitsoe products.


      All the gallery pages at the time had images in a list view, but they also had a fullscreen gallery lightbox which allowed users to scroll through the content. Event tracking showed the lightbox was the preferred method of navigating through them.


      Using the existing functionality of the lightbox and inserting it into the purchase page would make the images more accessible, and remove another lengthy page.


      I had wireframed a some layouts for this on paper; the key decision was whether I could use the existing product image to open the lightbox, or it needed a separate UI element. 


      TODO: insert page design


      If it were available I'd have liked to use A/B testing here, but I had to choose now, and measure later. I decided to use the existing product image for the lightbox but I was aware this was a risky decision. 


      My main concern was that even with good iconography and labeling, a user would reasonably expect a lightbox to open larger versions of the studio photography.  


      Another smaller change here was to make the product image landscape on mobile, and square on desktop. Using a 16:9 ratio on mobile gave more space for the controls to be seen by a user without need to scroll up and down the page to see the product change colour and size.
  - body_html: " "
    heading: Follow up
    intro: I continued to make improvements to the initial design long after the
      changes were launched.
    headerimage: /img/brief-_-problem.png
    body: >-
      #### Behaviour changes


      When I compared the four months either side of the homepage and 621 area changes being launched:


      * Vitsoe Voice readership was slightly higher. As my research showed, it was mostly being read by existing customers, so moving it further down the page did not damage it. 

      * Navigation from the homepage to product pages increased by 2%. In raw numbers this accounted for an additional ~4,000 pageviews.

      * Views for the buy page increased by 535%, and all key page metrics improved significantly.

      * Far fewer users reached the details page, but those that did, were more likely to buy, and spent much longer on the page than before.


      The direct affect these changes made on sales was difficult to measure.


      TODO: insert chart of sales


      This graph looks fantastic on the face of it. However adding context shows how the changes I made might not be fully responsible for the increase in sales.


      TODO: insert chart of sales with annotations


      Improving the user experience on the website didn't end the production problems the company had, and the refocusing of marketing efforts could have had a larger impact. 


      #### Galleries


      In the four months before and after launching the changes; there were 9,780 unique events for opening the gallery vs 1,254 unique pageview for the previous gallery page. An increase of 780%!


      This was of course mostly because the containing page the lightbox  also had a large increase in views. So I also looked at the % of pageviews that resulted in a gallery open event. Excluding those who bounced, 95% of users opened the gallery lightbox. 


      I would later make further improvements to the gallery, and updated the custom icon to the material design gallery icon - along with using material design icons across other areas of the site.


      TODO: add gallery lightbox screenshot. 


      This redesign could have a project write up of its own. But importantly, even a year later, I was still refining the design.
other_projects: More projects
---
