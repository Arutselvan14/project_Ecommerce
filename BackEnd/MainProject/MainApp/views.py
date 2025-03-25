from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .models import *
from .serializers import *

# Create your views here.

class ProductsType_view(viewsets.ModelViewSet):
    queryset=ProductListType.objects.all()
    serializer_class=ProductListType_serial

class Products_view(viewsets.ModelViewSet):
    queryset=ProductList.objects.all()
    serializer_class=ProductList_serial

class Products_items_Filter(APIView):
    def get(self,request,id):
        collection_data=ProductList.objects.filter(product_type = id)
        json_data=ProductList_serial(collection_data,many= True).data
        return Response(json_data)
    
class UserLogin_view(viewsets.ModelViewSet):
    queryset=UserInfo.objects.all()
    serializer_class=UserInfo_Serial
