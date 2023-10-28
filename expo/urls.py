from  django.urls import path
from .views import PerformaCreateView

urlpatterns=[
    path('performa/',PerformaCreateView.as_view(),name='performa'),
]