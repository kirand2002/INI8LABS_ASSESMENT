

# Create your views here.
from rest_framework import generics, mixins
from .models import Registration
from .serializers import RegistrationSerializer

class RegistrationListCreateView(mixins.ListModelMixin,
                                  mixins.CreateModelMixin,
                                  generics.GenericAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class RegistrationRetrieveUpdateDestroyView(mixins.RetrieveModelMixin,
                                             mixins.UpdateModelMixin,
                                             mixins.DestroyModelMixin,
                                             generics.GenericAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
    
from django.shortcuts import render

def index_view(request):
    return render(request, 'index.html')



