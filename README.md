# What is HTML?

HTML is a markup language that describes how a internet browser should display documents and applications. HTML uses a repeatable pattern to understand the begining and ending of a statement and the statement commmand.

   <command> contents </command>

Using the `less than` and `greather than` symbols wrapped around a command represents the beginning of the statement and the `less than`, `backslash`, `command` and `greater than` symbols represent the end of the statement.

---

## Paragraph Element

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

### Exercise 1

In the body section of the html document, there is a container element, inside that container element, start your exercise by creating a paragraph element with the following contents.

    Html is the markup language of the internet.  It stands for hyper text markup language. The specification or language contains a set of instructions that informs the browser what to display.

    Html consists of elements, these elements contain a start tag, contents and an end tag. They are the building blocks of an html document.

    A HTML Tag commonly refers to the tag name, but the actual description of the tag is the combination of angle brackets and tag name, and should be referenced as start tag and end tag.

---

Once you have finished creating 3 paragraph elements in your html document, in the script section of the import command, you want to import `npm:couch2code/html-ex1` and invoke the `validate` command.

    <script>
      System.import('npm:@couch2code/learn-html/ex1').then(function (validate) {
        validate()
      })
    </script>

This script will check your work and present you with a success message if you completed the exercise correctly, if you did not, it will present you with a description of what may be missing.  You can view the document and run the script by opening the document in your web browser of choice.

---

### Exercise 2

In this exercise, we want to use two elements, a paragraph element and a heading 1 element. The heading 1 element uses the h1 tag.  Ex: <h1>contents</h1> and of course the paragraph element that is represented using the p tag. Ex: <p>contents</p>

    I am a Heading 1 element

    I am a paragraph element

    I am another paragraph element

---

Validate your document by running the following command in the system import statement.

    <script>
      System.import('npm:@couch2code/learn-html/ex2').then(function (validate) {
        validate()
      })
    </script>

---

### Exercise 3

[TODO]

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
