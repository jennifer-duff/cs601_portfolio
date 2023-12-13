# JBD Development - Portfolio Site

## Site Design
A 3-color palette is used (dark navy blue, cream, and rose red). The design is clean, simple, and has a "dark mode" asthetic. 

Many different elements are styled, including:
- The `body`
- The `main` section
- Headings
- Anchor tags
- The `header`, including the `nav` and its subelements
- Unordered lists and their list elements
- The `footer`
- All images
- Tables
- Elements that are unique to the individual pages:
    - Each `section` on the "Portfolio" page
    - The video on the "About" page
    - The `.resume-wrapper` on the "Resume" page
    - The graphic elements on the "Home" page
    - And more!

## Site Layout
The site is fully responsive, and the layout & styling updates dynamically as the window size changes. JavaScript is used to implement a hamburger menu in place of the standard desktop navigation when the window becomes narrow enough. Flexbox is used extensively to make responsive layouts for many of the site's elements. There are also 4 media queries for `max-width`: one at `1600px`, one at `1490px`, one at `850px`, and one at `675px`.

## Text
All text is an appropriate size, font, and color to be readable at any window size.

## Navigation
The navigation is 100% identical across all pages, as the site's `<header>` is a Vue component that is shared across all pages.

## Images
All pages have at least one image:
- index.html:
    - `waving_hand_emoji.png`
- about.html:
    - `headshot.png`
- portfolio.html:
    - `scheduleBooker.png`
    - `termtracker.png`
    - `weatherApp.png`
- resume.html:
    - `woman_technologist_emoji.png`
    - `gradcap_emoji.png`
    - `strong_arm_emoji.png`
- contact.html:
    - `linkedin-logo.png`
    - `github-logo.svg`
    - `envelope_emoji.png`

Every image has an `alt`, `width`, and `height` property. Most are set both inline and in `styles.css`; however, a few images’ width and height are set only in CSS.

## Links
Links are found in the following places:

- Internal links:
    - Navigation (“home,” “about,” “portfolio,” “resume,” and “contact” links in the header)
    - Site logo in header (links to home page)
- External links:
    - `portfolio.html`:
        - “ScheduleBooker” github link
        - “TermTracker” github link
        - “Weather” github link
    - `contact.html`:
        - Linkedin profile page link
        - GitHub profile page link
        - Email link (This will open an external email client if one is installed. For instance, on mobile it opens my Gmail app. However, on my desktop I don’t have an email application installed, since I just access my email in my browser. Therefore, the link’s functionality doesn’t have a use case for me on my desktop). 
- Other:
    - The form on the “Contact” page is intentionally non-functional. Since this site is live on the internet, I didn’t want to give people a way of contact me. However, I still wanted to demonstrate the user experience flow that I would use if I wanted to include a real contact form. I’ve therefore purposefully halted the form submission in formSubmission.js using event.preventDefault() in a “submit” event listener on the form. 

All links have been tested in Chrome, Firefox, Edge.

## HTML5 Elements
The site uses a variety of HTML5 semantic elements, including:

-	`section`
-	`img`
-	`video`
-	`table`
-	`article`
-	Headings (`h1`, `h2`, `h3`, etc.)
-	`ul` and `li`
-	Anchor tags (`a`)
-	`header`
-	`footer`
-	`nav`
-	Paragraphs (`p`)

Bold, italics, highlighting, etc. are handled via CSS rather than inline, but all are present in various places throughout the site.

## JavaScript
JavaScript is used on all pages to handle mobile vs desktop navigation. When the window size gets to be equal to or smaller than the mobile width breakpoint (which I set at 675px), the navigation collapses into a hamburger menu. When the window size is greater than this, the full menu is displayed.

JavaScript is also used on the “Contact” page to update the DOM when the contact form is submitted. A “submit” event listener is attached to the form, which replaces the inner HTML of the form with a success message when the submit button is pressed. 

## Vue
Vue components are used for the header and footer, which are found on every page of the site. I decided to make these elements Vue components specifically because they are used on every page, so using one Vue component for each of these occurrences made my code more DRY (i.e., removed the necessity for repeated code). If I had more time, I would have loved to use Vue to make my site a single page application.

## DOM Updates
The DOM is updated on the “Contact” page when the user submits the message form. On submit, the inner HTML of the div containing the form is updated: the form is replaced with text thanking the user for their message.

## Accessibility
Accessibility is taken into acount in several ways:

- A `<noscript>` tag is added to the `<header>` on each page to alert the user to the fact that site navigation is nonfunctional when JavaScript is disabled.
- All content is still useable with CSS and/or images disabled.
- The mobile navigation is still readable by screen readers even when visually hidden.

## Extras
The site uses flexbox extensively. The `<body>` of every page is a flexbox. This allows each page’s content to be properly aligned vertically and horizontally, and it also allows the `<main>` section to fill the remaining space between the header and footer (via the `flex` property), even if the page’s content doesn’t naturally take up at least that height. The `<header>` is also a flexbox to facilitate proper alignment of its contents, as is the `.menu` class within it. The primary content of most pages is also contained within a flexbox (see: the `.home-content` and `#intro-box` sections of the “Home” page, the `.about-section` class on the “About” page, the `.project-content` class on the “Portfolio” page, and the `.contact-content-container` class on the “Contact” page). There are also many other elements that use flexbox – altogether there are 17 flexbox instances on the site.

There are also 4 media queries for the `max-width` property. These are used to add styling to make the pages responsive as the screen size gets smaller. Things like element width, flexbox direction (i.e., changing flex-direction from row to column), and font size are changed to make the site’s content fit better on narrower, longer screens.
