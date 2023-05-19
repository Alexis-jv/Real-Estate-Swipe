from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from RealEstateSwipe_APP.models import Message, Conversation, User, Property, Advantage, Picture
from RealEstateSwipe_APP.serializers import (
    MessageSerializer, 
    #ConversationSerializer, 
    #UserSerializer, 
    PropertySerializer, 
    #AdvantageSerializer, 
    PictureSerializer,
)

# ---------------------------------------------------------------------------------
# Views with JSON responses

@api_view(['GET', ])
def rest_message_view(request,idConv):
    try:
        message = Message.objects.all().filter(idConversation=idConv)
    except Message.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = MessageSerializer(message,many=True)
    return Response(serializer.data)

@api_view(['GET', ])
def rest_picture_view(request,idProp):
    try:
        picture = Picture.objects.all().filter(idProperty=idProp)
    except Picture.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = PictureSerializer(picture,many=True)
    return Response(serializer.data)




# ---------------------------------------------------------------------------------
# Views to upload data from the front-end

from django.shortcuts import render, redirect
from RealEstateSwipe_APP.forms import PictureForm, PropertyForm, AdvantageForm, UserForm, ConversationForm, MessageForm

# Work in progress -> Will not work as we will most certainly not use it
"""
def upload_property(request):
    if request.method == 'POST':
        form = PropertyForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
        return redirect('')
    else:
        form = PropertyForm()
        context = {
            'form': form
        }
    return render(request, '/properties/', context)
"""


