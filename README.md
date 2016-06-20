# rest-project

## Run
    $ git clone https://github.com/marcosmoresco/rest-project.git
    $ cd rest-project
    $ npm start

## Examples

Show all products

    $ http://localhost:3000/products	

Find product by id
    
    $ http://localhost:3000/products/574f8c9d58141d951819e373

Save product by post
   
      $ POST : http://localhost:3000/products
      JSON :  {
	 	 "name": "product3",
	 	 "description": "Description for product3",
		  "price": 11.5,
		  "category": "Category for product3"
	      }

Update product by put
   
     $ PUT : http://localhost:3000/products
      JSON: { 
 		 "name": "product3",
		  "description": "Description test for product3",
		  "price": 11.5,
		  "category": "Category for product3",
		  "_id": "574f8d643199c90119b0498c"
	    } 	

Delete product
   
     $ DELETE : http://localhost:3000/products
     JSON : {
 		 "_id": "574e4044dcba0f3c4a56cf77"
	    }	 			
