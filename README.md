<h1 align="center">Manh Khanh's project</h1>

## Product

-   id: id sản phẩm
-   name: tên sản phẩm
-   price: giá
-   quantity: số lượng
-   vendor_id: người bán
-   description: mô tả sản phẩm
-   status: trạng thái(active, inactive, approved, under review, violation)
-   category: phân loại hàng
-   created_at: thời gian tạo
-   updated_at: thời gian cập nhật

## ExtendProduct

-   id
-   name
-   product_id
-   type (size, color)
-   quantity -> nullable

## ImageProduct

-   id
-   url
-   product_id

## User

-   id
-   username
-   email
-   role
-   avatar
-   status ('active', 'deleted')
-   password
-   created_at
-   updated_at

## AdminMenu

-   name
-   parent_id
-   controller
-   area
-   action
-   link
-   position
-   icon
-   status

## Navbar

-   name
-   parent_id
-   controller
-   area
-   action
-   link
-   position
-   icon
-   status

## Cart

- id
- product_id
- size
- color
- quantity
- status