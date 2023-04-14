## Frontend of fewHue

[live site](https://fewheu.web.app/)

So, basically, fewhue is a headwear brand.
Initial feature to implement is

- one can place order without logging in
- just place order for user

for admin

- a admin login
- admin panel to add, read, update, delete product
- admin panel to add, read, update, delete category
- see all(new) orders
- set order status of new order(processing/shipping/delivered/cancel)

so we build a data model of products where each product is connected to a category model
and admin can CRUD e category. We basically fetched product data and product photos separately to decrease load time.
We kept the product photo in DB.

probable features:

- user sign in(firebase)
- proper user profile
- more optimized admin panel to make marketing decision
