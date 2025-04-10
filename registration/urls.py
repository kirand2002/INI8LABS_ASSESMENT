from django.urls import path
from .views import *

urlpatterns = [
     path('', index_view),
    path('api/registrations/', RegistrationListCreateView.as_view()),
    path('api/registrations/<int:pk>/', RegistrationRetrieveUpdateDestroyView.as_view()),
]
