from django.db import models

# Create your models here.

class ProductListType(models.Model):
    product_serial_No=models.IntegerField(null=True)
    product_serial_Name=models.CharField(max_length=50)
    
class ProductList(models.Model):
    product_type=models.ForeignKey(ProductListType,null=True,on_delete=models.SET_NULL)
    product_name=models.CharField(max_length=50)
    product_price=models.IntegerField(default=0)
    product_image=models.ImageField(null=True)
    product_quantity=models.IntegerField(default=0)
    product_kg=models.IntegerField(default=0)

class UserInfo(models.Model):
    UserFullName=models.CharField(max_length=50)
    UserEmail=models.EmailField(max_length=50)
    UserPassword=models.IntegerField()

class ProductAddtoCart(models.Model):
    atc_type=models.ForeignKey(ProductListType,null=True,on_delete=models.SET_NULL)
    atc_name=models.CharField(max_length=50)
    atc_price=models.IntegerField(default=0)
    atc_image=models.ImageField(null=True)
    atc_quantity=models.IntegerField(default=0)
    atc_kg=models.IntegerField(default=0)

