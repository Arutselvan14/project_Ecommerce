from rest_framework.serializers import *
from .models import *

class ProductListType_serial(ModelSerializer):
    class Meta:
        model = ProductListType
        fields = '__all__'

class ProductList_serial(ModelSerializer):
    class Meta:
        model = ProductList
        fields = '__all__' 

class UserInfo_Serial(ModelSerializer):
    class Meta:
        model = UserInfo
        fields = '__all__' 