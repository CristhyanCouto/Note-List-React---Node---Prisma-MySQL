This is a first version of a note list coded with React, Node and Prisma

The backend is inside "note-app-server", so  be free to change anything you want.

For safety securitys I've changed the the database url, so you just have to
set up the .env file, and the url inside the index.ts.
I've used the url when I declared the prisma instance because I was getting
erros within Prisma, it was creating the tables inside the database, but it
was having trouble with the requests.

#Incoming features:

Components - at this moment, I've started this project inside a single tsx file
so I'll refactor it into components.

Search bar - for searching notes and sorting them by title or id.

Fixing the paragraphs inside notes.

Updating notes from inside itself.