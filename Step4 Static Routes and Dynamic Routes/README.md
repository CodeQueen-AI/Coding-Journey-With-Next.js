# Static Routes
These pages are pre-made and available on the server, and they don’t change until the website is rebuilt These are fixed pages that always display the same content, like an "About" or "Contact" page

# Dynamic Routes
A route where part of the URL is dynamic, like `localhost:3000/post/[id]`, where `[id]` can change based on the content
  
# Nested Dynamic Route
A dynamic route inside another dynamic route, like `localhost:3000/category/[categoryId]/post/[postId]`, where both `categoryId` and `postId` are dynamic

# UseParams() 
This hooks allow to access the dynmauc parameters from the url this hook is used to get dynamic values from the URL 
    console{id : 123}

# UsePathname() 
This Hook returns the full path of the current URL