from django.shortcuts import render
from .models import PerformaDoc
from .serializers import PerformaDocSerializer

from rest_framework.generics import CreateAPIView

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class PerformaCreateView(APIView):
    serializer_class = PerformaDocSerializer
    
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    from rest_framework.views import APIView

    def get(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        performa_doc_data = PerformaDoc.objects.all()  
        serializer = PerformaDocSerializer(performa_doc_data, many=True)
        return Response(serializer.data)