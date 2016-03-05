# Learn HTML

Lesson 1

---

### Teachers

* Mr Tom
* Ms Alex
* Mr Lucas

---

### Rules

* Be Cool
* Raise your hand when you want to speak or need help.
* If you are stuck in a challenge, ask your neighbor, ask google, ask the teacher

---

### Lesson Format

Each lesson will last about an hour, and the format will go as follows:

* Introduce something new to learn.
* Watch me apply the topic on the projector.
* Exercises to practice the concept.

---

! http://i.giphy.com/XlhzCl8UQ3MaI.gif

---

### Lets get started

* Stand up
* Reach the Sky
* Touch your toes
* Run in place
* Take your seat

---

### Quick Overview

---

# What is programming?

---

# What is the internet?

---

### Learn HTML

You are going to learn html

---

### Character name

Everyone needs to think of a character name, if you can't think of one, use
this pattern to create one: [favorite reaction]-[favorite fruit]-[favorite-number]

---

### www.code10k.com

We are going to create a standard username and password for this class, then we
are going to create a project directory for your work.

---

# Watch me code

---

### Exercises

* login to code.code10k.com
* create your project using your character name
* in the index.html page, add `<h1>[Your Character Name]</h1>` inside the body section.
* click the save button
* click the refresh button to preview your page

---

### Notice

In the script tag of the index.html file, replace the current code with the following:

```
  System.import('learnHtml:ex0').then(v => v())
```

Then refresh and see if you got it right!

---

# Break

---

# HTML elements

Lesson 2

---

### What is HTML?

HTML is a markup language that describes how a internet browser should display documents and applications. HTML uses a repeatable pattern to understand the beginning and ending of a statement and the statement command.

   <command> contents </command>

Using the `less than` and `greater than` symbols wrapped around a command represents the beginning of the statement and the `less than`, `backslash`, `command` and `greater than` symbols represent the end of the statement.

---

### Paragraph Element

A common command is the `paragraph` command or which is represented as the `p`.  In html statements are called `elements` and they consist of a start `tag`, contents and end `tag`.

Paragraph Element

  <p>This is a paragraph</p>

Paragraph Start Tag

  <p>

Paragraph End Tag

  </p>

---

## Example

Demontrate to the class a collection of paragraph elements:

  The term HTML Element or Element is the term that describes the entire statement, start angle brackets, tag name, end angle brackets, contents, start angle brackets, back slash, tag name, end angle brackets.

  The term HTML Tag or Tag is the term that describes the actual command, usually used in context of `start tag` and `end tag`.  The start tag of the paragraph element is start angle brackets, p, end angle brackets.  The end tag of the paragraph element is start angle brackets, back slash, p, and end angle brackets.

---

## Exercises

Use the setup template to do all exercise, this template will help your validate your work.  You can find the template in the setup section below.

---

### Exercise 2-1

In the body section of the html document, there is a container element, inside that container element, start your exercise by creating a paragraph element with the following contents.

    Html is the markup language of the internet.  It stands for hyper text markup language. The specification or language contains a set of instructions that informs the browser what to display.

    Html consists of elements, these elements contain a start tag, contents and an end tag. They are the building blocks of an html document.

    A HTML Tag commonly refers to the tag name, but the actual description of the tag is the combination of angle brackets and tag name, and should be referenced as start tag and end tag.

---

Once you have finished creating 3 paragraph elements in your html document, in the script section of the import command, you want to import `learn-html:ex1` and invoke the `validate` command.

    <script>
      System.import('learn-html:ex1').then(validate => validate())
    </script>

This script will check your work and present you with a success message if you completed the exercise correctly, if you did not, it will present you with a description of what may be missing.  You can view the document and run the script by opening the document in your web browser of choice.

---

### Exercise 2-2

In this exercise, we want to use two elements, a paragraph element and a heading 1 element. The heading 1 element uses the h1 tag.  Ex: <h1>contents</h1> and of course the paragraph element that is represented using the p tag. Ex: <p>contents</p>

    I am a Heading 1 element

    I am a paragraph element

    I am another paragraph element

---

Validate your document by running the following command in the system import statement.

    <script>
      System.import('learn-html:ex1').then(v => v())
    </script>

---

### Exercise 2-3

Madlibs

1. [CharacterName]
2. [AliasName]
3. [PlanetName]
4. [PersonName]
5. [PersonName2]
6. [Adjective]
7. [Object]

---

Character Biography

[1] is born as [2] on the alien planet [3]. His parents [4] and [5] become aware of
a [6] planet earth. [4] sent [2] to the planet earth to become a superhero.

[2] is known as [1] on planet earth and has super human powers. [1] cares about
the planet earth and uses a [7] to ward off evil doers and keep the peace.

[Write your own paragraph]
---

# HTML List and Images

Lesson 3

---

! http://i.giphy.com/IMmOT1NAUsj7y.gif

---

### List

So we love to list things, lists are one of the most important features in html,
and there are two types of lists:

* unordered list
* ordered list

---

### Unordered list

* does
* not
* have an order

---

```
<ul>
  <li>does</li>
  <li>not</li>
  <li>have an order</li>
</ul>
```

---

## What does `ul` stand for?

---

## What does `li` stand for?

---

### Nested elements with block scope

So we are using two html elements, li does not have any meaning without ul, but
ul does not display any thing without li, these elements depend on each other to
work correctly.

---

! http://cdn.playbuzz.com/cdn/ac09e079-c66d-4416-bf06-5afacbe2595b/24fd3c36-7b0e-441d-8600-0380cc181248.gif

---

### Pop Quiz

If you created html, what you use as a command for ordered list?

Hint, if you called unordered list ul, then what would you call ordered list command?

---

# ol

---

### What does a basic ordered list look like?

1. first
2. second
3. third

---

### What about in code?

```
<ol>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ol>
```

---

# HTML Images

---

But wait, lets learn about HTML Attributes

---

An HTML Attribute is a label with an equals sign and a value, this equation is
placed inside the angle brackets of the start tag.

```
<tag-name attribute="value"></tag-name>
```

---

We use attributes to specify the source url of an image, and the alternate description, for the visually impaired.

```
<img src="http://image-path.com/image-name.png" alt="cute kitten"></img>
```

---

# Demo

---

# Exercises

---

### Exercise 3-1

create a list heading 3 and a list of super powers for our character. Hint you want to
use an unordered list and a h3 to list all of your characters super powers.

---

### Exercise 3-2

Use an ordered list to list the steps to make a peanut butter and jelly sandwich.

---

### Exercise 3-3

We want to find an avatar image, using this bank of images to be our character portrait.

Go to avatar.w3foo.com find your character, and copy the url, and paste it in your website as an image tag.

---

# HTML Links

Lesson 4

---

The ability to create links on html documents and to other html documents is one
of the most powerful features of html. Links are created using the anchor element,
or a command.  It is structured like:

```
<a href="">[Content]</a>
```

---

You can use the anchor element to connect to navigate to sections in the document,
or navigate to other documents on your website or even any website on the internet.

---

The html link uses the href attribute to add the url or path that the link will
navigate to when clicked.

---

### url

uniform resource location

the url is composed of the following segments

* protocol - http or https
* domain - subdomain.domain.suffix
* path - location of asset
* query - key/value pairs of information

---

### url Example

https://www.example.com/index.html?hello=world

---

* protocol - https
* subdomain - www
* domain name - example
* domain suffix - com
* path - /index.html
* query = hello=world

---

# target attribute

What if you open in new tab or window, when the user clicked the link.

Then you would use the target attribute

```
<a href="https://www.wikipedia.com" target="_new">Open in New Tab/Window</a>
```

---

# Demo

---

# Exercises

---

Exercise 4 - 1

Create a new folder, called links-4-1, create three new files in the folder,
menu.html, one.html, two.html.

In menu add a heading 1 element with name menu, and a list element with two line
items, inside each line item, add an anchor element, with the href of one.html and
two.html, and in the contents section place one and two.

In the one and two html files simply add a heading 1 with the name of the
file, and then an anchor element with a href of menu.html and the contents as menu.

---

Exercise 4 - 2

In this exercise, we are going to add links to our profile page for additional
pages.

* photos
* blog
* games
* contact

---

Exercise 4 - 3

Create a maze game.

Create a new folder call it 'maze-game' then create an index.html page and add a
description, then after the description, provide 2 or more choices, door 1 or door 2.

Then create the door 1 or door 2 pages, and on each of those pages write a description,
and provide two or more choices, with an option to go back to the previous page.

Using the technique, create a nested maze to find waldo or find the gold in an
adventure, then at the end, let your neighbor play the game by giving them the
url.

Add the link to your games page in your character profile.

---

# HTML Sections and Articles

Lesson 5

---

Just like there are tags for headings and paragraphs, there are more elements that
describe sections, navigation, articles and dividers. The presentation of these
elements can be customized using css or stylesheets.

---

The generic element is called `<div>` and more descriptive elements that have the
same block functionality are:

* header/footer
* nav
* main
* section
* article

---

```
<div class="container">
  <div class="header">
    <h1>Title</h1>
  </div>
  <div class="main">
    <div class="article">
      <h2>Article Header</h2>
      <p>Paragraph One</p>
    </div>
  </div>
</div>
```

---

```
<nav></nav>
<section class="container">
  <header>
    <h1>Header</h1>
  </header>
  <main>
    <article>
      <header>
        <h2>Article Header</h2>
      </header>
      <section>
        <p>Content</p>
      </section>
    </article>
  </main>
</section>
```

---

Using these elements, we can start to structure our HTML Documents it more intuitive
and understandable way.

For example, lets take our blog section, which contains a list of articles.

---

# Block vs Inline

---

There are a couple of elements that provide inline scope or in-place presentation
changes.

* span
* a
* em

---

```
<p>This is a paragraph that has an <span>inline</span> element embedded in the html document</p>
```

---

# Demo

---

# Exercises

---

Exercise 5-1

In this exercise, we want to create as many blog posts we can on our character
profile, we will use a set of madlibs templates to provide content for the articles
or create our own content, you should create at least 3 articles, and there should
be a header section and a main section.  Each article, should have a header.

---

Madlibs 1

---

Madlibs 2

---

Madlibs 3

---

# DEMO   

---

# HTML Forms

Lesson 6

---

Not only does HTML have a lot of options for presenting data, it also can be
used to collect data from visitors of a site or users of a web app.  

---

HTML has a full set of form elements that help instruct browsers how to build
user interfaces to capture input from the users of your website or webapp.

* form
* input
* select
* label
* textarea
* button

---

Building forms requires a nested element of `form` then inside the form user
interface elements can be specified.

---

Input will show a single text entry box:

```
<input name="username"></input>
```

---

Select will provide a list of options for the user to choose, inside the select
element, are children option elements that display the values that can be chosen.

```
<select name="color">
  <option>Red</option>
  <option>Green</option>
  <option>Blue</option>
</select>
```

---

Label is an user interface element that the user can use to describe a user interface element.

```
<label for="username">Username</label>
<input id="username" name="username"></input>
```

---

Textarea is a user interface input box that can enable the user to enter more than one line of
text at a time.

```
<textarea name="comments" rows="3"></textarea>
```

---

Button is a user interface element that enables the user to instruct the application
to perform a function.

```
<button>Submit</button>
<button>Cancel</button>
```

---

In this demo, we will create a contact us web page for our character, so that visitors
of our characters website can reach out and communicate to our character.  For this
exercise we will just build the form, it won't work on to later in the program.

---

# Demo

---

# Exericses

---

Exercise 6-1

Create a contact us page for your character, add the link to your home page.

---

### Setup

The setup document template looks like the following:

    <!doctype html>
     <html>
       <head>
         <title>Couch2Code - Learn HTML</title>
         <script src="https://jspm.io/system@0.19.js"></script>
         <script>
             System.config({
                 paths: {
                     "learn-html:*": "https://rawgit.com/couch2code/learn-html/master/*/index.js"
                 }
             })
         </script>
       </head>
       <body>
         <div class="container">
           <!-- Add your code here -->

         </div>
         <script>
           System.import('learn-html:ex1')
             .then(v => v())
             //.catch(e => console.log(e))
         </script>
       </body>
     </html>
