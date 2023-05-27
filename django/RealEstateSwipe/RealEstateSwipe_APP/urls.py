from django.urls import path
from django.views.generic import RedirectView
from RealEstateSwipe_APP.views import *

urlpatterns = [
    path('', RedirectView.as_view(url='messages/1/', permanent=False), name="Conversation_1"),
    
    # To send JSON responses
    path('messages/<idConv>/', rest_message_view, name="messages_rest"),
    path('pictures/<idProp>/', rest_picture_view, name="picture_rest"),

    # Form testing
    # path('upload/property/', upload_property, name = 'upload_property'),
]
