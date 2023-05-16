from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from RealEstateSwipe_APP.models import Message, Conversation, User, Property, Advantage, Picture
from RealEstateSwipe_APP.serializers import (
    MessageSerializer, 
    #ConversationSerializer, 
    #UserSerializer, 
    #PropertySerializer, 
    #AdvantageSerializer, 
    #PictureSerializer,
)


@api_view(['GET', ])
def rest_message_view(request):
    try:
        message = Message.objects.get()
    except Message.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = MessageSerializer(message)
    return Response(serializer.data)